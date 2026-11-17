import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { db, storage, loginWithGoogle, onAuthChange } from "../../assets/firebase-auth-default.js?v=20261118-board";

const ADMIN_EMAIL = "museumst@gmail.com";
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_IMAGES = 2;
const SANITIZE_OPTIONS = {
  ALLOWED_TAGS: ["p", "br", "strong", "em", "u", "span", "a", "ol", "ul", "li", "blockquote"],
  ALLOWED_ATTR: ["href", "target", "rel", "class"],
};

const isEmbedded = new URLSearchParams(window.location.search).has("embed");
const loginButton = document.querySelector("#board-login");
const composer = document.querySelector("#board-composer");
const imageInput = document.querySelector("#board-image-input");
const imageButton = document.querySelector(".board-image-button");
const draftImagesElement = document.querySelector("#board-draft-images");
const saveButton = document.querySelector("#board-save");
const cancelButton = document.querySelector("#board-cancel");
const statusElement = document.querySelector("#board-status");
const feed = document.querySelector("#board-feed");

document.documentElement.classList.toggle("is-embedded", isEmbedded);

let quill;
let currentUser = null;
let posts = [];
let editingId = null;
let draftImages = [];
let removedImages = [];

function isAdmin() {
  return currentUser?.email === ADMIN_EMAIL;
}

function sanitizeHtml(value = "") {
  return window.DOMPurify.sanitize(value, SANITIZE_OPTIONS);
}

function setStatus(message = "", isError = false) {
  statusElement.textContent = message;
  statusElement.classList.toggle("is-error", isError);
}

function setComposerBusy(isBusy) {
  saveButton.disabled = isBusy;
  imageInput.disabled = isBusy;
  imageButton.classList.toggle("is-disabled", isBusy);
}

function formatDate(value) {
  const date = value?.toDate?.();
  if (!date) return "방금 전";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function clearDraftImages() {
  draftImages.forEach((image) => {
    if (image.previewUrl) URL.revokeObjectURL(image.previewUrl);
  });
  draftImages = [];
}

function renderDraftImages() {
  draftImagesElement.replaceChildren();
  draftImages.forEach((image, index) => {
    const preview = document.createElement("div");
    preview.className = "board-image-preview";
    const img = document.createElement("img");
    img.src = image.previewUrl || image.url;
    img.alt = "첨부한 이미지";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "X";
    remove.setAttribute("aria-label", "이미지 제거");
    remove.addEventListener("click", () => {
      const [removed] = draftImages.splice(index, 1);
      if (removed.previewUrl) URL.revokeObjectURL(removed.previewUrl);
      if (removed.path) removedImages.push(removed);
      renderDraftImages();
    });
    preview.append(img, remove);
    draftImagesElement.append(preview);
  });
}

function resetComposer() {
  clearDraftImages();
  removedImages = [];
  editingId = null;
  imageInput.value = "";
  quill.setText("");
  saveButton.textContent = "게시";
  cancelButton.hidden = true;
  setStatus();
  renderDraftImages();
}

function addImages(files) {
  const selected = Array.from(files);
  const available = MAX_IMAGES - draftImages.length;
  if (!available) {
    setStatus("게시물당 이미지는 최대 2장입니다.", true);
    return;
  }
  const valid = selected.filter((file) => file.type.startsWith("image/") && file.size <= MAX_IMAGE_SIZE);
  if (valid.length !== selected.length) {
    setStatus("5MB 이하의 이미지 파일만 첨부할 수 있습니다.", true);
  }
  valid.slice(0, available).forEach((file) => {
    draftImages.push({ file, previewUrl: URL.createObjectURL(file) });
  });
  imageInput.value = "";
  renderDraftImages();
}

async function resizeImage(file) {
  const sourceUrl = URL.createObjectURL(file);
  const source = new Image();
  try {
    await new Promise((resolve, reject) => {
      source.onload = resolve;
      source.onerror = reject;
      source.src = sourceUrl;
    });
    const scale = Math.min(1, 1600 / Math.max(source.naturalWidth, source.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(source.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(source.naturalHeight * scale));
    canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((result) => result ? resolve(result) : reject(new Error("이미지를 처리하지 못했습니다.")), "image/jpeg", 0.86);
    });
    return new File([blob], "board-image.jpg", { type: "image/jpeg" });
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

async function uploadDraftImages(postId) {
  return Promise.all(draftImages.map(async (image, index) => {
    if (image.url) return { url: image.url, path: image.path };
    const resized = await resizeImage(image.file);
    const path = `board/${postId}/${Date.now()}-${index}.jpg`;
    const imageRef = ref(storage, path);
    await uploadBytes(imageRef, resized, { contentType: "image/jpeg" });
    return { path, url: await getDownloadURL(imageRef) };
  }));
}

function appendPostActions(header, post) {
  if (!isAdmin()) return;
  const actions = document.createElement("div");
  actions.className = "board-entry-actions";
  const edit = document.createElement("button");
  edit.className = "board-entry-action";
  edit.type = "button";
  edit.textContent = "수정";
  edit.addEventListener("click", () => editPost(post));
  const remove = document.createElement("button");
  remove.className = "board-entry-action is-danger";
  remove.type = "button";
  remove.textContent = "삭제";
  remove.addEventListener("click", () => deletePost(post));
  actions.append(edit, remove);
  header.append(actions);
}

function renderPosts() {
  feed.replaceChildren();
  if (!posts.length) {
    const message = document.createElement("p");
    message.className = "board-message";
    message.textContent = "아직 작성된 글이 없습니다.";
    feed.append(message);
    return;
  }
  posts.forEach((post) => {
    const entry = document.createElement("article");
    entry.className = "board-entry";
    const header = document.createElement("header");
    header.className = "board-entry-header";
    const time = document.createElement("time");
    time.dateTime = post.createdAt?.toDate?.().toISOString?.() || "";
    time.textContent = formatDate(post.createdAt);
    header.append(time);
    appendPostActions(header, post);
    const content = document.createElement("div");
    content.className = "board-content";
    content.innerHTML = sanitizeHtml(post.bodyHtml || "");
    entry.append(header, content);
    if (post.images?.length) {
      const images = document.createElement("div");
      images.className = "board-images";
      post.images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.url;
        img.alt = "게시물 이미지";
        img.loading = "lazy";
        images.append(img);
      });
      entry.append(images);
    }
    feed.append(entry);
  });
}

function editPost(post) {
  editingId = post.id;
  clearDraftImages();
  draftImages = (post.images || []).map((image) => ({ ...image }));
  removedImages = [];
  quill.clipboard.dangerouslyPasteHTML(sanitizeHtml(post.bodyHtml || ""));
  saveButton.textContent = "저장";
  cancelButton.hidden = false;
  setStatus("수정 중입니다.");
  renderDraftImages();
  composer.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function savePost() {
  if (!isAdmin()) return;
  const hasText = Boolean(quill.getText().trim());
  if (!hasText && !draftImages.length) {
    setStatus("내용 또는 이미지를 추가하세요.", true);
    return;
  }
  const postRef = editingId ? doc(db, "boardPosts", editingId) : doc(collection(db, "boardPosts"));
  setComposerBusy(true);
  setStatus("저장 중입니다.");
  try {
    const images = await uploadDraftImages(postRef.id);
    const payload = {
      bodyHtml: sanitizeHtml(quill.root.innerHTML),
      images,
      updatedAt: serverTimestamp(),
    };
    if (editingId) {
      await updateDoc(postRef, payload);
    } else {
      await setDoc(postRef, { ...payload, createdAt: serverTimestamp() });
    }
    await Promise.all(removedImages.map((image) => deleteObject(ref(storage, image.path)).catch(() => {})));
    resetComposer();
    await loadPosts();
  } catch (error) {
    console.error(error);
    setStatus("저장하지 못했습니다. Firebase 설정과 보안 규칙을 확인하세요.", true);
  } finally {
    setComposerBusy(false);
  }
}

async function deletePost(post) {
  if (!isAdmin() || !window.confirm("이 글을 삭제할까요?")) return;
  try {
    await deleteDoc(doc(db, "boardPosts", post.id));
    await Promise.all((post.images || []).map((image) => deleteObject(ref(storage, image.path)).catch(() => {})));
    if (editingId === post.id) resetComposer();
    await loadPosts();
  } catch (error) {
    console.error(error);
    setStatus("삭제하지 못했습니다.", true);
  }
}

async function loadPosts() {
  try {
    const snapshot = await getDocs(query(collection(db, "boardPosts"), orderBy("createdAt", "desc")));
    posts = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
    renderPosts();
  } catch (error) {
    console.error(error);
    feed.innerHTML = '<p class="board-message">글을 불러오지 못했습니다.</p>';
  }
}

if (!window.Quill || !window.DOMPurify) {
  feed.innerHTML = '<p class="board-message">게시판 편집기를 불러오지 못했습니다.</p>';
} else {
  const Font = window.Quill.import("formats/font");
  Font.whitelist = ["serif", "monospace"];
  window.Quill.register(Font, true);
  quill = new window.Quill("#board-editor", {
    theme: "snow",
    placeholder: "기록을 남겨보세요.",
    modules: {
      toolbar: [
        [{ font: [false, "serif", "monospace"] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        ["link"],
        ["clean"],
      ],
    },
  });
  imageInput.addEventListener("change", (event) => addImages(event.target.files));
  saveButton.addEventListener("click", savePost);
  cancelButton.addEventListener("click", resetComposer);
  loginButton.addEventListener("click", () => loginWithGoogle().catch((error) => setStatus(error.message, true)));
  onAuthChange((user) => {
    currentUser = user;
    composer.hidden = !isAdmin();
    loginButton.hidden = Boolean(user) || isEmbedded;
    renderPosts();
  }, (error) => setStatus(error.message, true));
  loadPosts();
}
