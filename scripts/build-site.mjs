/**
 * AQUIRA 静的HTMLビルダー
 *
 * 通常は編集不要です。content/site-content.js の内容を、検索エンジンにも読める
 * 静的な index.html に変換します。実行: node scripts/build-site.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const outputPath = path.join(projectDirectory, "index.html");
const contentPath = pathToFileURL(path.join(projectDirectory, "content", "site-content.js"));
const { default: content } = await import(`${contentPath.href}?updated=${Date.now()}`);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function renderSectionHeading(id, eyebrow, title) {
  return `
        <div class="section__heading">
          <p class="eyebrow">${escapeHtml(eyebrow)}</p>
          <h2 id="${escapeAttribute(id)}">${escapeHtml(title)}</h2>
        </div>`;
}

function renderWorkCard(work) {
  return `
          <article class="work-card">
            <p class="work-card__number">${escapeHtml(work.number)}</p>
            <h3>${escapeHtml(work.title)}</h3>
            <p class="work-card__description">${escapeHtml(work.description)}</p>
          </article>`;
}

function renderNavigation() {
  return content.navigation
    .map((item) => `        <a href="${escapeAttribute(item.href)}">${escapeHtml(item.label)}</a>`)
    .join("\n");
}

const page = `<!doctype html>
<!-- AQUIRA style: restrained editorial design — clear hierarchy, generous whitespace, and no decorative app-like UI. -->
<!-- このファイルは自動生成されています。日常更新は content/site-content.js で行ってください。 -->
<html lang="${escapeAttribute(content.metadata.language)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${escapeAttribute(content.metadata.description)}" />
    <title>${escapeHtml(content.metadata.title)}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main-content">本文へ移動</a>

    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="${escapeAttribute(content.brand.homeLabel)}">${escapeHtml(content.brand.wordmark)}</a>
      <nav class="site-header__navigation" aria-label="主要ナビゲーション">
${renderNavigation()}
      </nav>
    </header>

    <main id="main-content">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <p class="eyebrow">${escapeHtml(content.hero.eyebrow)}</p>
        <h1 id="hero-title">${escapeHtml(content.hero.title)}</h1>
        <p class="lead">${escapeHtml(content.hero.description)}</p>
        <a class="button button--primary" href="${escapeAttribute(content.hero.button.href)}">${escapeHtml(content.hero.button.label)}</a>
      </section>

      <section class="section" id="works" aria-labelledby="works-title">${renderSectionHeading("works-title", content.works.eyebrow, content.works.title)}
        <div class="work-list">
${content.works.items.map(renderWorkCard).join("\n")}
        </div>
      </section>

      <section class="section section--muted" id="practice" aria-labelledby="practice-title">${renderSectionHeading("practice-title", content.practice.eyebrow, content.practice.title)}
        <p class="statement">${escapeHtml(content.practice.description)}</p>
      </section>

      <section class="section" id="about" aria-labelledby="about-title">${renderSectionHeading("about-title", content.about.eyebrow, content.about.title)}
        <p class="statement">${escapeHtml(content.about.description)}</p>
        <a class="text-link" href="${escapeAttribute(content.about.link.href)}">${escapeHtml(content.about.link.label)}</a>
      </section>
    </main>

    <footer class="site-footer">
      <p class="site-footer__title">${escapeHtml(content.footer.title)}</p>
      <p class="site-footer__description">${escapeHtml(content.footer.description)}</p>
    </footer>
  </body>
</html>
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, page, "utf8");
console.log("index.html を生成しました: content/site-content.js の内容を反映済みです。");
