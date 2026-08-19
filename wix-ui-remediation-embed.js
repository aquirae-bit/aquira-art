/*
 * AQUIRA style: Quiet Gallery Integrity — dark editorial surfaces, strict layer separation,
 * and contained third-party content. Load once in Wix Custom Code at Body end on all pages.
 */
(() => {
  "use strict";

  if (window.__aquiraUiRemediationLoaded) return;
  window.__aquiraUiRemediationLoaded = true;

  const widgetId = "comp-maz1kmkp";
  const styleId = "aquira-ui-remediation-styles";
  const readyClass = "aquira-ui-remediation-ready";

  const css = `
    /* Aquira UI remediation: preserve visual planes and prevent the SocialStream app from escaping its section. */
    html, body { overflow-x: clip !important; background: #080909 !important; }
    #SITE_FOOTER {
      position: relative !important;
      inset: auto !important;
      z-index: 0 !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: none !important;
      height: auto !important;
      min-height: 0 !important;
      margin: 0 !important;
      overflow: clip !important;
      isolation: isolate !important;
      background: #080909 !important;
    }
    #SITE_FOOTER [data-testid="inline-content"],
    #SITE_FOOTER [data-testid="mesh-container-content"] {
      min-width: 0 !important;
      max-width: 100% !important;
    }
    #${widgetId}[data-aquira-social-feed="true"] {
      position: relative !important;
      inset: auto !important;
      display: block !important;
      box-sizing: border-box !important;
      width: min(980px, calc(100% - clamp(2rem, 8vw, 7rem))) !important;
      min-width: 0 !important;
      max-width: calc(100% - clamp(2rem, 8vw, 7rem)) !important;
      height: 638px !important;
      margin: clamp(2.5rem, 6vw, 5.5rem) auto clamp(3rem, 7vw, 6.5rem) !important;
      overflow: hidden !important;
      border: 1px solid rgba(247, 244, 236, 0.22) !important;
      border-top: 2px solid #6d155e !important;
      background: #ffffff !important;
      box-shadow: 0 1.25rem 3.5rem rgba(0, 0, 0, 0.3) !important;
      transform: none !important;
    }
    #${widgetId}[data-aquira-social-feed="true"] > iframe {
      display: block !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      border: 0 !important;
      background: #ffffff !important;
    }
    #aquira-footer-sitemap,
    #aquira-footer-shell {
      position: relative !important;
      inset: auto !important;
      z-index: 1 !important;
      clear: both !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: none !important;
      margin: 0 !important;
      overflow: clip !important;
      isolation: isolate !important;
    }
    #aquira-footer-sitemap { background: #080909 !important; }
    #aquira-footer-shell {
      border-top-color: rgba(247, 244, 236, 0.24) !important;
      background: #080909 !important;
    }
    #aquira-footer-shell::before {
      position: absolute !important;
      top: 0 !important;
      left: clamp(1.25rem, 5vw, 4rem) !important;
      width: 0.22rem !important;
      height: 3rem !important;
      background: #6d155e !important;
      content: "" !important;
    }
    /* Keep non-brand tooling out of the artwork and footer reading planes. */
    #interactive-studio-watermark {
      display: none !important;
    }
    [data-aquira-chat-notification="true"] {
      display: none !important;
    }
    [data-hook="consent-banner-revisit-settings-container"] {
      position: fixed !important;
      z-index: 80 !important;
      right: max(1rem, env(safe-area-inset-right)) !important;
      bottom: max(1rem, env(safe-area-inset-bottom)) !important;
      left: auto !important;
      width: auto !important;
      max-width: calc(100vw - 2rem) !important;
      min-height: 0 !important;
      padding: 0 !important;
      border: 1px solid rgba(247, 244, 236, 0.38) !important;
      background: rgba(8, 9, 9, 0.92) !important;
      box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.28) !important;
      opacity: 0.78 !important;
      transition: opacity 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1) !important;
    }
    [data-hook="consent-banner-revisit-settings-container"]:hover,
    [data-hook="consent-banner-revisit-settings-container"]:focus-within {
      opacity: 1 !important;
      transform: translateY(-0.125rem) !important;
    }
    [data-hook="consent-banner-revisit-settings-button"] {
      min-height: 2.35rem !important;
      padding: 0.45rem 0.7rem !important;
      background: transparent !important;
      color: #f7f4ec !important;
      font-family: Arial, "Noto Sans JP", sans-serif !important;
      font-size: 0.72rem !important;
      font-weight: 700 !important;
      letter-spacing: 0.06em !important;
    }
    [data-hook="consent-banner-revisit-settings-button"] p {
      color: inherit !important;
    }
    [data-hook="consent-banner-revisit-settings-close-button"] {
      display: none !important;
    }
    @media (max-width: 700px) {
      [data-hook="consent-banner-revisit-settings-container"] {
        right: max(0.75rem, env(safe-area-inset-right)) !important;
        bottom: max(0.75rem, env(safe-area-inset-bottom)) !important;
        opacity: 0.68 !important;
      }
      [data-hook="consent-banner-revisit-settings-button"] {
        min-height: 2.15rem !important;
        padding: 0.4rem 0.6rem !important;
        font-size: 0.68rem !important;
      }
    }
    .aquira-ui-remediation-visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }
    #${widgetId}[data-aquira-social-feed="true"]:focus-within {
      outline: 2px solid #f2df9b !important;
      outline-offset: 4px !important;
    }
    @media (max-width: 700px) {
      #${widgetId}[data-aquira-social-feed="true"] {
        width: calc(100% - 2rem) !important;
        max-width: calc(100% - 2rem) !important;
        height: min(638px, calc(100vw * 1.48)) !important;
        margin: 2rem auto 3.5rem !important;
        box-shadow: 0 0.9rem 2.25rem rgba(0, 0, 0, 0.26) !important;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      #${widgetId}[data-aquira-social-feed="true"] { scroll-behavior: auto !important; }
    }
  `;

  const injectStyles = () => {
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;
    document.head.append(style);
  };

  const normaliseFeed = () => {
    const widget = document.getElementById(widgetId);
    const iframe = widget?.querySelector("iframe[src*='socialstream.io']");
    if (!widget || !iframe) return false;

    widget.dataset.aquiraSocialFeed = "true";
    iframe.setAttribute("title", "Aquiraのソーシャルフィード（外部コンテンツ）");
    iframe.setAttribute("aria-describedby", "aquira-social-feed-context");
    iframe.setAttribute("loading", "lazy");

    if (!document.getElementById("aquira-social-feed-context")) {
      const context = document.createElement("p");
      context.id = "aquira-social-feed-context";
      context.className = "aquira-ui-remediation-visually-hidden";
      context.textContent = "外部サービスによるソーシャルフィードです。フィード内のリンクを開くと、外部サイトへ移動する場合があります。";
      widget.insertAdjacentElement("beforebegin", context);
    }

    document.documentElement.classList.add(readyClass);
    return true;
  };

  const normaliseSupplementalUi = () => {
    document.getElementById("interactive-studio-watermark")?.setAttribute("aria-hidden", "true");
    document.querySelectorAll("[aria-label='未読メッセージの通知です']").forEach((notice) => {
      notice.closest("[data-hook='popover-content']")?.setAttribute("data-aquira-chat-notification", "true");
    });
  };

  const initialise = () => {
    injectStyles();
    normaliseSupplementalUi();
    normaliseFeed();

    const observer = new MutationObserver(() => {
      normaliseSupplementalUi();
      normaliseFeed();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 15000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
