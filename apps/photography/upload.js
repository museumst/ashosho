import { auth, loginWithGoogle, logout, onAuthChange } from "../../assets/firebase-auth-default.js?v=20261117-photography";
import { changePhotoVisibility, createPhoto, deletePhoto, finishCleanup, IMAGE_TYPES, listManagedPhotos, MAX_FILE_SIZE, readPhotoFile, savePhotoImages } from "./photo-store.js?v=20261121-manage";

const ADMIN_EMAIL = "museumst@gmail.com";
const loginButton = document.querySelector("#login-button");
const logoutButton = document.querySelector("#logout-button");
const authName = document.querySelector("#auth-name");
const accessMessage = document.querySelector("#access-message");
const uploadForm = document.querySelector("#upload-form");
const fileInput = document.querySelector("#photo-file");
const photoDropZone = document.querySelector("#photo-drop-zone");
const takenYear = document.querySelector("#taken-year");
const takenMonth = document.querySelector("#taken-month");
const placeInput = document.querySelector("#place");
const tagsInput = document.querySelector("#tags");
const submitButton = document.querySelector("#submit-button");
const uploadStatus = document.querySelector("#upload-status");
const authStatus = document.querySelector("#auth-status");
const tabs = document.querySelector("#photo-admin-tabs");
const uploadTab = document.querySelector("#upload-tab");
const manageTab = document.querySelector("#manage-tab");
const uploadPane = document.querySelector("#upload-pane");
const managePane = document.querySelector("#manage-pane");
const manageList = document.querySelector("#photo-manage-list");
const manageStatus = document.querySelector("#manage-status");
const replaceFile = document.querySelector("#replace-file");
const backLink = document.querySelector(".photo-back");
if (window.parent !== window) {
  backLink.href = "../../index.html";
  backLink.target = "_top";
}
const previewUrls = new Set();
let selectedTab = uploadTab;
let replacement;
let busy = false;
let loadVersion = 0;

function setStatus(message = "", isError = false, element = uploadStatus) {
  element.textContent = message;
  element.classList.toggle("is-error", isError);
}

function isAdmin(user = auth.currentUser) {
  return user?.email === ADMIN_EMAIL && user.emailVerified;
}

function validImage(file) {
  return IMAGE_TYPES.includes(file.type) && file.size > 0 && file.size < MAX_FILE_SIZE;
}

function setDefaultTakenAt() {
  const now = new Date();
  takenYear.value = now.getFullYear();
  takenMonth.value = String(now.getMonth() + 1).padStart(2, "0");
}

function parseTags(value) {
  return [...new Set(value.split(",").map((tag) => tag.trim()).filter(Boolean))];
}

function normalize(value = "") {
  return value.toLocaleLowerCase("ko-KR").replace(/[\s._/-]/g, "");
}

async function createThumbnail(file) {
  const source = new Image();
  const sourceUrl = URL.createObjectURL(file);
  const canvas = document.createElement("canvas");
  try {
    await new Promise((resolve, reject) => {
      source.onload = resolve;
      source.onerror = () => reject(new Error("이미지 파일을 열 수 없습니다."));
      source.src = sourceUrl;
    });
    const scale = Math.min(1, 900 / Math.max(source.naturalWidth, source.naturalHeight));
    canvas.width = Math.max(1, Math.round(source.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(source.naturalHeight * scale));
    canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }

  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob((result) => result ? resolve(result) : reject(new Error("썸네일을 만들지 못했습니다.")), "image/jpeg", 0.84);
  });
  return new File([blob], "thumbnail.jpg", { type: "image/jpeg" });
}

function updateAccess(user) {
  const allowed = isAdmin(user);
  authName.textContent = user?.displayName || user?.email || "";
  authName.hidden = !user;
  loginButton.hidden = Boolean(user);
  logoutButton.hidden = !user;
  tabs.hidden = !allowed;
  uploadPane.hidden = !allowed || selectedTab !== uploadTab;
  managePane.hidden = !allowed || selectedTab !== manageTab;
  if (!allowed) {
    loadVersion++;
    clearManageList();
    replacement = undefined;
    replaceFile.value = "";
    setStatus("", false, manageStatus);
  } else if (selectedTab === manageTab) {
    loadManageList();
  }

  if (!user) {
    accessMessage.textContent = "업로드하려면 Google로 로그인하세요.";
  } else if (!allowed) {
    accessMessage.textContent = "이 계정에는 사진 관리 권한이 없습니다.";
  } else {
    accessMessage.textContent = "";
  }
  accessMessage.hidden = allowed;
}

async function uploadPhoto(event) {
  event.preventDefault();
  const file = fileInput.files[0];
  if (!isAdmin() || !file || submitButton.disabled) return;

  if (!validImage(file)) {
    setStatus("15MB 미만의 JPEG, PNG, WebP 또는 GIF 파일을 선택하세요.", true);
    return;
  }

  const place = placeInput.value.trim();
  const year = takenYear.valueAsNumber;
  const month = takenMonth.value;
  if (!Number.isInteger(year) || year < 1 || year > 9999 || !/^(0[1-9]|1[0-2])$/.test(month)) {
    setStatus("올바른 촬영 연도와 월을 선택하세요.", true);
    return;
  }
  const takenAt = `${String(year).padStart(4, "0")}-${month}`;
  const tags = parseTags(tagsInput.value);
  submitButton.disabled = true;
  setStatus("업로드를 시작합니다.");

  try {
    const thumbnail = await createThumbnail(file);
    await createPhoto(file, thumbnail, {
      takenAt, place, tags, searchText: normalize([takenAt, place, ...tags].join(" ")),
    }, (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setStatus(`사진 업로드 중: ${progress}%`);
    });

    uploadForm.reset();
    setDefaultTakenAt();
    setStatus("업로드했습니다.");
    if (selectedTab === manageTab) await loadManageList();
  } catch (error) {
    console.error(error);
    setStatus("업로드에 실패했습니다. Firebase Storage 설정과 보안 규칙을 확인하세요.", true);
  } finally {
    submitButton.disabled = false;
  }
}

function selectTab(tab) {
  if (selectedTab === tab || !isAdmin()) return;
  selectedTab = tab;
  for (const item of [uploadTab, manageTab]) {
    item.setAttribute("aria-selected", String(item === tab));
    item.tabIndex = item === tab ? 0 : -1;
  }
  uploadPane.hidden = tab !== uploadTab;
  managePane.hidden = tab !== manageTab;
  if (tab === manageTab && !busy) loadManageList();
}

function clearManageList() {
  manageList.replaceChildren();
  previewUrls.forEach((url) => URL.revokeObjectURL(url));
  previewUrls.clear();
}

function setManagementBusy(value) {
  busy = value;
  manageList.querySelectorAll("button").forEach((button) => { button.disabled = value; });
}

async function runManagement(action, message) {
  if (busy || !isAdmin()) return;
  setManagementBusy(true);
  setStatus("처리 중입니다.", false, manageStatus);
  try {
    const complete = await action();
    if (isAdmin()) setStatus(complete ? message : "이전 파일이 아직 남아 있습니다. ‘파일 정리 재시도’를 눌러주세요.", !complete, manageStatus);
  } catch (error) {
    console.error(error);
    if (isAdmin()) setStatus("작업을 완료하지 못했습니다. 목록 상태를 확인한 뒤 다시 시도하세요.", true, manageStatus);
  } finally {
    await loadManageList(true);
    setManagementBusy(false);
  }
}

function renderManagedPhoto(photo) {
  const row = document.createElement("li");
  row.className = "photo-manage-row";
  const image = document.createElement("img");
  image.alt = "";
  image.loading = "lazy";
  if (!photo.hidden) {
    image.src = photo.thumbnailUrl || photo.imageUrl;
  } else if (!photo.deleting && photo.thumbnailPath) {
    readPhotoFile(photo.thumbnailPath).then((file) => {
      if (!row.isConnected || !isAdmin()) return;
      const url = URL.createObjectURL(file);
      previewUrls.add(url);
      image.src = url;
    }).catch((error) => console.warn("사진 미리보기 실패", error));
  }

  const label = [photo.takenAt?.replace("T", " "), photo.place].filter(Boolean).join(" · ") || "사진";
  const meta = document.createElement("div");
  meta.className = "photo-manage-meta";
  const title = document.createElement("strong");
  title.textContent = label;
  const state = document.createElement("span");
  state.textContent = photo.deleting ? "삭제 정리 필요" : photo.cleanup?.length
    ? (photo.hidden ? "갤러리에서 가려짐 · 기존 링크 차단 미완료" : "공개 · 이전 파일 정리 필요")
    : (photo.hidden ? "숨김" : "공개");
  meta.append(title, state);

  const actions = document.createElement("div");
  actions.className = "photo-manage-actions";
  function addAction(text, handler, icon) {
    const button = document.createElement("button");
    button.className = icon === "trash-2" ? "photo-button is-danger" : "photo-button";
    button.type = "button";
    button.title = text;
    const fallback = document.createElement("span");
    fallback.className = "photo-icon-fallback";
    fallback.textContent = text;
    button.append(fallback);
    if (icon) {
      const glyph = document.createElement("i");
      glyph.dataset.lucide = icon;
      glyph.setAttribute("aria-hidden", "true");
      button.prepend(glyph);
    }
    button.setAttribute("aria-label", `${text}: ${label}`);
    button.disabled = busy;
    button.addEventListener("click", handler);
    actions.append(button);
  }
  if (photo.cleanup?.length) {
    addAction("파일 정리 재시도", () => runManagement(() => finishCleanup(photo), "파일 정리를 완료했습니다."));
  } else {
    addAction("교체", () => {
      replacement = photo;
      replaceFile.value = "";
      replaceFile.click();
    }, "image-up");
    addAction(photo.hidden ? "다시 공개" : "가리기", () => {
      if (!photo.hidden && !window.confirm(`${label}\n이 사진을 가리고 기존 사진 링크를 끊을까요?`)) return;
      runManagement(() => changePhotoVisibility(photo), photo.hidden ? "다시 공개했습니다." : "사진을 가리고 기존 링크를 차단했습니다.");
    }, photo.hidden ? "eye" : "eye-off");
    addAction("삭제", () => {
      if (window.confirm(`${label}\n원본과 썸네일을 삭제할까요?`)) runManagement(() => deletePhoto(photo), "사진을 삭제했습니다.");
    }, "trash-2");
  }
  row.append(image, meta, actions);
  manageList.append(row);
}

async function loadManageList(keepStatus = false) {
  if (!isAdmin()) return;
  const version = ++loadVersion;
  if (!keepStatus) {
    clearManageList();
    setStatus("사진을 불러오는 중입니다.", false, manageStatus);
  }
  try {
    const photos = await listManagedPhotos();
    if (version !== loadVersion || !isAdmin()) return;
    clearManageList();
    photos.forEach(renderManagedPhoto);
    window.lucide?.createIcons();
    if (!keepStatus) setStatus(photos.length ? "" : "아직 등록된 사진이 없습니다.", false, manageStatus);
  } catch (error) {
    if (version !== loadVersion) return;
    console.error(error);
    clearManageList();
    setStatus("관리 목록을 불러오지 못했습니다. Firebase 규칙을 확인한 뒤 사진 관리 탭을 다시 열어주세요.", true, manageStatus);
  }
}

tabs.addEventListener("click", (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) selectTab(tab);
});
tabs.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const tab = event.key === "Home" || (event.key !== "End" && selectedTab === manageTab) ? uploadTab : manageTab;
  selectTab(tab);
  tab.focus();
});
replaceFile.addEventListener("change", () => {
  const file = replaceFile.files[0];
  const photo = replacement;
  replacement = undefined;
  if (!file || !photo || !isAdmin()) return;
  if (!validImage(file)) {
    setStatus("15MB 미만의 JPEG, PNG, WebP 또는 GIF 파일을 선택하세요.", true, manageStatus);
    return;
  }
  runManagement(async () => savePhotoImages(photo, photo.hidden, file, await createThumbnail(file)), "사진을 교체했습니다.");
});

function showAuthError(error) {
  authStatus.hidden = false;
  setStatus(error.message, true, authStatus);
}

loginButton.addEventListener("click", () => loginWithGoogle().catch(showAuthError));
logoutButton.addEventListener("click", () => logout().catch(showAuthError));
photoDropZone.addEventListener("dragover", (event) => {
  if (!event.dataTransfer.types.includes("Files")) return;
  event.preventDefault();
  const allowed = isAdmin() && !submitButton.disabled;
  event.dataTransfer.dropEffect = allowed ? "copy" : "none";
  photoDropZone.classList.toggle("is-dragging", allowed);
});
photoDropZone.addEventListener("dragleave", (event) => {
  if (!photoDropZone.contains(event.relatedTarget)) photoDropZone.classList.remove("is-dragging");
});
photoDropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  photoDropZone.classList.remove("is-dragging");
  if (!isAdmin() || submitButton.disabled) return;
  const files = event.dataTransfer.files;
  if (!files.length) return;
  if (files.length !== 1) {
    setStatus("사진은 한 번에 한 장만 선택할 수 있습니다.", true);
    return;
  }
  if (!validImage(files[0])) {
    setStatus("15MB 미만의 JPEG, PNG, WebP 또는 GIF 파일을 선택하세요.", true);
    return;
  }
  fileInput.files = files;
  setStatus("사진을 선택했습니다.");
});
fileInput.addEventListener("change", () => {
  if (!submitButton.disabled) setStatus();
});
uploadForm.addEventListener("submit", uploadPhoto);
onAuthChange((user) => {
  authStatus.hidden = true;
  updateAccess(user);
}, showAuthError);
setDefaultTakenAt();
