# FriMe LP

需要検証用のランディングページです。

## 技術スタック

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS v4
- 静的エクスポート（`output: 'export'`）
- GitHub Pages でホスティング

## ファイル構成

```
app/
  layout.tsx          メタデータ・OGP・フォント
  page.tsx            全セクションの組み立て
  globals.css         デザイントークン・共通スタイル
components/
  Nav.tsx             ピルナビ
  Hero.tsx            ファーストビュー
  Problem.tsx         課題セクション
  MutualYes.tsx       相互YESセクション
  Solution.tsx        解決策・フロー
  FifteenMinutes.tsx  タイマー演出
  Weekend.tsx         週末プランセクション
  AiPlan.tsx          AIプランセクション
  Safety.tsx          安心・安全セクション
  Maker.tsx           制作者メッセージ
  Cta.tsx             CTAブロック（source prop で計測）
  Faq.tsx             FAQ アコーディオン
  Footer.tsx          フッター
  FadeIn.tsx          スクロールフェードインユーティリティ
lib/
  config.ts           GoogleフォームURL（ここだけ変更すればOK）
public/
  .nojekyll           GitHub Pages 用（必須）
  favicon.svg         ファビコン
  ogp.png             ★ 後から差し替えてください（下記参照）
.github/
  workflows/
    deploy.yml        GitHub Actions デプロイ設定
```

## GoogleフォームURLの変更

`lib/config.ts` の1行だけ変更すれば、全CTAに反映されます：

```ts
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/XXXX";
//                                                               ^^^^ ここをフォームのIDに変更
```

各CTAには `utm_content` パラメータが付きます（`nav` / `hero` / `mid` / `end`）。

## OGP画像の作成

`public/ogp.png` が必要です。1200×630px のPNG画像を用意してください。

推奨デザイン：クリーム地（`#f5f1e4`）に見出しテキストを配置したシンプルな画像。  
OGP画像がないと SNS シェア時にサムネイルが表示されません。

## GitHub Pages 公開手順

1. リポジトリを GitHub に push する
2. GitHub の Settings → Pages を開く
3. Source を **「GitHub Actions」** に変更する
4. main ブランチに push すると自動デプロイが始まる
5. デプロイ完了後、`https://<username>.github.io/LP-FriMe/` で確認する

## ローカル開発

```bash
npm install
npm run dev   # http://localhost:3000 で確認
```

## ビルド確認

```bash
npm run build  # out/ が生成されることを確認
```
