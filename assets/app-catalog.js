const apps = [
  {
    title: "4x4 Sliding Puzzle",
    description: "",
    i18n: {
      ko: {
        title: "4x4 슬라이딩 퍼즐",
        description: "",
      },
      en: {
        title: "4x4 Sliding Puzzle",
        description: "",
      },
      ja: {
        title: "4x4 スライドパズル",
        description: "",
      },
      zh: {
        title: "4x4 滑块拼图",
        description: "",
      },
      es: {
        title: "Puzzle Deslizante 4x4",
        description: "",
      },
    },
    category: "game",
    categoryLabel: "게임",
    thumbnail: "puzzle",
    app_url: "apps/puzzle/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["puzzle", "game", "logic"],
  },
  {
    title: "세계지도",
    description: "지구본을 돌려가며 나라를 찾는 세계지도 퀴즈입니다. 일반 모드에서는 나라이름이 표시되고, 퀴즈 모드에서는 이름이 사라져 클릭으로 맞춰야 합니다.",
    i18n: {
      ko: {
        title: "세계지도",
        description: "지구본을 돌려가며 나라를 찾는 세계지도 퀴즈입니다. 일반 모드에서는 나라이름이 표시되고, 퀴즈 모드에서는 이름이 사라져 클릭으로 맞춰야 합니다.",
      },
      en: {
        title: "World Map",
        description: "A globe-based country quiz. Study mode shows country names, while quiz mode hides them so you can answer by clicking.",
      },
      ja: {
        title: "世界地図",
        description: "地球儀を回しながら国を探す世界地図クイズです。通常モードでは国名を表示し、クイズモードでは国名を隠してクリックで答えます。",
      },
      zh: {
        title: "世界地图",
        description: "一个可旋转地球仪的国家测验。普通模式显示国家名称，测验模式隐藏名称，需要点击作答。",
      },
      es: {
        title: "Mapa Mundial",
        description: "Un quiz de países con un globo interactivo. El modo normal muestra los nombres y el modo quiz los oculta para responder con clics.",
      },
    },
    category: "game",
    categoryLabel: "게임",
    thumbnail: "globe",
    app_url: "apps/globe/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["geography", "quiz", "world", "globe"],
  },
  {
    title: "조선왕조 가계도",
    description: "조선 왕의 순서와 혈통 관계를 스마트폰에서 세로로 읽기 쉽게 정리한 가계도입니다.",
    i18n: {
      ko: {
        title: "조선왕조 가계도",
        description: "조선 왕의 순서와 혈통 관계를 스마트폰에서 읽기 쉽게 정리한 가계도입니다.",
      },
      en: {
        title: "Joseon Dynasty Family Tree",
        description: "A mobile-friendly family tree showing the order and lineage of the kings of Joseon.",
      },
      ja: {
        title: "朝鮮王朝系図",
        description: "朝鮮王朝の王の順序と血統関係をスマートフォンでも読みやすく整理した系図です。",
      },
      zh: {
        title: "朝鲜王朝家谱",
        description: "以适合手机阅读的方式整理朝鲜王朝国王顺序与血统关系的家谱。",
      },
      es: {
        title: "Árbol de la Dinastía Joseon",
        description: "Un árbol genealógico móvil que muestra el orden y el linaje de los reyes de Joseon.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    menuVisible: false,
    thumbnail: "joseon",
    app_url: "apps/joseon/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["history", "joseon", "memory"],
  },
  {
    title: "나의 단어장",
    description: "직접 만든 JSON 단어장을 브라우저에 저장하고 학습, 퀴즈, TTS로 복습하는 학습 앱입니다.",
    i18n: {
      ko: {
        title: "나의 단어장",
        description: "직접 만든 JSON 단어장을 브라우저에 저장하고 학습, 퀴즈, TTS로 복습하는 학습 앱입니다.",
      },
      en: {
        title: "My Vocabulary",
        description: "Upload your own JSON vocabulary book and study it with cards, quizzes, and browser TTS.",
      },
      ja: {
        title: "私の単語帳",
        description: "自分で作ったJSON単語帳をブラウザーに保存し、カード、クイズ、TTSで復習できる学習アプリです。",
      },
      zh: {
        title: "我的单词本",
        description: "上传自己的 JSON 单词本，并通过卡片、测验和浏览器 TTS 进行学习。",
      },
      es: {
        title: "Mi Vocabulario",
        description: "Sube tu propio vocabulario JSON y estúdialo con tarjetas, cuestionarios y TTS del navegador.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    thumbnail: "vocabulary",
    app_url: "apps/vocabulary/index.html?v=20260607-vocabulary-search-row",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["vocabulary", "study", "quiz", "tts"],
  },
  {
    title: "영어문장 1000",
    description: "일상 영어 문장 1,000개와 한국어 해석을 16개 문법 챕터로 공부합니다.",
    i18n: {
      ko: {
        title: "영어문장 1000",
        description: "일상 영어 문장 1,000개와 한국어 해석을 16개 문법 챕터로 공부합니다.",
      },
      en: {
        title: "1,000 English Practice Sentences",
        description: "Study 1,000 everyday English sentences with Korean translations in 16 grammar chapters.",
      },
      ja: {
        title: "英語練習文1000",
        description: "韓国語訳付きの日常英語1,000文を、16の文法チャプターで学べます。",
      },
      zh: {
        title: "英语练习句1000",
        description: "通过16个语法章节学习1,000个附韩语译文的日常英语句子。",
      },
      es: {
        title: "1000 frases para practicar inglés",
        description: "Estudia 1000 frases cotidianas con traducción al coreano en 16 capítulos de gramática.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    thumbnail: "english-1001",
    app_url: "apps/english-1001/index.html?set=practice",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["english", "sentences", "study", "tts"],
  },
  {
    title: "1001영어문장",
    description: "영어 문장 1001개를 카드로 보고, TTS로 들으며, 영문 가리기 모드로 복습하는 학습 앱입니다.",
    i18n: {
      ko: {
        title: "1001영어문장",
        description: "영어 문장 1001개를 카드로 보고, TTS로 들으며, 영문 가리기 모드로 복습하는 학습 앱입니다.",
      },
      en: {
        title: "1001 English Sentences",
        description: "Study 1001 English sentences with cards, TTS playback, and an English hide mode.",
      },
      ja: {
        title: "1001英語文",
        description: "1001個の英語文をカードで確認し、TTSで聞き、英文を隠して復習する学習アプリです。",
      },
      zh: {
        title: "1001英语句子",
        description: "通过卡片、TTS 播放和隐藏英文模式学习 1001 个英语句子。",
      },
      es: {
        title: "1001 Frases en Inglés",
        description: "Estudia 1001 frases en inglés con tarjetas, TTS y un modo para ocultar el texto inglés.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    adminOnly: true,
    thumbnail: "english-1001",
    app_url: "apps/english-1001/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["english", "sentences", "study", "tts"],
  },
  {
    title: "사진 업로드",
    description: "Photography 갤러리에 사진과 촬영 정보를 등록하는 관리자 페이지입니다.",
    i18n: {
      ko: {
        title: "사진 업로드",
        description: "Photography 갤러리에 사진과 촬영 정보를 등록하는 관리자 페이지입니다.",
      },
      en: {
        title: "Photo Upload",
        description: "An administrator page for adding photos and capture details to Photography.",
      },
      ja: {
        title: "写真アップロード",
        description: "Photographyギャラリーに写真と撮影情報を登録する管理者ページです。",
      },
      zh: {
        title: "上传照片",
        description: "向 Photography 图库添加照片和拍摄信息的管理员页面。",
      },
      es: {
        title: "Subir fotos",
        description: "Una página de administración para añadir fotos y datos de captura a Photography.",
      },
    },
    category: "photography",
    categoryLabel: "사진",
    adminOnly: true,
    thumbnail: "photography-upload",
    app_url: "apps/photography/upload.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["photography", "upload", "admin"],
  },
  {
    title: "그리스 신화 계보",
    description: "원초신, 티탄, 올림포스 신과 주요 영웅의 관계를 SVG 계보도로 정리한 학습 앱입니다.",
    i18n: {
      ko: {
        title: "그리스 신화 계보",
        description: "원초신, 티탄, 올림포스 신과 주요 영웅의 관계를 SVG 계보도로 정리한 학습 앱입니다.",
      },
      en: {
        title: "Greek Myth Genealogy",
        description: "A study app that maps primordial gods, Titans, Olympians, and heroes as an SVG family tree.",
      },
      ja: {
        title: "ギリシャ神話系図",
        description: "原初神、ティタン、オリュンポス神、主な英雄の関係をSVG系図で整理した学習アプリです。",
      },
      zh: {
        title: "希腊神话谱系",
        description: "用SVG家谱图整理原初神、泰坦、奥林匹斯诸神和主要英雄关系的学习应用。",
      },
      es: {
        title: "Genealogía Griega",
        description: "Una app de estudio que organiza dioses primordiales, titanes, olímpicos y héroes en un árbol SVG.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    menuVisible: false,
    thumbnail: "greekmyth",
    app_url: "apps/greekmyth/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["mythology", "greek", "genealogy", "svg"],
  },
  {
    title: "하모니 스쿨",
    description: "소리로 배우는 화성학 입문 앱입니다. 음정·스케일부터 코드, 2-5-1, 텐션까지 58개 레슨과 귀 훈련, 복습, 코드 진행 놀이터를 제공합니다.",
    i18n: {
      ko: {
        title: "하모니 스쿨",
        description: "소리로 배우는 화성학 입문 앱입니다. 음정·스케일부터 코드, 2-5-1, 텐션까지 58개 레슨과 귀 훈련, 복습, 코드 진행 놀이터를 제공합니다.",
      },
      en: {
        title: "Harmony School",
        description: "A beginner-friendly harmony course learned by ear: 58 lessons from intervals and scales to chords, ii-V-I and tensions, with ear training, spaced review, and a chord progression playground. (Korean-language app)",
      },
      ja: {
        title: "ハーモニースクール",
        description: "耳で学ぶ和声学の入門アプリです。音程・スケールからコード、2-5-1、テンションまでの58レッスンに、聴音練習、復習、コード進行プレイグラウンドを備えています。（韓国語のアプリです）",
      },
      zh: {
        title: "和声学校",
        description: "通过听觉学习和声学的入门应用。从音程、音阶到和弦、2-5-1和张力音，共58节课，含听音练习、间隔复习和和弦进行游乐场。（应用界面为韩语）",
      },
      es: {
        title: "Escuela de Armonía",
        description: "Un curso de armonía para principiantes que se aprende de oído: 58 lecciones desde intervalos y escalas hasta acordes, 2-5-1 y tensiones, con entrenamiento auditivo, repaso espaciado y un laboratorio de progresiones de acordes. (App en coreano)",
      },
    },
    category: "music",
    categoryLabel: "음악",
    thumbnail: "harmony-school",
    app_url: "apps/harmony-school/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["music", "harmony", "theory", "ear-training", "chord"],
  },
];

const uiText = {
  ko: {
    htmlLang: "ko",
    language: "언어",
    menuLabel: "앱 목록",
    sidebar: ["메뉴 펼치기", "메뉴 접기"],
    photoSearch: "날짜, 장소, 태그 검색",
    open: "열기",
    soon: "준비중",
    openAria: (title) => `${title} 열기`,
    soonAria: (title) => `${title} 준비중`,
  },
  en: {
    htmlLang: "en",
    language: "Language",
    menuLabel: "Apps",
    sidebar: ["Expand menu", "Collapse menu"],
    photoSearch: "Search date, place, tags",
    open: "open",
    soon: "soon",
    openAria: (title) => `Open ${title}`,
    soonAria: (title) => `${title} is coming soon`,
  },
  ja: {
    htmlLang: "ja",
    language: "言語",
    menuLabel: "アプリ一覧",
    sidebar: ["メニューを開く", "メニューを閉じる"],
    photoSearch: "日付、場所、タグを検索",
    open: "開く",
    soon: "準備中",
    openAria: (title) => `${title}を開く`,
    soonAria: (title) => `${title}は準備中です`,
  },
  zh: {
    htmlLang: "zh-Hans",
    language: "语言",
    menuLabel: "应用列表",
    sidebar: ["展开菜单", "收起菜单"],
    photoSearch: "搜索日期、地点、标签",
    open: "打开",
    soon: "即将推出",
    openAria: (title) => `打开${title}`,
    soonAria: (title) => `${title}即将推出`,
  },
  es: {
    htmlLang: "es",
    language: "Idioma",
    menuLabel: "Aplicaciones",
    sidebar: ["Mostrar menú", "Ocultar menú"],
    photoSearch: "Buscar fecha, lugar, etiquetas",
    open: "abrir",
    soon: "pronto",
    openAria: (title) => `Abrir ${title}`,
    soonAria: (title) => `${title} estará disponible pronto`,
  },
};

const sections = {
  photography: {
    appUrl: "apps/photography/index.html",
    ko: {
      title: "Photography",
      description: "촬영 시간과 장소로 사진을 찾아볼 수 있는 아카이브입니다.",
    },
    en: {
      title: "Photography",
      description: "A photo archive searchable by capture time and location.",
    },
    ja: {
      title: "Photography",
      description: "撮影日時と場所から写真を探せるアーカイブです。",
    },
    zh: {
      title: "Photography",
      description: "可按拍摄时间和地点搜索的照片档案。",
    },
    es: {
      title: "Photography",
      description: "Un archivo de fotos que puedes buscar por fecha y lugar.",
    },
  },
  board: {
    appUrl: "apps/board/index.html",
    ko: {
      title: "Board",
      description: "공지와 글을 위한 게시판을 준비 중입니다.",
    },
    en: {
      title: "Board",
      description: "A board for notices and posts is coming soon.",
    },
    ja: {
      title: "Board",
      description: "お知らせと投稿のための掲示板を準備中です。",
    },
    zh: {
      title: "Board",
      description: "公告和文章发布板块正在准备中。",
    },
    es: {
      title: "Board",
      description: "Un tablón para avisos y publicaciones estará disponible pronto.",
    },
  },
};

const appNameList = document.querySelector("#app-name-list");
const appShell = document.querySelector(".app-shell");
const detailPane = document.querySelector("#app-detail-pane");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarContent = document.querySelector("#sidebar-content");
const sidebarCloseIcon = document.querySelector("#sidebar-close-icon");
const sidebarOpenIcon = document.querySelector("#sidebar-open-icon");
const detailCopy = document.querySelector("#detail-copy");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const goLink = document.querySelector("#go-link");
const photographyFrame = document.querySelector("#photography-frame");
const boardFrame = document.querySelector("#board-frame");
const languageSelect = document.querySelector("#language-select");
const languageLabel = document.querySelector("#language-label");
const photographyMenu = document.querySelector("#photography-menu");
const photographyAccordion = document.querySelector("#photography-accordion");
const photographySearch = document.querySelector("#photography-search");
const photographySearchLabel = document.querySelector("#photography-search-label");
const appsMenu = document.querySelector("#apps-menu");
const appsAccordion = document.querySelector("#apps-accordion");
const boardMenu = document.querySelector("#board-menu");

let selectedIndex = 0;
let selectedView = "photography";
let photographyOpen = false;
let appsOpen = false;
let isAdmin = false;
let authChecked = false;
let running = false;
let runningFrame;
let currentLanguage = localStorage.getItem("ashosho-language") || "ko";
if (!uiText[currentLanguage]) currentLanguage = "ko";

function getText() {
  return uiText[currentLanguage] || uiText.ko;
}

function renderSidebar() {
  const isOpen = !sidebarContent.inert;
  const label = getText().sidebar[Number(isOpen)];
  appShell.classList.toggle("is-sidebar-collapsed", !isOpen);
  sidebarToggle.setAttribute("aria-expanded", String(isOpen));
  sidebarToggle.setAttribute("aria-label", label);
  sidebarToggle.title = label;
  sidebarCloseIcon.hidden = !isOpen;
  sidebarOpenIcon.hidden = isOpen;
}

function appRoute(appUrl) {
  const url = new URL(window.location.href);
  if (appUrl) url.searchParams.set("app", appUrl);
  else url.searchParams.delete("app");
  return url;
}

function leaveApp() {
  if (new URLSearchParams(window.location.search).has("app")) history.pushState(null, "", appRoute());
  running = false;
}

function syncAppRoute() {
  const appUrl = new URLSearchParams(window.location.search).get("app");
  const index = apps.findIndex((app) => app.app_url === appUrl && app.status === "ready" && app.menuVisible !== false);
  running = index !== -1 && isAppVisible(apps[index]);
  if (running) {
    selectedIndex = index;
    selectedView = "apps";
    setPhotographyOpen(false);
    setAppsOpen(true);
  } else if (appUrl && (index === -1 || authChecked)) {
    history.replaceState(null, "", appRoute());
  }
  renderMenu();
  renderList();
  renderDetail();
}

function getLocalizedApp(app) {
  const localized = app.i18n?.[currentLanguage] || app.i18n?.ko || app;
  return {
    ...app,
    title: localized.title || app.title,
    description: localized.description ?? app.description,
  };
}

function getSection(section) {
  const definition = sections[section];
  const localized = definition?.[currentLanguage] || definition?.ko;
  return { ...definition, ...localized };
}

function applyLanguage() {
  const text = getText();

  document.documentElement.lang = text.htmlLang;
  languageLabel.textContent = text.language;
  languageSelect.setAttribute("aria-label", text.language);
  appNameList.setAttribute("aria-label", text.menuLabel);
  photographySearchLabel.textContent = text.photoSearch;
  photographySearch.placeholder = text.photoSearch;
  photographySearch.setAttribute("aria-label", text.photoSearch);
  renderSidebar();
}

function setAppsOpen(isOpen) {
  appsOpen = isOpen;
  appsAccordion.hidden = !isOpen;
  appsMenu.setAttribute("aria-expanded", String(isOpen));
}

function setPhotographyOpen(isOpen) {
  photographyOpen = isOpen;
  photographyAccordion.hidden = !isOpen;
  photographyMenu.setAttribute("aria-expanded", String(isOpen));
}

function syncPhotographySearch() {
  photographyFrame.contentWindow?.postMessage(
    { type: "photography-search", value: photographySearch.value },
    window.location.origin,
  );
}

function renderMenu() {
  photographyMenu.classList.toggle("is-active", selectedView === "photography");
  appsMenu.classList.toggle("is-active", selectedView === "apps");
  boardMenu.classList.toggle("is-active", selectedView === "board");
}

function isAppVisible(app) {
  return Boolean(app && app.menuVisible !== false && (!app.adminOnly || isAdmin));
}

function ensureSelectedAppIsVisible() {
  if (isAppVisible(apps[selectedIndex])) return;
  selectedIndex = apps.findIndex(isAppVisible);
}

function setAdminAccess(isAllowed) {
  isAdmin = isAllowed;
  authChecked = true;
  ensureSelectedAppIsVisible();
  syncAppRoute();
}

function renderList() {
  appNameList.innerHTML = apps
    .map((app, index) => {
      if (!isAppVisible(app)) return "";
      const localizedApp = getLocalizedApp(app);
      return `
        <button
          class="app-name-button ${index === selectedIndex ? "is-active" : ""}"
          type="button"
          data-index="${index}"
          aria-current="${index === selectedIndex ? "true" : "false"}"
          ${app.color ? `style="color:${app.color}"` : ""}
        >
          ${localizedApp.title}
        </button>
      `;
    })
    .join("");
}

function renderDetail() {
  const text = getText();

  const isPhotography = selectedView === "photography";
  const isBoard = selectedView === "board";
  const isRunningApp = selectedView === "apps" && running;
  detailCopy.hidden = isPhotography || isBoard || isRunningApp;
  photographyFrame.hidden = !isPhotography;
  boardFrame.hidden = !isBoard;
  detailPane.classList.toggle("is-photography", isPhotography);
  detailPane.classList.toggle("is-board", isBoard);
  detailPane.classList.toggle("is-running-app", isRunningApp);

  const runningApp = isRunningApp ? getLocalizedApp(apps[selectedIndex]) : null;
  if (runningFrame && runningFrame.getAttribute("src") !== runningApp?.app_url) {
    if (runningFrame.getAttribute("src") === "apps/photography/upload.html") photographyFrame.removeAttribute("src");
    runningFrame.remove();
    runningFrame = undefined;
  }
  if (runningApp) {
    goLink.hidden = true;
    if (!runningFrame) {
      runningFrame = document.createElement("iframe");
      runningFrame.className = "running-app-frame";
      runningFrame.title = runningApp.title;
      runningFrame.src = runningApp.app_url;
      detailPane.append(runningFrame);
    } else {
      runningFrame.title = runningApp.title;
    }
    return;
  }

  if (isPhotography) {
    goLink.hidden = true;
    if (!photographyFrame.getAttribute("src")) {
      photographyFrame.src = "apps/photography/index.html?embed=1";
    }
    return;
  }

  if (isBoard) {
    goLink.hidden = true;
    if (!boardFrame.getAttribute("src")) {
      boardFrame.src = "apps/board/index.html?embed=1";
    }
    return;
  }

  if (selectedView !== "apps") {
    const section = getSection(selectedView);
    const isReady = Boolean(section.appUrl);
    detailTitle.textContent = section.title;
    detailDescription.textContent = section.description;
    detailDescription.hidden = !section.description;
    goLink.hidden = !isReady;

    if (isReady) {
      goLink.textContent = "go";
      goLink.href = section.appUrl;
      goLink.setAttribute("aria-label", text.openAria(section.title));
      goLink.removeAttribute("aria-disabled");
    } else {
      goLink.removeAttribute("href");
      goLink.removeAttribute("aria-disabled");
    }
    return;
  }

  const app = getLocalizedApp(apps[selectedIndex]);
  const isReady = app.status === "ready" && app.app_url;

  detailTitle.textContent = app.title;
  detailDescription.textContent = app.description;
  detailDescription.hidden = !app.description;
  goLink.hidden = false;

  if (isReady) {
    goLink.textContent = "go";
    goLink.href = appRoute(app.app_url).href;
    goLink.setAttribute("aria-label", text.openAria(app.title));
    goLink.removeAttribute("aria-disabled");
  } else {
    goLink.textContent = "soon";
    goLink.removeAttribute("href");
    goLink.setAttribute("aria-label", text.soonAria(app.title));
    goLink.setAttribute("aria-disabled", "true");
  }
}

function selectApp(index) {
  if (running && index === selectedIndex) return;
  leaveApp();
  selectedIndex = index;
  selectedView = "apps";
  setPhotographyOpen(false);
  setAppsOpen(true);
  renderMenu();
  renderList();
  renderDetail();
}

function selectSection(section) {
  leaveApp();
  selectedView = section;
  setPhotographyOpen(false);
  setAppsOpen(false);
  renderMenu();
  renderDetail();
}

appNameList.addEventListener("click", (event) => {
  const button = event.target.closest(".app-name-button");
  if (!button) return;
  selectApp(Number(button.dataset.index));
});

photographyMenu.addEventListener("click", () => {
  leaveApp();
  selectedView = "photography";
  setAppsOpen(false);
  setPhotographyOpen(!photographyOpen);
  renderMenu();
  renderDetail();
});
boardMenu.addEventListener("click", () => selectSection("board"));
appsMenu.addEventListener("click", () => {
  if (selectedView !== "apps") leaveApp();
  selectedView = "apps";
  setPhotographyOpen(false);
  setAppsOpen(!appsOpen);
  renderMenu();
  renderDetail();
});

goLink.addEventListener("click", (event) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!goLink.hasAttribute("href")) return;
  event.preventDefault();
  history.pushState(null, "", goLink.href);
  syncAppRoute();
  runningFrame?.focus();
});
window.addEventListener("popstate", syncAppRoute);

sidebarToggle.addEventListener("click", () => {
  appShell.classList.add("is-sidebar-interactive");
  sidebarContent.inert = !sidebarContent.inert;
  localStorage.setItem("ashosho-sidebar-collapsed", String(sidebarContent.inert));
  renderSidebar();
});

photographySearch.addEventListener("input", syncPhotographySearch);
photographyFrame.addEventListener("load", syncPhotographySearch);
window.addEventListener("grayrockclub-auth-change", (event) => {
  setAdminAccess(Boolean(event.detail?.isAdmin));
});

languageSelect.value = currentLanguage;
languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem("ashosho-language", currentLanguage);
  applyLanguage();
  renderMenu();
  renderList();
  renderDetail();
});

sidebarContent.inert = localStorage.getItem("ashosho-sidebar-collapsed") === "true";
window.lucide?.createIcons();
applyLanguage();
setAppsOpen(false);
setPhotographyOpen(false);
syncAppRoute();
