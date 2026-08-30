import tailwindcss from '@tailwindcss/vite'

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages'
const baseURL = isGithubPages ? '/Vue3-PetCafe/' : '/'
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
      routes: ['/', '/about', '/menu', '/pets', '/shop', '/gallery', '/faq', '/contact'],
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
  robots: { enabled: true },

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
      'image': `${siteUrl}${isGithubPages ? '/Vue3-PetCafe' : ''}/images/hero/hero-cafe.webp`,
      'logo': `${siteUrl}${isGithubPages ? '/Vue3-PetCafe' : ''}/favicon.svg`,
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
