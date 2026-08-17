/**
 * AQUIRA SEO/AEO output validation.
 * Verifies that generated pages contain matching canonical URLs and parseable JSON-LD.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checks = [
  ["index.html", "https://www.aquira.art/", "WebPage"],
  ["about/index.html", "https://www.aquira.art/about/", "ProfilePage"],
  ["works/index.html", "https://www.aquira.art/works/", "CollectionPage"],
  ["practice/index.html", "https://www.aquira.art/practice/", "CollectionPage"],
  ["faq/index.html", "https://www.aquira.art/faq/", "FAQPage"],
];

for (const [file, canonical, requiredType] of checks) {
  const html = await readFile(path.join(root, file), "utf8");
  if (!html.includes(`<link rel="canonical" href="${canonical}" />`)) {
    throw new Error(`${file}: canonical URL is missing or incorrect`);
  }
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error(`${file}: JSON-LD script is missing`);
  const schema = JSON.parse(match[1]);
  const graph = schema["@graph"] ?? [];
  if (!graph.some((item) => item["@type"] === requiredType)) {
    throw new Error(`${file}: required ${requiredType} schema is missing`);
  }
  if (!graph.some((item) => item["@type"] === "Person" && item.name === "Aquira")) {
    throw new Error(`${file}: Aquira Person entity is missing`);
  }
}

const robots = await readFile(path.join(root, "robots.txt"), "utf8");
for (const bot of ["GPTBot", "Google-Extended", "ClaudeBot", "PerplexityBot"]) {
  if (!robots.includes(`User-agent: ${bot}\nAllow: /`)) throw new Error(`robots.txt: ${bot} allowance is missing`);
}

const sitemap = await readFile(path.join(root, "sitemap.xml"), "utf8");
for (const [, canonical] of checks) {
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) throw new Error(`sitemap.xml: ${canonical} is missing`);
}

console.log(`SEO validation passed: ${checks.length} canonical pages, JSON-LD, robots, and sitemap verified.`);
