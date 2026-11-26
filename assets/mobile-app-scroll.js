(() => {
  const pane = document.querySelector("#app-detail-pane");
  const mobile = matchMedia("(max-width: 860px)");
  const overlay = ":modal, .vx-overlay:not(.hidden), .sheet-back";
  let currentDocument;
  let cleanup;

  function sync() {
    const frame = pane.querySelector("iframe[src]:not([hidden])");
    // The globe uses the iframe viewport for its interactive canvas.
    const viewportApp = frame && new URL(frame.src).pathname.endsWith("/apps/globe/index.html");
    const loadedDocument = mobile.matches && !viewportApp ? frame?.contentDocument : null;
    const doc = loadedDocument?.URL === "about:blank" ? null : loadedDocument;
    if (doc === currentDocument) return;

    cleanup?.();
    cleanup = undefined;
    currentDocument = doc;
    if (!doc?.body) return;

    const root = doc.documentElement;
    const style = doc.createElement("style");
    // Viewport-based minimum heights would otherwise prevent the iframe from shrinking.
    style.textContent = `
      body, body.mini-app, .lesson { min-height: 0 !important; }
      html:has(${overlay}) { overflow: hidden; }
    `;
    doc.head.append(style);
    pane.classList.add("is-mobile-flow");

    const fit = () => {
      const height = `${Math.ceil(root.getBoundingClientRect().height)}px`;
      if (pane.style.getPropertyValue("--mobile-frame-height") !== height) {
        pane.style.setProperty("--mobile-frame-height", height);
      }
    };
    const syncModal = () => pane.classList.toggle("is-mobile-modal", Boolean(doc.querySelector(overlay)));
    const resize = new ResizeObserver(fit);
    const mutations = new MutationObserver(syncModal);
    resize.observe(root);
    mutations.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["open", "class"] });
    fit();
    syncModal();

    cleanup = () => {
      resize.disconnect();
      mutations.disconnect();
      style.remove();
      pane.classList.remove("is-mobile-flow", "is-mobile-modal");
      pane.style.removeProperty("--mobile-frame-height");
    };
  }

  pane.addEventListener("load", sync, true);
  new MutationObserver(sync).observe(pane, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["hidden", "src"],
  });
  mobile.addEventListener("change", sync);
  sync();
})();
