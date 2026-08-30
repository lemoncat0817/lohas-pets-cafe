# LOHAS Pets Café ‧ 樂活寵物咖啡廳

一個寵物友善咖啡廳的企業形象網站。以 Nuxt 4 靜態產生（SSG）多頁面站台，作為餐廳品牌網站的接案等級展示案例。

## Demo 網站

https://lemoncat0817.github.io/Vue3-PetCafe/

## 技術棧

- **框架**：Nuxt 4（TypeScript，`nuxi generate` 靜態產生多頁面）
- **樣式**：Tailwind CSS v4
- **元件庫**：[shadcn-vue](https://www.shadcn-vue.com/)（基於 [Reka UI](https://reka-ui.com/)，元件原始碼位於 `app/components/ui`）
- **圖示**：@nuxt/icon（Iconify / Lucide）
- **字型**：@nuxt/fonts 自架 Noto Serif TC / Noto Sans TC
- **圖片**：@nuxt/image（WebP 多尺寸最佳化）
- **表單**：vee-validate + zod，送出至 [Web3Forms](https://web3forms.com/)
- **SEO**：@nuxtjs/seo（每頁 meta、sitemap、robots、JSON-LD 結構化資料）

## 網站結構

`/`（首頁）、`/about`（關於我們）、`/menu`（完整菜單）、`/pets`（店貓店犬）、`/shop`（寵物零食）、`/gallery`（用餐環境與評價）、`/faq`（常見問題）、`/contact`（聯絡我們）。

## 安裝與運行

確保已安裝 Node.js 22+ 與 pnpm。

```sh
pnpm install
```

## 開發模式

```sh
pnpm dev
```

## 靜態產生

```sh
pnpm generate
```

輸出於 `.output/public`，可直接部署到任何靜態託管服務。

## 部署到 GitHub Pages

`main` 分支推送時，`.github/workflows/deploy.yml` 會自動建置並部署到 GitHub Pages。**需先到 repo 的 Settings → Pages，將來源切換為「GitHub Actions」才會生效**。

## 聯絡表單設定

`app/pages/contact.vue` 中的 `WEB3FORMS_ACCESS_KEY` 需替換為在 [web3forms.com](https://web3forms.com/) 申請的免費 Access Key，表單才能實際送出。
