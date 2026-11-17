import { collection, doc, serverTimestamp, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { deleteObject, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { auth, db, storage, loginWithGoogle, logout, onAuthChange } from "../../assets/firebase-auth-default.js?v=20261117-photography";

const ADMIN_EMAIL = "museumst@gmail.com";
const MAX_FILE_SIZE = 15 * 1024 * 1024;
const loginButton = document.querySelector("#login-button");
const logoutButton = document.querySelector("#logout-button");
const authName = document.querySelector("#auth-name");
const accessMessage = document.querySelector("#access-message");
const uploadForm = document.querySelector("#upload-form");
const fileInput = document.querySelector("#photo-file");
const takenAtInput = document.querySelector("#taken-at");
const placeInput = document.querySelector("#place");
const tagsInput = document.querySelector("#tags");
const submitButton = document.querySelector("#submit-button");
const uploadStatus = document.querySelector("#upload-status");

function setStatus(message = "", isError = false) {
  uploadStatus.textContent = message;
  uploadStatus.classList.toggle("is-error", isError);
}

function setDefaultTakenAt() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  takenAtInput.value = now.toISOString().slice(0, 16);
}

function parseTags(value) {
  return [...new Set(value.split(",").map((tag) => tag.trim()).filter(Boolean))];
}

function normalize(value = "") {
  return value.toLocaleLowerCase("ko-KR").replace(/[\s._/-]/g, "");
}

function extensionFor(file) {
  const match = file.name.match(/\.[a-z0-9]+$/i);
  return match ? match[0].toLowerCase() : ".jpg";
}

async function createThumbnail(file) {
  const source = new Image();
  const sourceUrl = URL.createObjectURL(file);
  await new Promise((resolve, reject) => {
    source.onload = resolve;
    source.onerror = reject;
    source.src = sourceUrl;
  });

  const scale = Math.min(1, 900 / Math.max(source.naturalWidth, source.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(source.naturalHeight * scale));
  canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
  URL.revokeObjectURL(sourceUrl);

  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob((result) => result ? resolve(result) : reject(new Error("썸네일을 만들지 못했습니다.")), "image/jpeg", 0.84);
  });
  return new File([blob], "thumbnail.jpg", { type: "image/jpeg" });
}

function updateAccess(user) {
  const isAdmin = user?.email === ADMIN_EMAIL;
  authName.textContent = user?.displayName || user?.email || "";
  authName.hidden = !user;
  loginButton.hidden = Boolean(user);
  logoutButton.hidden = !user;
  uploadForm.hidden = !isAdmin;

  if (!user) {
    accessMessage.textContent = "업로드하려면 Google로 로그인하세요.";
  } else if (!isAdmin) {
    accessMessage.textContent = "이 계정에는 사진 업로드 권한이 없습니다.";
  } else {
    accessMessage.textContent = "사진 1장과 촬영 정보를 등록합니다.";
  }
}

async function uploadPhoto(event) {
  event.preventDefault();
  const user = auth.currentUser;
  const file = fileInput.files[0];
  if (!user || user.email !== ADMIN_EMAIL || !file) return;

  if (!file.type.startsWith("image/") || file.size > MAX_FILE_SIZE) {
    setStatus("15MB 이하의 이미지 파일만 업로드할 수 있습니다.", true);
    return;
  }

  const place = placeInput.value.trim();
  const takenAt = takenAtInput.value;
  const tags = parseTags(tagsInput.value);
  const photoRef = doc(collection(db, "photos"));
  const storagePath = `photography/${photoRef.id}/original${extensionFor(file)}`;
  const thumbnailPath = `photography/${photoRef.id}/thumbnail.jpg`;
  const storageRef = ref(storage, storagePath);
  const thumbnailRef = ref(storage, thumbnailPath);
  const uploadTask = uploadBytesResumable(storageRef, file, { contentType: file.type });

  submitButton.disabled = true;
  setStatus("업로드를 시작합니다.");

  try {
    await new Promise((resolve, reject) => {
      uploadTask.on("state_changed", (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setStatus(`사진 업로드 중: ${progress}%`);
      }, reject, resolve);
    });

    const thumbnail = await createThumbnail(file);
    const imageUrl = await getDownloadURL(storageRef);
    await uploadBytes(thumbnailRef, thumbnail, { contentType: thumbnail.type });
    const thumbnailUrl = await getDownloadURL(thumbnailRef);
    const searchText = normalize([takenAt, place, ...tags].join(" "));
    await setDoc(photoRef, {
      imageUrl,
      storagePath,
      thumbnailUrl,
      thumbnailPath,
      takenAt,
      place,
      tags,
      searchText,
      createdAt: serverTimestamp(),
    });

    uploadForm.reset();
    setDefaultTakenAt();
    setStatus("업로드했습니다.");
  } catch (error) {
    console.error(error);
    await deleteObject(storageRef).catch(() => {});
    await deleteObject(thumbnailRef).catch(() => {});
    setStatus("업로드에 실패했습니다. Firebase Storage 설정과 보안 규칙을 확인하세요.", true);
  } finally {
    submitButton.disabled = false;
  }
}

loginButton.addEventListener("click", () => loginWithGoogle().catch((error) => setStatus(error.message, true)));
logoutButton.addEventListener("click", () => logout().catch((error) => setStatus(error.message, true)));
uploadForm.addEventListener("submit", uploadPhoto);
onAuthChange(updateAccess, (error) => setStatus(error.message, true));
setDefaultTakenAt();
