/**
 * AQUIRA 編集用コンテンツ
 *
 * 日常の文章・作品情報・リンクの更新は、このファイルだけで完結します。
 * 文字列は引用符（"...") の中を編集してください。作品を増やすときは、
 * `works` の最後の { ... } を複製し、番号・タイトル・説明を変更します。
 * 編集後はリポジトリのルートで `node scripts/build-site.mjs` を実行します。
 */

const siteContent = {
  metadata: {
    language: "ja",
    title: "AQUIRA | Art & Technology",
    description: "Aquira — 写真、現代アート、テクノロジーを横断する創作活動。",
  },

  brand: {
    wordmark: "アキーラ",
    homeLabel: "アキーラ ホーム",
  },

  navigation: [
    { label: "作品", href: "#works" },
    { label: "活動", href: "#practice" },
    { label: "私たちについて", href: "#about" },
  ],

  hero: {
    eyebrow: "YOKOHAMA · SINCE 1978",
    title: "Art that connects.",
    description: "写真、現代アート、デジタル表現を通じて、人と社会をつなぐ創作活動を続けています。",
    button: { label: "作品を見る", href: "#works" },
  },

  works: {
    eyebrow: "SELECTED WORK",
    title: "作品",
    items: [
      {
        number: "01",
        title: "Photography",
        description: "人物、都市、風景を通して、静かな物語を写し取ります。",
      },
      {
        number: "02",
        title: "Contemporary Art",
        description: "アナログとデジタルの手法を横断し、新しい視点を探ります。",
      },
      {
        number: "03",
        title: "Digital Practice",
        description: "テクノロジーを表現と対話のための道具として活用します。",
      },
    ],
  },

  practice: {
    eyebrow: "PRACTICE",
    title: "活動",
    description: "個人制作、共同プロジェクト、学びの場づくりを通じて、創作が社会と交わる余白を育てます。",
  },

  about: {
    eyebrow: "ABOUT AQUIRA",
    title: "横浜から、世界へ。",
    description: "Aquiraは、写真・映像・現代アートを軸に活動するクリエイティブプラクティスです。表現の可能性を広げながら、持続的で開かれた関係を探究します。",
    link: { label: "公開サイトへ移動する", href: "https://www.aquira.art/" },
  },

  footer: {
    title: "アキーラ",
    description: "アート・テクノロジー・社会実践",
  },
};

export default siteContent;
