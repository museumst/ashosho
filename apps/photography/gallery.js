import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db, onAuthChange } from "../../assets/firebase-auth-default.js?v=20261117-photography";

const ADMIN_EMAIL = "museumst@gmail.com";
const isEmbedded = new URLSearchParams(window.location.search).has("embed");
const photoGrid = document.querySelector("#photo-grid");
const searchInput = document.querySelector("#photo-search");
const uploadLink = document.querySelector("#upload-link");
const authName = document.querySelector("#auth-name");
const slider = document.querySelector("#photo-slider");
const sliderImage = document.querySelector("#slider-image");
const sliderCaption = document.querySelector("#slider-caption");
const sliderClose = document.querySelector("#slider-close");
const sliderPrev = document.querySelector("#slider-prev");
const sliderNext = document.querySelector("#slider-next");

document.documentElement.classList.toggle("is-embedded", isEmbedded);

let photos = [];
let visiblePhotos = [];
let currentSlideIndex = 0;

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

function renderSlide() {
  const photo = visiblePhotos[currentSlideIndex];
  if (!photo) return;
  sliderImage.src = photo.imageUrl;
  sliderImage.alt = photoCaption(photo);
  sliderCaption.textContent = photoCaption(photo);
  sliderPrev.disabled = currentSlideIndex === 0;
  sliderNext.disabled = currentSlideIndex === visiblePhotos.length - 1;
}

function openSlider(index) {
  currentSlideIndex = index;
  renderSlide();
  slider.showModal();
}

function moveSlide(direction) {
  const nextIndex = currentSlideIndex + direction;
  if (nextIndex < 0 || nextIndex >= visiblePhotos.length) return;
  currentSlideIndex = nextIndex;
  renderSlide();
}

function renderPhotos() {
  visiblePhotos = photos.filter((photo) => matchesSearch(photo, searchInput.value));
  photoGrid.replaceChildren();

  if (!visiblePhotos.length) {
    const message = document.createElement("p");
    message.className = "photo-message photo-empty";
    message.textContent = photos.length ? "검색 결과가 없습니다." : "아직 등록된 사진이 없습니다.";
    photoGrid.append(message);
    return;
  }

  visiblePhotos.forEach((photo, index) => {
    const card = document.createElement("button");
    card.className = "photo-card";
    card.type = "button";
    card.setAttribute("aria-label", `${photoCaption(photo)} 사진 크게 보기`);

    const image = document.createElement("img");
    image.src = photo.thumbnailUrl || photo.imageUrl;
    image.alt = photoCaption(photo);
    image.loading = "lazy";

    card.append(image);
    card.addEventListener("click", () => openSlider(index));
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
sliderClose.addEventListener("click", () => slider.close());
sliderPrev.addEventListener("click", () => moveSlide(-1));
sliderNext.addEventListener("click", () => moveSlide(1));
slider.addEventListener("click", (event) => {
  if (event.target === slider) slider.close();
});
document.addEventListener("keydown", (event) => {
  if (!slider.open) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveSlide(-1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveSlide(1);
  }
});

onAuthChange((user) => {
  const isAdmin = user?.email === ADMIN_EMAIL;
  uploadLink.hidden = !isAdmin;
  authName.hidden = !user;
  authName.textContent = user?.displayName || user?.email || "";
});

loadPhotos();
