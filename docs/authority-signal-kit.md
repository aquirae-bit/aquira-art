# Aquira 外部権威シグナル運用キット

**対象:** Aquira（アキラ）公式サイトと、本人確認済みの外部プロフィール・主催者・掲載先  
**作成日:** 2026-08-17（JST）

## このキットの目的

外部言及は、数や被リンクだけを増やす作業ではない。`Aquira` という名称がCRM製品を指すページと混同されないよう、第三者が**同じ人物・同じ活動領域・同じ拠点・同じ公式URL**を記載できる状態にするための運用資料である。

> すべての外部プロフィール・掲載文・主催者ページでは、実際に確認できる経歴、作品、展示、協働内容だけを使用する。レビュー、受賞、所属、数値実績、依頼実績を新たに作らない。

## 固定するエンティティ表記

| 項目 | 使用する表記 | 使用上の注意 |
|---|---|---|
| 表示名（日本語） | **Aquira（アキラ）** | 見出し、プロフィール名、リンクアンカーの第一候補。 |
| 表示名（英語） | **Aquira** | 英語だけの掲載では、必ず職能・地域と組み合わせる。 |
| 定義文 | **横浜を拠点に活動する写真家・オーディオビジュアル・現代アーティスト** | CRM製品との同名混同を避ける主文。 |
| 英語定義文 | **A Yokohama-based photographer, audiovisual artist, and contemporary artist.** | `Aquira artist`、`Aquira photographer`の文脈を明確にする。 |
| 公式URL | **https://www.aquira.art/** | 末尾URLや短縮URLではなく、正規URLを使用する。 |
| 公式プロフィール | **https://www.aquira.art/about/** | 新実装のプロフィールURL。デプロイ後に外部プロフィールのウェブサイト欄を更新する。 |
| 拠点 | **横浜・日本 / Yokohama, Japan** | 可能な場合は所在地フィールドと本文の双方に掲載する。 |

## そのまま使える公式紹介文

### 日本語（100〜130字）

> Aquira（アキラ）は、横浜を拠点に写真、映像、オーディオビジュアル表現、現代アートを横断して制作するアーティストです。作品と対話、学びの場を通じて、表現が人と社会を結ぶ可能性を探究しています。公式サイト: https://www.aquira.art/

### 日本語（短文）

> 横浜を拠点に、写真・映像・オーディオビジュアル・現代アートを横断するアーティスト Aquira（アキラ）。公式サイト: https://www.aquira.art/

### English (short profile)

> Aquira is a Yokohama-based photographer, audiovisual artist, and contemporary artist working across photography, moving image, and digital expression. The official archive is available at https://www.aquira.art/.

### English (listing title)

> Aquira — Yokohama-based Photographer & Contemporary Artist

## 既存外部プロフィールの整合手順

公開済みの外部ページには表記の揺れがある。本人が編集権限を持つプロフィールから、公式URL・表示名・活動分野・所在地を統一する。アカウントにログインできないページや第三者運営ページは、管理者に訂正を依頼する。

| 優先度 | 確認先 | 確認・更新する項目 | 根拠 |
|---|---|---|---|
| 1 | LinkedIn | 表示名、見出し、所在地、公式URL、About、作品または活動項目 | 公式トップページがLinkedInを公式プロフィールとしてリンクしている。[1] |
| 1 | Instagram / Facebook / YouTube | 表示名、bio、公式URL、プロフィール画像、所在地 | 公式トップページが各プロフィールをリンクしている。[1] |
| 2 | This Is Gallery | `Aquira’s／アキラ`の別表記、公式URL、自己紹介、活動分野、SNSリンク | 写真家としての経歴・作品・横浜都市風景への言及が公開されている。[2] |
| 2 | Book An Artist | 表示名、所在地、職能、ウェブサイト欄 | Aquira/AKIRAを横浜の写真家として扱うページが公開されている。[3] |
| 3 | 展示・協働の主催者ページ | 作家名、役割、制作年または開催日、場所、公式URL、作品画像のクレジット | 主催者の独立ページは、作家本人のサイト外にある一次記録となる。 |

## 管理者・主催者へ送る訂正依頼文

### 日本語

**件名:** Aquira（アキラ）プロフィール表記・公式URL更新のお願い

> お世話になっております。掲載いただいているAquira（アキラ）のプロフィールについて、検索および作品情報の参照先を明確にするため、下記表記への更新をご相談できますでしょうか。  
>  
> 表示名: Aquira（アキラ）  
> 肩書き: 横浜を拠点に活動する写真家・オーディオビジュアル・現代アーティスト  
> 公式サイト: https://www.aquira.art/  
> 公式プロフィール: https://www.aquira.art/about/  
>  
> 掲載済みの経歴、作品名、展示情報は変更せず、上記の識別情報だけを正確に反映いただけると幸いです。必要な確認資料があればお送りします。どうぞよろしくお願いいたします。

### English

**Subject:** Request to update Aquira’s artist profile and official website link

> Hello,  
>  
> Thank you for featuring Aquira. To help visitors identify the official artist profile accurately, could you please update or add the following information while preserving the existing exhibition, work, and biography details?  
>  
> Display name: Aquira (アキラ)  
> Role: Yokohama-based photographer, audiovisual artist, and contemporary artist  
> Official website: https://www.aquira.art/  
> Official artist profile: https://www.aquira.art/about/  
>  
> I can provide any verification materials you may need. Thank you for your consideration.

## 展示・協働掲載先に依頼する最小記録セット

主催者ページ、ギャラリー、自治体・文化機関、メディアへの掲載依頼では、短いプロフィールだけでなく、以下の記録セットを渡す。これにより外部言及が単なる名前の羅列ではなく、検証可能な活動記録になる。

| 記録項目 | 必須度 | 例 | 公開前の確認 |
|---|---|---|---|
| 作家名 | 必須 | Aquira（アキラ） | 表記ゆれ・ローマ字・別名を確認する。 |
| 肩書きと拠点 | 必須 | 横浜を拠点に活動する写真家・現代アーティスト | 最新の本人表記に合わせる。 |
| 作品または活動の名称 | 必須 | 実際の作品名／プロジェクト名 | 正式表記・記号・英字を確認する。 |
| 日付・場所・主催 | 該当時必須 | YYYY-MM-DD、会場名、主催団体 | 一次記録と一致させる。 |
| 公式URL | 必須 | https://www.aquira.art/ | `about/`または対象作品ページを併記する。 |
| 画像クレジット | 推奨 | © Aquira / 撮影: Aquira | 権利者・利用条件を確認する。 |
| 第三者引用 | 任意 | 主催者の編集文 | 本人が書いたように見せない。 |

## 月次の確認手順

毎月、公式サイトと重要プロフィールについて、表示名、肩書き、所在地、公式URL、リンク切れ、作品・展示の年月日の5項目を確認する。主催者・掲載先の新しいURLは、根拠リンクとともに `verification-ledger.md` へ記録する。URLが削除・変更された場合は、公式サイトの`sameAs`や関連リンクを更新する。

## References

[1]: https://www.aquira.art/ "Aquira（アキラ）公式サイト — 公式にリンクされているソーシャルプロフィール"
[2]: https://thisisgallery.com/shop/aquira "This Is Gallery — Aquira’s／アキラの公開プロフィールと作品一覧"
[3]: https://bookanartist.co/art/aquira-portrait-artistic-portraits-photography-6/135635/18055 "Book An Artist — Aquira / AKIRA in Yokohama"
