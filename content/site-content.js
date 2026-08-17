/**
 * AQUIRA 編集用コンテンツ
 * SEO/AEO 方針: Aquira を「横浜を拠点とする写真家・オーディオビジュアル・現代アーティスト」と
 * 一貫して定義し、ここにある可視本文と同じ事実だけを構造化データに出力する。
 * 展示歴・受賞歴・協働先・数値実績、商標登録・侵害・料金は一次資料が確認できるまで追加しない。
 */

const siteContent = {
  site: {
    origin: "https://www.aquira.art",
    language: "ja",
    name: "Aquira（アキラ）",
    shortName: "AQUIRA",
    titleSuffix: "Aquira（アキラ）公式サイト",
    description:
      "横浜を拠点に活動する写真家・オーディオビジュアル・現代アーティスト Aquira（アキラ）の公式サイト。写真、映像、現代アート、社会との協働に関する作品と活動記録を紹介します。",
  },

  entity: {
    name: "Aquira",
    alternateName: ["アキラ", "AQUIRA"],
    jobTitle: "写真家・オーディオビジュアル・現代アーティスト",
    jobTitleEnglish: "Photographer, audiovisual artist, and contemporary artist",
    location: "横浜・日本",
    locationEnglish: "Yokohama, Japan",
    description:
      "Aquira（アキラ）は、横浜を拠点に、写真、映像、オーディオビジュアル表現、現代アートを横断して制作するアーティストです。作品、対話、学びの場を通じて、表現が人と社会を結ぶ可能性を探究しています。",
    descriptionEnglish:
      "Aquira is a Yokohama-based photographer, audiovisual artist, and contemporary artist working across photography, moving image, and digital expression. Through artwork, dialogue, and learning spaces, Aquira explores how artistic expression can connect people and society.",
    sameAs: [
      "https://www.linkedin.com/in/aquirafillmoonmaker/",
      "https://www.facebook.com/cameramanakira/",
      "https://www.instagram.com/aquirart",
      "https://www.youtube.com/@AQUIRA39",
    ],
  },

  navigation: [
    { label: "Aquiraについて", href: "/about/" },
    { label: "作品", href: "/works/" },
    { label: "活動と協働", href: "/practice/" },
    { label: "利用許諾のご相談", href: "/licensing/" },
    { label: "よくある質問", href: "/faq/" },
  ],

  hero: {
    eyebrow: "AQUIRA · YOKOHAMA, JAPAN",
    title: "光の記録から、社会との接点へ。",
    description:
      "Aquira（アキラ）は、横浜を拠点に写真、映像、オーディオビジュアル表現、現代アートを横断して制作するアーティストです。作品と対話、学びの場を通じて、人と社会を結ぶ表現の可能性を探究しています。",
    button: { label: "Aquiraについて知る", href: "/about/" },
  },

  identityFacts: [
    { label: "拠点", value: "横浜・日本" },
    { label: "活動領域", value: "写真・映像・オーディオビジュアル・現代アート" },
    { label: "テーマ", value: "表現、対話、社会との協働" },
  ],

  nameClarification: {
    eyebrow: "OFFICIAL IDENTITY",
    title: "このサイトのAquiraについて",
    text:
      "本サイトのAquira（アキラ）は、横浜を拠点とする写真家・オーディオビジュアル・現代アーティストに関する公式情報です。同じ、または類似した名称を用いるソフトウェア、製品、団体その他の第三者とは別の存在です。作品、活動、公式情報の参照先は本サイトおよびここからリンクする公式プロフィールです。",
  },

  works: {
    eyebrow: "SELECTED PRACTICE",
    title: "作品領域",
    summary:
      "Aquiraの制作は、写真、現代アート、デジタル表現を横断します。人物、都市、風景、光と場所の関係を手がかりに、静かな物語と新しい視点を探ります。",
    items: [
      {
        number: "01",
        title: "Photography",
        description:
          "人物、都市、風景を通して、光と場所に宿る静かな物語を写し取ります。",
      },
      {
        number: "02",
        title: "Contemporary Art",
        description:
          "アナログとデジタルの手法を横断し、鑑賞者との対話から新しい視点を探ります。",
      },
      {
        number: "03",
        title: "Digital Practice",
        description:
          "テクノロジーを、表現と対話の可能性を広げるための道具として活用します。",
      },
    ],
  },

  practice: {
    eyebrow: "ACTIVITY & COLLABORATION",
    title: "活動と協働",
    summary:
      "Aquiraは、個人制作に加え、対話、学びの場、共同プロジェクトを通じて、創作が社会と交わる余白を育てます。協働や講座に関する相談は、公式の問い合わせ窓口から受け付けます。",
    pillars: [
      {
        title: "創作チャレンジ",
        description:
          "制作の試行、公開プロセス、記録を共有しながら、新しい表現の方法を育てます。",
      },
      {
        title: "コミュニティと協働",
        description:
          "講座、協働プロジェクト、パートナーシップを通じて、持続的で開かれた創作の関係をつくります。",
      },
      {
        title: "対話と記録",
        description:
          "作品の背景と制作の問いを記録し、鑑賞者が表現のプロセスに触れられる入口を用意します。",
      },
    ],
  },

  licensing: {
    eyebrow: "LICENSING & PERMISSIONS",
    title: "利用許諾のご相談",
    summary:
      "Aquiraの作品、画像、映像、制作物、または公式表記の利用を検討される場合は、利用内容を確認したうえで個別にご相談を承ります。相談だけで利用許可が成立することはありません。利用の可否、対象、期間、地域、媒体、対価その他の条件は、必要に応じて書面で合意します。",
    scopes: [
      {
        title: "作品・画像・映像",
        description:
          "展示、出版、放送、広告、ウェブサイト、SNS、教育、イベントその他での利用について、対象素材と利用態様を確認します。",
      },
      {
        title: "協働・委託制作",
        description:
          "共同プロジェクト、撮影、映像制作、ワークショップ、講座、企画協力に関する相談を受け付けます。",
      },
      {
        title: "公式表記・紹介文",
        description:
          "作家名、肩書き、公式プロフィール、クレジット表記を掲載する場合は、掲載先と文脈を確認のうえ正確な情報をご案内します。",
      },
    ],
    consultation: [
      {
        title: "ご相談時にお知らせください",
        description:
          "利用したい素材または表記、利用目的、媒体、掲載・開催地域、期間、予定日、想定予算、連絡先を、可能な範囲でお知らせください。",
      },
      {
        title: "確認と書面合意",
        description:
          "権利帰属と利用可能な範囲を確認し、必要な場合は利用条件を個別の書面で合意します。書面での合意前に利用を開始しないでください。",
      },
      {
        title: "お問い合わせ方法",
        description:
          "本サイトの公式プロフィールに掲載されている最新の事業・協働窓口からご連絡ください。秘密鍵、パスワード、APIキーなどの機密情報は送付しないでください。",
      },
    ],
  },

  about: {
    eyebrow: "OFFICIAL ARTIST PROFILE",
    title: "Aquiraについて",
    summary:
      "Aquira（アキラ）は、横浜を拠点に活動する写真家・オーディオビジュアル・現代アーティストです。写真、映像、デジタル表現を通じて、個人の記憶、都市、場所、社会との関係を見つめています。",
    sections: [
      {
        title: "表現の領域",
        text:
          "写真を出発点に、映像、オーディオビジュアル表現、現代アートへと制作を広げています。メディアを横断しながら、光、時間、場所に残る感覚を作品へと編み直します。",
      },
      {
        title: "社会との関係",
        text:
          "Aquiraの活動は、作品の発表だけにとどまりません。対話と学びの場を通じて、表現が人と社会の間に新しい接点を生む可能性を探究します。",
      },
      {
        title: "公式情報について",
        text:
          "本ページはAquiraの公式プロフィールです。作品、活動、協働に関する情報は、公式サイトおよび公式にリンクされたプロフィールからご確認ください。",
      },
    ],
  },

  faq: [
    {
      question: "Aquira（アキラ）はどのようなアーティストですか？",
      answer:
        "Aquira（アキラ）は、横浜を拠点に写真、映像、オーディオビジュアル表現、現代アートを横断して制作するアーティストです。作品、対話、学びの場を通じて、表現が人と社会を結ぶ可能性を探究しています。",
    },
    {
      question: "Aquiraの主な作品領域は何ですか？",
      answer:
        "写真、現代アート、デジタル表現を主な領域としています。人物、都市、風景、光と場所の関係を手がかりに、静かな物語と新しい視点を探ります。",
    },
    {
      question: "Aquiraはどこを拠点に活動していますか？",
      answer: "Aquiraは、横浜・日本を拠点に活動しています。",
    },
    {
      question: "協働や講座について相談できますか？",
      answer:
        "はい。Aquiraは、講座、協働プロジェクト、パートナーシップに関する相談を受け付けています。最新の公式窓口は、本サイトの問い合わせ導線からご確認ください。",
    },
    {
      question: "Aquiraの作品や公式表記を利用できますか？",
      answer:
        "利用内容を確認したうえで個別にご相談を承ります。相談だけで利用許可が成立することはありません。対象、目的、媒体、地域、期間、対価その他の条件は、必要に応じて書面で合意します。",
    },
    {
      question: "CRM製品のAquiraと同じですか？",
      answer:
        "いいえ。本サイトのAquira（アキラ）は、横浜を拠点とする写真家・オーディオビジュアル・現代アーティストに関する公式サイトです。放送業界向けのCRM・広告販売支援製品とは別の存在です。",
    },
  ],

  english: {
    title: "Aquira | Yokohama-based Photographer & Contemporary Artist",
    eyebrow: "AQUIRA · YOKOHAMA, JAPAN",
    headline: "From records of light to points of connection with society.",
    introduction:
      "Aquira is a Yokohama-based photographer, audiovisual artist, and contemporary artist. Working across photography, moving image, audiovisual expression, and digital practice, Aquira explores how artistic expression can connect people and society.",
    identityTitle: "Official artist profile",
    identityText:
      "This is the official website for Aquira, an artist based in Yokohama, Japan. For artwork, activities, and official information, please refer to this website and the official profiles linked here.",
    practiceTitle: "Areas of practice",
    practiceText:
      "Aquira works across photography, contemporary art, and digital expression. The practice considers people, cities, landscapes, light, and the relationship between place and memory.",
    distinctionTitle: "About the name Aquira",
    distinctionText:
      "This website provides official information about Aquira, the Yokohama-based artist. Aquira is a distinct person and artistic practice from software products, organizations, or other third parties that may use the same or a similar name.",
    licensingTitle: "Licensing and permissions",
    licensingText:
      "For enquiries about using Aquira's artwork, images, moving image, creative materials, or official name and biography, please review the licensing and permissions information. A consultation does not itself grant permission; terms are agreed separately when appropriate.",
  },

  footer: {
    title: "Aquira（アキラ）",
    description: "写真・オーディオビジュアル・現代アート — 横浜・日本",
  },
};

export default siteContent;
