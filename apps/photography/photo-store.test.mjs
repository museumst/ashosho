import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import { createContext, SourceTextModule, SyntheticModule } from "node:vm";

const docs = new Map();
const files = new Map();
let nextId = 0;
let blockedDelete;
let blockedRead;
let blockedCommit = false;
const context = createContext({ Promise, crypto: { randomUUID: () => String(++nextId) } });
const dependencies = [
  ["firebase-firestore.js", {
    collection: (_, name) => name,
    doc: (collection, name, id = String(++nextId)) => name ? { id, path: `${name}/${id}` } : { id, path: `${collection}/${id}` },
    getDocsFromServer: async (name) => ({ docs: [...docs].filter(([path]) => path.startsWith(`${name}/`)).map(([path, data]) => ({ id: path.split("/")[1], data: () => data })) }),
    runTransaction: async (_, handler) => {
      const writes = [];
      await handler({
        get: async ({ path }) => ({ data: () => docs.get(path), exists: () => docs.has(path) }),
        set: ({ path }, data) => writes.push(() => docs.set(path, data)),
        update: ({ path }, fields) => writes.push(() => docs.set(path, { ...docs.get(path), ...fields })),
        delete: ({ path }) => writes.push(() => docs.delete(path)),
      });
      if (blockedCommit) throw new Error("offline");
      writes.forEach((write) => write());
    },
    serverTimestamp: () => 1,
    setDoc: async ({ path }, data) => docs.set(path, data),
  }],
  ["firebase-storage.js", {
    ref: (_, path) => path,
    getBlob: async (path) => {
      if (path === blockedRead || !files.has(path)) throw new Error("unreadable file");
      return files.get(path);
    },
    getDownloadURL: async (path) => {
      assert.match(path, /^photography\//);
      return `https://example.test/${path}?token=test`;
    },
    uploadBytes: async (path, file) => files.set(path, file),
    uploadBytesResumable: () => assert.fail("not used by these tests"),
    deleteObject: async (path) => {
      if (path === blockedDelete) throw new Error("delete failed");
      if (!files.delete(path)) throw { code: "storage/object-not-found" };
    },
  }],
  ["firebase-auth-default.js", { db: {}, storage: {} }],
];

const module = new SourceTextModule(await readFile(new URL("./photo-store.js", import.meta.url), "utf8"), { context });
await module.link((specifier) => {
  const [, exports] = dependencies.find(([name]) => specifier.includes(name));
  return new SyntheticModule(Object.keys(exports), function () {
    for (const [key, value] of Object.entries(exports)) this.setExport(key, value);
  }, { context });
});
await module.evaluate();
const { createPhoto, listManagedPhotos, changePhotoVisibility, savePhotoImages, finishCleanup, deletePhoto } = module.namespace;
const image = { type: "image/jpeg" };
const first = async () => (await listManagedPhotos())[0];

await createPhoto(image, image, { takenAt: "2026-11-21T10:00", place: "Busan" });
const published = await first();
blockedRead = published.thumbnailPath;
await assert.rejects(changePhotoVisibility(published), /unreadable file/);
assert.equal(files.size, 2);
assert.equal((await first()).hidden, false);
blockedRead = undefined;
blockedCommit = true;
await assert.rejects(changePhotoVisibility(published), /offline/);
assert.equal(files.size, 2);
assert.equal((await first()).hidden, false);
blockedCommit = false;
blockedDelete = published.storagePath;
assert.equal(await changePhotoVisibility(published), false);
const hidden = await first();
assert.equal(hidden.hidden, true);
assert.equal(hidden.imageUrl, undefined);
assert.equal(hidden.thumbnailUrl, undefined);
assert.match(hidden.storagePath, /^photography-private\//);
assert.equal(hidden.cleanup[0], published.storagePath);
assert.equal(docs.has(`photos/${published.id}`), false);
assert.equal(files.has(published.thumbnailPath), false);
blockedDelete = undefined;
assert.equal(await finishCleanup(hidden), true);
assert.equal(files.has(published.storagePath), false);

assert.equal(await changePhotoVisibility(await first()), true);
const restored = await first();
assert.equal(restored.hidden, false);
assert.notEqual(restored.imageUrl, published.imageUrl);
assert.equal(restored.place, "Busan");
assert.equal(files.has(hidden.storagePath), false);
assert.equal(await savePhotoImages(restored, false, image, image), true);
const replaced = await first();
assert.notEqual(replaced.imageUrl, restored.imageUrl);
assert.equal(files.has(restored.storagePath), false);

blockedDelete = replaced.thumbnailPath;
assert.equal(await deletePhoto(replaced), false);
assert.equal((await first()).deleting, true);
assert.equal(docs.has(`photos/${replaced.id}`), false);
blockedDelete = undefined;
assert.equal(await finishCleanup(await first()), true);
assert.equal(docs.size, 0);
assert.equal(files.size, 0);
