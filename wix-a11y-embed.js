/*
 * AQUIRA accessibility embed
 * Standalone script for Wix Custom Code. It has no external dependency and can be
 * loaded from https://www.aquira.art/wix-a11y-embed.js on every page.
 */
(() => {
  "use strict";

  if (window.__aquiraAccessibilityEmbedLoaded) return;
  window.__aquiraAccessibilityEmbedLoaded = true;

  const storageKey = "aquira-accessibility-preferences";
  const root = document.documentElement;
  const initialPreferences = {
    fontScale: 1,
    highContrast: false,
    underlineLinks: false,
    reducedMotion: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  };

  const css = `
    :root { --aquira-a11y-font-scale: 1; }
    html { font-size: calc(100% * var(--aquira-a11y-font-scale)) !important; }
    .aquira-a11y-visually-hidden { position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important; }
    .aquira-a11y-skip-link { position:fixed!important;z-index:2147483647!important;top:.75rem!important;left:.75rem!important;padding:.65rem .85rem!important;background:#111!important;color:#fff!important;border:2px solid #fff!important;font:700 .9rem/1.35 Arial,sans-serif!important;text-decoration:none!important;transform:translateY(-220%)!important; }
    .aquira-a11y-skip-link:focus { transform:translateY(0)!important;outline:3px solid #005fcc!important;outline-offset:3px!important; }
    .aquira-a11y-tools { position:fixed!important;z-index:2147483646!important;right:1rem!important;bottom:1rem!important;font-family:Arial,"Noto Sans JP",sans-serif!important; }
    .aquira-a11y-trigger,.aquira-a11y-close,.aquira-a11y-actions button { min-height:44px!important;border:2px solid #111!important;border-radius:0!important;background:#fff!important;color:#111!important;font:700 .86rem/1.25 Arial,"Noto Sans JP",sans-serif!important;cursor:pointer!important; }
    .aquira-a11y-trigger { display:inline-flex!important;align-items:center!important;gap:.45rem!important;padding:.65rem .85rem!important;box-shadow:0 5px 20px rgba(0,0,0,.28)!important; }
    .aquira-a11y-trigger:focus-visible,.aquira-a11y-close:focus-visible,.aquira-a11y-actions button:focus-visible { outline:3px solid #005fcc!important;outline-offset:3px!important; }
    .aquira-a11y-panel { width:min(23rem,calc(100vw - 1.5rem))!important;margin:0 0 .65rem auto!important;padding:1rem!important;border:2px solid #111!important;background:#fff!important;color:#111!important;box-shadow:0 9px 28px rgba(0,0,0,.3)!important; }
    .aquira-a11y-panel[hidden] { display:none!important; }
    .aquira-a11y-panel-header { display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:1rem!important;border-bottom:1px solid #555!important;padding-bottom:.75rem!important; }
    .aquira-a11y-panel h2 { margin:0!important;color:#111!important;font:700 1.1rem/1.3 Arial,"Noto Sans JP",sans-serif!important; }
    .aquira-a11y-panel p { margin:.8rem 0!important;color:#222!important;font:400 .85rem/1.65 Arial,"Noto Sans JP",sans-serif!important; }
    .aquira-a11y-close { display:grid!important;place-items:center!important;width:44px!important;padding:0!important;font-size:1.5rem!important;line-height:1!important; }
    .aquira-a11y-actions { display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:.5rem!important;margin:.85rem 0!important; }
    .aquira-a11y-actions button { display:flex!important;align-items:center!important;padding:.5rem!important;text-align:left!important; }
    .aquira-a11y-actions button[aria-pressed="true"] { background:#111!important;color:#fff!important; }
    .aquira-a11y-actions button:hover { background:#e8e8e8!important; }
    .aquira-a11y-actions button[aria-pressed="true"]:hover { background:#111!important;color:#fff!important; }
    .aquira-a11y-high-contrast body,.aquira-a11y-high-contrast #SITE_ROOT { background:#fff!important;color:#000!important; }
    .aquira-a11y-high-contrast p,.aquira-a11y-high-contrast li,.aquira-a11y-high-contrast span,.aquira-a11y-high-contrast h1,.aquira-a11y-high-contrast h2,.aquira-a11y-high-contrast h3,.aquira-a11y-high-contrast h4 { color:#000!important;text-shadow:none!important; }
    .aquira-a11y-high-contrast a { color:#003fa3!important;text-decoration:underline!important;text-decoration-thickness:.12em!important;text-underline-offset:.2em!important; }
    .aquira-a11y-high-contrast button,.aquira-a11y-high-contrast input,.aquira-a11y-high-contrast textarea,.aquira-a11y-high-contrast select { color:#000!important;background:#fff!important;border-color:#000!important; }
    .aquira-a11y-underline-links a { text-decoration:underline!important;text-decoration-thickness:.12em!important;text-underline-offset:.2em!important; }
    .aquira-a11y-reduce-motion,.aquira-a11y-reduce-motion * { scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important; }
    .aquira-a11y-focus-ring:focus-visible { outline:3px solid #005fcc!important;outline-offset:3px!important; }
    @media (max-width:430px) { .aquira-a11y-tools { right:.75rem!important;bottom:.75rem!important; } .aquira-a11y-actions { grid-template-columns:1fr!important; } }
  `;

  function injectStyles() {
    if (document.getElementById("aquira-a11y-styles")) return;
    const style = document.createElement("style");
    style.id = "aquira-a11y-styles";
    style.textContent = css;
    document.head.append(style);
  }

  function loadPreferences() {
    try {
      return { ...initialPreferences, ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
    } catch {
      return { ...initialPreferences };
    }
  }

  function savePreferences(preferences) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
    } catch {
      // Storage may be disabled; the settings still apply during this visit.
    }
  }

  function findMainContent() {
    return document.querySelector("main, [role='main'], #SITE_ROOT") || document.body;
  }

  function enhanceExistingMarkup() {
    const main = findMainContent();
    if (!main.id) main.id = "main-content";
    if (!main.matches("main,[role='main']")) main.setAttribute("role", "main");

    document.querySelectorAll("a[target='_blank']").forEach((link) => {
      if (link.dataset.aquiraNewTabNotice === "true") return;
      const label = (link.getAttribute("aria-label") || link.textContent || "リンク").trim();
      if (!label.includes("新しいタブ")) link.setAttribute("aria-label", `${label}（新しいタブで開きます）`);
      link.dataset.aquiraNewTabNotice = "true";
    });

    document.querySelectorAll("a, button, input, textarea, select, summary, [tabindex]").forEach((element) => {
      element.classList.add("aquira-a11y-focus-ring");
    });

    document.querySelectorAll("input[required], textarea[required], select[required]").forEach((field) => {
      field.setAttribute("aria-required", "true");
    });
  }

  function initialise() {
    injectStyles();
    enhanceExistingMarkup();

    const main = findMainContent();
    const skipLink = document.createElement("a");
    skipLink.className = "aquira-a11y-skip-link";
    skipLink.href = `#${main.id}`;
    skipLink.textContent = "本文へ移動";

    const tools = document.createElement("div");
    tools.className = "aquira-a11y-tools";
    tools.innerHTML = `
      <section class="aquira-a11y-panel" id="aquira-a11y-panel" role="region" aria-labelledby="aquira-a11y-title" hidden>
        <div class="aquira-a11y-panel-header">
          <h2 id="aquira-a11y-title">表示設定</h2>
          <button class="aquira-a11y-close" type="button" aria-label="表示設定を閉じる">×</button>
        </div>
        <p>文字の大きさ、コントラスト、リンク表示、動きの量を調整できます。設定はこのブラウザーに保存されます。</p>
        <div class="aquira-a11y-actions">
          <button type="button" data-action="font-decrease">A− 文字を小さく</button>
          <button type="button" data-action="font-increase">A＋ 文字を大きく</button>
          <button type="button" data-action="contrast" aria-pressed="false">高コントラスト</button>
          <button type="button" data-action="underline" aria-pressed="false">リンクに下線</button>
          <button type="button" data-action="motion" aria-pressed="false">動きを抑える</button>
          <button type="button" data-action="reset">初期状態に戻す</button>
        </div>
      </section>
      <button class="aquira-a11y-trigger" type="button" aria-expanded="false" aria-controls="aquira-a11y-panel">表示設定</button>
      <span class="aquira-a11y-visually-hidden" aria-live="polite" aria-atomic="true"></span>`;

    document.body.prepend(skipLink);
    document.body.append(tools);

    const panel = tools.querySelector("#aquira-a11y-panel");
    const trigger = tools.querySelector(".aquira-a11y-trigger");
    const closeButton = tools.querySelector(".aquira-a11y-close");
    const status = tools.querySelector("[aria-live]");
    let preferences = loadPreferences();

    const announce = (message) => {
      status.textContent = "";
      requestAnimationFrame(() => { status.textContent = message; });
    };

    const sync = () => {
      root.style.setProperty("--aquira-a11y-font-scale", String(preferences.fontScale));
      root.classList.toggle("aquira-a11y-high-contrast", preferences.highContrast);
      root.classList.toggle("aquira-a11y-underline-links", preferences.underlineLinks);
      root.classList.toggle("aquira-a11y-reduce-motion", preferences.reducedMotion);
      tools.querySelector("[data-action='contrast']").setAttribute("aria-pressed", String(preferences.highContrast));
      tools.querySelector("[data-action='underline']").setAttribute("aria-pressed", String(preferences.underlineLinks));
      tools.querySelector("[data-action='motion']").setAttribute("aria-pressed", String(preferences.reducedMotion));
    };

    const close = () => {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    };

    trigger.addEventListener("click", () => {
      const opening = panel.hidden;
      panel.hidden = !opening;
      trigger.setAttribute("aria-expanded", String(opening));
      if (opening) panel.querySelector("button")?.focus();
    });
    closeButton.addEventListener("click", close);

    tools.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        switch (button.dataset.action) {
          case "font-decrease":
            preferences.fontScale = Math.max(0.9, Number((preferences.fontScale - 0.1).toFixed(2)));
            announce(`文字サイズを${Math.round(preferences.fontScale * 100)}%にしました。`);
            break;
          case "font-increase":
            preferences.fontScale = Math.min(1.25, Number((preferences.fontScale + 0.1).toFixed(2)));
            announce(`文字サイズを${Math.round(preferences.fontScale * 100)}%にしました。`);
            break;
          case "contrast":
            preferences.highContrast = !preferences.highContrast;
            announce(preferences.highContrast ? "高コントラスト表示を有効にしました。" : "高コントラスト表示を解除しました。");
            break;
          case "underline":
            preferences.underlineLinks = !preferences.underlineLinks;
            announce(preferences.underlineLinks ? "リンクの下線表示を有効にしました。" : "リンクの下線表示を解除しました。");
            break;
          case "motion":
            preferences.reducedMotion = !preferences.reducedMotion;
            announce(preferences.reducedMotion ? "動きを抑える設定を有効にしました。" : "動きを抑える設定を解除しました。");
            break;
          case "reset":
            preferences = { ...initialPreferences };
            announce("表示設定を初期状態に戻しました。");
            break;
          default:
            return;
        }
        sync();
        savePreferences(preferences);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) close();
    });

    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
