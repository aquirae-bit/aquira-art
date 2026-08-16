# aquira.art

Aquira.art の静的サイトです。日常的な文章・作品・リンクの更新は、**`content/site-content.js` だけ**で行えます。公開される `index.html` は、このコンテンツファイルから生成します。

## 最短の更新手順

1. `content/site-content.js` を開きます。
2. 更新したい文章、リンク、作品情報を編集します。
3. リポジトリのルートで次のコマンドを実行します。

   ```bash
   node scripts/build-site.mjs
   ```

4. 変更された `index.html` と `content/site-content.js` を一緒にコミットします。

> `index.html` は公開用の自動生成ファイルです。通常は直接編集せず、`content/site-content.js` を更新してください。

## 作品を追加・削除する

`content/site-content.js` の `works.items` が作品一覧です。既存の `{ ... }` ブロックを複製して、`number`、`title`、`description` を変更すれば作品を追加できます。不要な作品はブロック全体を削除します。番号は表示用なので、並び替えた場合は `01`、`02` のように揃えてください。

## ファイルの役割

| ファイル | 役割 | 通常の編集頻度 |
| --- | --- | --- |
| `content/site-content.js` | 文章、作品、リンク、ページ情報をまとめた編集窓口 | 高い |
| `index.html` | 生成後の公開ページ。検索エンジンとブラウザが直接読むHTML | 直接は編集しない |
| `scripts/build-site.mjs` | コンテンツを `index.html` に変換する小さなビルダー | 通常は編集しない |
| `styles/` | デザイン変数、レイアウト、UI部品のスタイル | デザイン調整時のみ |

## デザインを調整するとき

色、余白、書体は `styles/tokens.css`、ページ全体の構成は `styles/layout.css`、見出し・ボタン・作品一覧などは `styles/components.css` に分かれています。まず `tokens.css` から変更すると、AQUIRA の一貫性を保ちながら調整できます。

既存の「余白を活かした静かなエディトリアルデザイン」を保つため、コンテンツ更新では `content/site-content.js`、デザイン変更では `styles/` のように目的別に触る場所を分けています。
