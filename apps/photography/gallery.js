import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db, onAuthChange } from "../../assets/firebase-auth-default.js?v=20261117-photography";

const ADMIN_EMAIL = "museumst@gmail.com";
const isEmbedded = new URLSearchParams(window.location.search).has("embed");
const photoGrid = document.querySelector("#photo-grid");
const searchInput = document.querySelector("#photo-search");
const uploadLink = document.querySelector("#upload-link");
const authName = document.querySelector("#auth-name");
const lightbox = document.querySelector("#photo-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");

document.documentElement.classList.toggle("is-embedded", isEmbedded);
const lightboxClose = document.querySelector("#lightbox-close");

let photos = [];

function normalize(value = "") {
  return value.toLocaleLowerCase("ko-KR").replace(/[\s._/-]/g, "");
}

function formatTakenAt(value = "") {
  const [date, time] = value.split("T");
  if (!date) return "";
  return `${date.replace(/-/g, ".")} ${time || ""}`.trim();
}

function photoCaption(photo) {
  return [formatTakenAt(photo.takenAt), photo.place].filter(Boolean).join(" · ");
}

function matchesSearch(photo, searchValue) {
  const terms = searchValue.trim().split(/\s+/).filter(Boolean).map(normalize);
  if (!terms.length) return true;
  const text = normalize([photo.searchText, photoCaption(photo), ...(photo.tags || [])].join(" "));
  return terms.every((term) => text.includes(term));
}

function openLightbox(photo) {
  lightboxImage.src = photo.imageUrl;
  lightboxImage.alt = photoCaption(photo);
  lightboxCaption.textContent = photoCaption(photo);
  lightbox.showModal();
}

function renderPhotos() {
  const visiblePhotos = photos.filter((photo) => matchesSearch(photo, searchInput.value));
  photoGrid.replaceChildren();

  if (!visiblePhotos.length) {
    const message = document.createElement("p");
    message.className = "photo-message photo-empty";
    message.textContent = photos.length ? "검색 결과가 없습니다." : "아직 등록된 사진이 없습니다.";
    photoGrid.append(message);
    return;
  }

  visiblePhotos.forEach((photo) => {
    const card = document.createElement("button");
    card.className = "photo-card";
    card.type = "button";
    card.setAttribute("aria-label", `${photoCaption(photo)} 사진 크게 보기`);

    const image = document.createElement("img");
    image.src = photo.thumbnailUrl || photo.imageUrl;
    image.alt = photoCaption(photo);
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.className = "photo-caption";
    const time = document.createElement("time");
    time.dateTime = photo.takenAt || "";
    time.textContent = formatTakenAt(photo.takenAt);
    const place = document.createElement("span");
    place.textContent = photo.place || "";
    caption.append(time, place);
    card.append(image, caption);
    card.addEventListener("click", () => openLightbox(photo));
    photoGrid.append(card);
  });
}

async function loadPhotos() {
  try {
    const snapshot = await getDocs(query(collection(db, "photos"), orderBy("takenAt", "desc")));
    photos = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
    renderPhotos();
  } catch (error) {
    console.error(error);
    photoGrid.innerHTML = '<p class="photo-message photo-empty">사진을 불러오지 못했습니다.</p>';
  }
}

searchInput.addEventListener("input", renderPhotos);
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin || event.data?.type !== "photography-search") return;
  searchInput.value = typeof event.data.value === "string" ? event.data.value : "";
  renderPhotos();
});
lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

onAuthChange((user) => {
  const isAdmin = user?.email === ADMIN_EMAIL;
  uploadLink.hidden = !isAdmin;
  authName.hidden = !user;
  authName.textContent = user?.displayName || user?.email || "";
});

loadPhotos();
