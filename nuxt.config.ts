import tailwindcss from '@tailwindcss/vite'

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages'
// GitHub Actions injects GITHUB_REPOSITORY ("owner/repo") into every job automatically —
// deriving the repo name from it means the base path survives a repo rename with zero
// code changes, instead of a string that has to be hand-updated every time. Only used
// when actually building for GitHub Pages; falls back to '/' for local dev/preview.
// To exercise this path locally, set GITHUB_REPOSITORY yourself before building, e.g.
// `$env:GITHUB_REPOSITORY = 'owner/repo'` (PowerShell) or `GITHUB_REPOSITORY=owner/repo` (sh).
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const baseURL = isGithubPages && repoName ? `/${repoName}/` : '/'
// Same base path, without the trailing slash — for building absolute URLs like the
// schema.org image/logo below, where `${basePrefix}/images/...` reads more naturally
// than juggling baseURL's trailing slash at every call site.
const basePrefix = baseURL === '/' ? '' : baseURL.slice(0, -1)
const siteUrl = 'https://lemoncat0817.github.io'

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'shadcn-nuxt',
  ],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  devtools: { enabled: true },

  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'zh-TW' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` }],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  site: {
    url: siteUrl,
    name: 'LOHAS Pets Café ‧ 樂活寵物咖啡廳',
    description: '台北的寵物友善咖啡廳，提供人與毛孩共享的餐點、店貓店狗互動與寵物零食專賣，歡迎帶著毛孩子一起來用餐。',
    defaultLocale: 'zh-TW',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  future: { compatibilityVersion: 4 },

  // Native browser page transitions. Chromium gets a smooth cross-fade;
  // other browsers silently no-op (plain navigation, no regression).
  // Nuxt automatically skips this when prefers-reduced-motion is set.
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2026-01-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/menu', '/reservation', '/pets', '/shop', '/gallery', '/faq', '/contact'],
      failOnError: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
  },

  eslint: {
    config: { stylistic: true },
  },

  fonts: {
    families: [
      { name: 'Noto Serif TC', provider: 'google', weights: [600, 700] },
      { name: 'Noto Sans TC', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },

  icon: {
    mode: 'svg',
  },

  image: {
    quality: 82,
    format: ['webp'],
  },
  linkChecker: { enabled: false },

  ogImage: { enabled: false },
  // robots.txt only means anything at an origin's root. This site deploys under a
  // /<repo-name>/ subpath on GitHub Pages (a project page, not the account's root page),
  // so a robots.txt written there would sit at a path crawlers never check —
  // @nuxt/robots refuses to generate one in that case. sitemap.xml still works
  // fine at the subpath and gets submitted directly to Search Console.
  robots: { enabled: true, robotsTxt: !isGithubPages },

  // Written as a plain object (not the `defineLocalBusiness()` helper) because that
  // helper lives in `nuxt-schema-org/schema`, a transitive dep of @nuxtjs/seo that
  // pnpm doesn't hoist to the root — importing it here would fail to resolve.
  // The shape nuxt-schema-org expects is identical either way.
  schemaOrg: {
    identity: {
      '@type': ['Restaurant'],
      'name': 'LOHAS Pets Café',
      'description': '台北的寵物友善咖啡廳，提供人與毛孩共享的餐點、店貓店狗互動與寵物零食專賣。',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '貓爪路三段貓尾巷 5 號',
        'addressLocality': '肥貓區',
        'addressRegion': '貓貓市',
        'addressCountry': 'TW',
      },
      'image': `${siteUrl}${basePrefix}/images/hero/hero-poster.webp`,
      'logo': `${siteUrl}${basePrefix}/favicon.svg`,
      'servesCuisine': ['Café', 'Pet-friendly'],
      'priceRange': '$$',
      'acceptsReservations': 'True',
      'openingHoursSpecification': [
        { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Wednesday', 'Thursday', 'Friday'], 'opens': '11:00', 'closes': '20:00' },
        { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Saturday', 'Sunday'], 'opens': '10:00', 'closes': '21:00' },
      ],
    },
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  sitemap: { enabled: true },
})
