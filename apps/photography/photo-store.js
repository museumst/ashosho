import { collection, doc, getDocsFromServer, runTransaction, serverTimestamp, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { deleteObject, getBlob, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { db, storage } from "../../assets/firebase-auth-default.js?v=20261117-photography";

export const MAX_FILE_SIZE = 15 * 1024 * 1024;
export const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const PUBLIC = "photos";
const PRIVATE = "hiddenPhotos";

function photoDoc(photo) {
  return doc(db, photo.hidden ? PRIVATE : PUBLIC, photo.id);
}

function photoPaths(photo) {
  return [photo.storagePath, photo.thumbnailPath].filter(Boolean);
}

async function removeFiles(paths) {
  const results = await Promise.allSettled(paths.map((path) => deleteObject(ref(storage, path))));
  return paths.filter((_, index) => results[index].status === "rejected" && results[index].reason?.code !== "storage/object-not-found");
}

async function stageImages(id, hidden, original, thumbnail, onProgress) {
  const folder = `${hidden ? "photography-private" : "photography"}/${id}/${crypto.randomUUID()}`;
  const extension = IMAGE_TYPES.indexOf(original.type);
  const storagePath = `${folder}/original.${["jpg", "png", "webp", "gif"][extension] || "img"}`;
  const thumbnailPath = `${folder}/thumbnail.jpg`;
  const originalRef = ref(storage, storagePath);
  const thumbnailRef = ref(storage, thumbnailPath);
  const metadata = { cacheControl: "private, no-store" };

  try {
    if (onProgress) {
      const task = uploadBytesResumable(originalRef, original, { ...metadata, contentType: original.type });
      await new Promise((resolve, reject) => task.on("state_changed", onProgress, reject, resolve));
    } else {
      await uploadBytes(originalRef, original, { ...metadata, contentType: original.type });
    }
    await uploadBytes(thumbnailRef, thumbnail, { ...metadata, contentType: thumbnail.type });
    if (hidden) return { storagePath, thumbnailPath };
    return { storagePath, thumbnailPath, imageUrl: await getDownloadURL(originalRef), thumbnailUrl: await getDownloadURL(thumbnailRef) };
  } catch (error) {
    await removeFiles([storagePath, thumbnailPath]);
    throw error;
  }
}

async function withStagedImages(id, hidden, original, thumbnail, commit, onProgress) {
  const images = await stageImages(id, hidden, original, thumbnail, onProgress);
  try {
    await commit(images);
  } catch (error) {
    await removeFiles(photoPaths(images));
    throw error;
  }
}

export async function createPhoto(original, thumbnail, fields, onProgress) {
  const target = doc(collection(db, PUBLIC));
  await withStagedImages(target.id, false, original, thumbnail, (images) =>
    setDoc(target, { ...fields, ...images, createdAt: serverTimestamp() }), onProgress);
}

export async function listManagedPhotos() {
  const snapshots = await Promise.all([PUBLIC, PRIVATE].map((name) => getDocsFromServer(collection(db, name))));
  return snapshots.flatMap((snapshot, index) => snapshot.docs.map((item) => ({ ...item.data(), id: item.id, hidden: index === 1 })))
    .sort((a, b) => (b.takenAt || "").localeCompare(a.takenAt || ""));
}

export function readPhotoFile(path) {
  return getBlob(ref(storage, path), MAX_FILE_SIZE);
}

async function changePhoto(photo, apply) {
  const source = photoDoc(photo);
  await runTransaction(db, async (transaction) => {
    const current = (await transaction.get(source)).data();
    if (!current || current.storagePath !== photo.storagePath || Boolean(current.deleting) !== Boolean(photo.deleting)) {
      throw new Error("사진 상태가 바뀌었습니다. 목록을 확인하고 다시 시도하세요.");
    }
    await apply(transaction, source, current);
  });
}

export async function finishCleanup(photo) {
  const pending = await removeFiles(photo.cleanup || []);
  await changePhoto(photo, (transaction, source) => {
    if (photo.deleting && !pending.length) transaction.delete(source);
    else transaction.update(source, { cleanup: pending });
  });
  return pending.length === 0;
}

export async function savePhotoImages(photo, hidden, original, thumbnail) {
  let updated;
  await withStagedImages(photo.id, hidden, original, thumbnail, (images) =>
    changePhoto(photo, async (transaction, source, current) => {
      const target = photoDoc({ id: photo.id, hidden });
      if (hidden !== photo.hidden && (await transaction.get(target)).exists()) {
        throw new Error("사진 상태가 바뀌었습니다. 목록을 확인하고 다시 시도하세요.");
      }
      const data = { ...current, ...images, cleanup: [...(current.cleanup || []), ...photoPaths(current)] };
      if (hidden) {
        delete data.imageUrl;
        delete data.thumbnailUrl;
      }
      transaction.set(target, data);
      if (hidden !== photo.hidden) transaction.delete(source);
      updated = { ...data, id: photo.id, hidden };
    }));
  return finishCleanup(updated);
}

export async function changePhotoVisibility(photo) {
  const [original, thumbnail] = await Promise.all(photoPaths(photo).map(readPhotoFile));
  return savePhotoImages(photo, !photo.hidden, original, thumbnail);
}

export async function deletePhoto(photo) {
  let deleting;
  await changePhoto(photo, async (transaction, source, current) => {
    const target = photoDoc({ id: photo.id, hidden: true });
    if (!photo.hidden && (await transaction.get(target)).exists()) {
      throw new Error("사진 상태가 바뀌었습니다. 목록을 확인하고 다시 시도하세요.");
    }
    const data = { storagePath: current.storagePath, takenAt: current.takenAt, place: current.place,
      deleting: true, cleanup: [...(current.cleanup || []), ...photoPaths(current)] };
    transaction.set(target, data);
    if (!photo.hidden) transaction.delete(source);
    deleting = { ...data, id: photo.id, hidden: true };
  });
  return finishCleanup(deleting);
}
