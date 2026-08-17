/**
 * AQUIRA 静的HTMLビルダー
 * SEO/AEO 方針: 可視本文・canonical・構造化データの事実を一致させる。
 * 実行: node scripts/build-site.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const contentPath = pathToFileURL(path.join(projectDirectory, "content", "site-content.js"));
const { default: content } = await import(`${contentPath.href}?updated=${Date.now()}`);
const buildDate = "2026-08-17";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function jsonForHtml(value) {
  return JSON.stringify(value, null, 2).replaceAll("<", "\\u003c");
}

function absoluteUrl(pathname) {
  return new URL(pathname, `${content.site.origin}/`).href;
}

function renderNavigation() {
  return content.navigation
    .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
    .join("\n");
}

function renderHeader() {
  return `
    <header class="site-header">
      <a class="wordmark" href="/" aria-label="${escapeHtml(content.site.name)} ホーム">${escapeHtml(content.site.shortName)}</a>
      <nav class="site-header__navigation" aria-label="主要ナビゲーション">
        ${renderNavigation()}
      </nav>
    </header>`;
}

function renderFooter() {
  const socialLinks = content.entity.sameAs
    .map((url) => `<li><a href="${escapeHtml(url)}" rel="me noopener">${escapeHtml(new URL(url).hostname.replace("www.", ""))}</a></li>`)
    .join("");
  return `
    <footer class="site-footer">
      <p class="site-footer__title">${escapeHtml(content.footer.title)}</p>
      <p class="site-footer__description">${escapeHtml(content.footer.description)}</p>
      <ul class="site-footer__links" aria-label="公式プロフィール">${socialLinks}</ul>
      <p class="site-footer__meta">公式情報の最終更新: <time datetime="${buildDate}">${buildDate}</time></p>
    </footer>`;
}

function personSchema() {
  return {
    "@type": "Person",
    "@id": `${content.site.origin}/#aquira`,
    name: content.entity.name,
    alternateName: content.entity.alternateName,
    jobTitle: content.entity.jobTitle,
    description: content.entity.description,
    homeLocation: { "@type": "Place", name: content.entity.location },
    url: `${content.site.origin}/about/`,
    sameAs: content.entity.sameAs,
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${content.site.origin}/#website`,
    url: `${content.site.origin}/`,
    name: content.site.name,
    alternateName: content.site.shortName,
    inLanguage: "ja-JP",
    publisher: { "@id": `${content.site.origin}/#aquira` },
  };
}

function pageSchema({ pathname, title, description, type = "WebPage", additional = {} }) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(pathname)}#webpage`,
    url: absoluteUrl(pathname),
    name: title,
    description,
    inLanguage: "ja-JP",
    isPartOf: { "@id": `${content.site.origin}/#website` },
    about: { "@id": `${content.site.origin}/#aquira` },
    mainEntity: { "@id": `${content.site.origin}/#aquira` },
    dateModified: buildDate,
    ...additional,
  };
}

function renderHead({ pathname, title, description, schema }) {
  const canonical = absoluteUrl(pathname);
  return `
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="${escapeHtml(description)}" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="author" content="${escapeHtml(content.site.name)}" />
      <meta name="theme-color" content="#101010" />
      <title>${escapeHtml(title)}</title>
      <link rel="canonical" href="${escapeHtml(canonical)}" />
      <link rel="alternate" href="${escapeHtml(canonical)}" hreflang="ja" />
      <link rel="alternate" href="${escapeHtml(canonical)}" hreflang="x-default" />
      <link rel="stylesheet" href="/styles.css" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="${escapeHtml(content.site.name)}" />
      <meta property="og:title" content="${escapeHtml(title)}" />
      <meta property="og:description" content="${escapeHtml(description)}" />
      <meta property="og:url" content="${escapeHtml(canonical)}" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="${escapeHtml(title)}" />
      <meta name="twitter:description" content="${escapeHtml(description)}" />
      <script type="application/ld+json">${jsonForHtml({ "@context": "https://schema.org", "@graph": schema })}</script>
    </head>`;
}

function renderLayout({ pathname, title, description, schema, main }) {
  return `<!doctype html>
<!-- AQUIRA style: Artist Evidence Atlas — visible facts, clear hierarchy, generous editorial whitespace. -->
<html lang="ja">
  ${renderHead({ pathname, title, description, schema })}
  <body>
    <a class="skip-link" href="#main-content">本文へ移動</a>
    ${renderHeader()}
    <main id="main-content">${main}</main>
    ${renderFooter()}
  </body>
</html>`;
}

function renderSectionHeading(eyebrow, title) {
  return `<div class="section__heading"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${escapeHtml(title)}</h2></div>`;
}

function renderIdentityFacts() {
  return `<dl class="identity-facts">${content.identityFacts
    .map((fact) => `<div><dt>${escapeHtml(fact.label)}</dt><dd>${escapeHtml(fact.value)}</dd></div>`)
    .join("")}</dl>`;
}

function renderWorkCards(items) {
  return `<div class="work-list">${items
    .map(
      (work) => `<article class="work-card"><p class="work-card__number">${escapeHtml(work.number)}</p><h3>${escapeHtml(work.title)}</h3><p class="work-card__description">${escapeHtml(work.description)}</p></article>`,
    )
    .join("")}</div>`;
}

const homeTitle = `${content.site.name} | 横浜の写真家・現代アーティスト`;
const homeMain = `
  <section class="hero" aria-labelledby="hero-title">
    <p class="eyebrow">${escapeHtml(content.hero.eyebrow)}</p>
    <h1 id="hero-title">${escapeHtml(content.hero.title)}</h1>
    <p class="lead">${escapeHtml(content.hero.description)}</p>
    <a class="button button--primary" href="${escapeHtml(content.hero.button.href)}">${escapeHtml(content.hero.button.label)}</a>
  </section>
  <section class="section" aria-labelledby="identity-title">
    ${renderSectionHeading("AT A GLANCE", "Aquira（アキラ）は何を制作しているか")}
    <p class="statement">${escapeHtml(content.entity.description)}</p>
    ${renderIdentityFacts()}
  </section>
  <section class="section section--muted" aria-labelledby="works-title">
    ${renderSectionHeading(content.works.eyebrow, content.works.title)}
    <p class="statement">${escapeHtml(content.works.summary)}</p>
    ${renderWorkCards(content.works.items)}
    <a class="text-link" href="/works/">作品領域の詳細を見る</a>
  </section>
  <section class="section" aria-labelledby="practice-title">
    ${renderSectionHeading(content.practice.eyebrow, content.practice.title)}
    <p class="statement">${escapeHtml(content.practice.summary)}</p>
    <a class="text-link" href="/practice/">活動と協働について知る</a>
  </section>`;

const homeSchema = [
  websiteSchema(),
  personSchema(),
  pageSchema({ pathname: "/", title: homeTitle, description: content.site.description }),
];

const aboutTitle = `Aquiraについて | ${content.site.titleSuffix}`;
const aboutDescription = `${content.entity.name}の公式プロフィール。${content.entity.jobTitle}としての活動領域、拠点、創作と社会との関係を紹介します。`;
const aboutMain = `
  <section class="hero hero--compact" aria-labelledby="about-title">
    <p class="eyebrow">${escapeHtml(content.about.eyebrow)}</p>
    <h1 id="about-title">${escapeHtml(content.about.title)}</h1>
    <p class="lead">${escapeHtml(content.about.summary)}</p>
  </section>
  <section class="section" aria-labelledby="profile-facts-title">
    ${renderSectionHeading("IDENTITY", "公式プロフィール")}
    ${renderIdentityFacts()}
  </section>
  <section class="section section--muted" aria-label="Aquiraの創作活動">
    <div class="prose-list">${content.about.sections
      .map((section) => `<article><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.text)}</p></article>`)
      .join("")}</div>
  </section>`;
const aboutSchema = [
  websiteSchema(),
  personSchema(),
  pageSchema({
    pathname: "/about/",
    title: aboutTitle,
    description: aboutDescription,
    type: "ProfilePage",
    additional: { dateCreated: buildDate, dateModified: buildDate },
  }),
];

const worksTitle = `作品領域 | ${content.site.titleSuffix}`;
const worksDescription = "Aquira（アキラ）の作品領域。写真、現代アート、デジタル表現を横断する制作の視点とテーマを紹介します。";
const worksMain = `
  <section class="hero hero--compact" aria-labelledby="works-title">
    <p class="eyebrow">${escapeHtml(content.works.eyebrow)}</p>
    <h1 id="works-title">${escapeHtml(content.works.title)}</h1>
    <p class="lead">${escapeHtml(content.works.summary)}</p>
  </section>
  <section class="section" aria-label="Aquiraの作品領域">
    ${renderWorkCards(content.works.items)}
  </section>
  <section class="section section--muted" aria-labelledby="works-context-title">
    ${renderSectionHeading("CONTEXT", "作品を読むための手がかり")}
    <p class="statement">Aquiraの作品では、人物、都市、風景、光と場所の関係を手がかりに、記憶と現在の間にある感覚を見つめます。各作品の制作年、媒体、展示・発表の記録は、確認済みの情報から順次公開します。</p>
  </section>`;
const worksSchema = [
  websiteSchema(),
  personSchema(),
  pageSchema({
    pathname: "/works/",
    title: worksTitle,
    description: worksDescription,
    type: "CollectionPage",
    additional: {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: content.works.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@type": "Thing", name: item.title, description: item.description },
        })),
      },
    },
  }),
];

const practiceTitle = `活動と協働 | ${content.site.titleSuffix}`;
const practiceDescription = "Aquira（アキラ）の活動と協働。創作チャレンジ、対話、学びの場、共同プロジェクトに関する公式情報です。";
const practiceMain = `
  <section class="hero hero--compact" aria-labelledby="practice-title">
    <p class="eyebrow">${escapeHtml(content.practice.eyebrow)}</p>
    <h1 id="practice-title">${escapeHtml(content.practice.title)}</h1>
    <p class="lead">${escapeHtml(content.practice.summary)}</p>
  </section>
  <section class="section" aria-label="活動と協働の内容">
    <div class="prose-list">${content.practice.pillars
      .map((item) => `<article><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.description)}</p></article>`)
      .join("")}</div>
  </section>`;
const practiceSchema = [
  websiteSchema(),
  personSchema(),
  pageSchema({
    pathname: "/practice/",
    title: practiceTitle,
    description: practiceDescription,
    type: "CollectionPage",
  }),
];

const faqTitle = `よくある質問 | ${content.site.titleSuffix}`;
const faqDescription = "Aquira（アキラ）の活動領域、拠点、作品、協働に関する公式のよくある質問です。";
const faqMain = `
  <section class="hero hero--compact" aria-labelledby="faq-title">
    <p class="eyebrow">OFFICIAL FAQ</p>
    <h1 id="faq-title">よくある質問</h1>
    <p class="lead">Aquiraの活動、作品、協働について、公式サイトで確認できる基本情報をまとめました。</p>
  </section>
  <section class="section" aria-label="よくある質問と回答">
    <div class="faq-list">${content.faq
      .map(
        (item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`,
      )
      .join("")}</div>
  </section>`;
const faqSchema = [
  websiteSchema(),
  personSchema(),
  pageSchema({ pathname: "/faq/", title: faqTitle, description: faqDescription }),
  {
    "@type": "FAQPage",
    "@id": `${absoluteUrl("/faq/")}#faq`,
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

const pages = [
  { pathname: "/", output: "index.html", title: homeTitle, description: content.site.description, schema: homeSchema, main: homeMain },
  { pathname: "/about/", output: "about/index.html", title: aboutTitle, description: aboutDescription, schema: aboutSchema, main: aboutMain },
  { pathname: "/works/", output: "works/index.html", title: worksTitle, description: worksDescription, schema: worksSchema, main: worksMain },
  { pathname: "/practice/", output: "practice/index.html", title: practiceTitle, description: practiceDescription, schema: practiceSchema, main: practiceMain },
  { pathname: "/faq/", output: "faq/index.html", title: faqTitle, description: faqDescription, schema: faqSchema, main: faqMain },
];

await Promise.all(
  pages.map(async (page) => {
    const outputPath = path.join(projectDirectory, page.output);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderLayout(page), "utf8");
  }),
);

const sitemapUrls = pages
  .map((page) => `  <url>\n    <loc>${absoluteUrl(page.pathname)}</loc>\n    <lastmod>${buildDate}</lastmod>\n  </url>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;
const robots = `User-agent: *
Allow: /

User-agent: PetalBot
Disallow: /

User-agent: GPTBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: CCBot
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bytespider
Allow: /

Sitemap: ${content.site.origin}/sitemap.xml
`;

await Promise.all([
  writeFile(path.join(projectDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(path.join(projectDirectory, "robots.txt"), robots, "utf8"),
]);

console.log(`AQUIRA SEO/AEO HTMLを生成しました: ${pages.length}ページ、robots.txt、sitemap.xml`);
