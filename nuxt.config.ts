// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  mdc: { highlight: { noApiRoute: false } },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: { routes: ['/'] },
    routeRules: {
      '/_well-known/*': { headers: { 'cache-control': 'public, max-age=31536000' } }
    }
  },

  // --- SEO / HEAD defaults (Unhead) ---
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s — MyRocket',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#FF7A00' },
        { name: 'robots', content: 'index,follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  image: {
    dir: 'public/images',
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280 }
  },
  // eslint custom
  eslint: {
    config: {
      stylistic: { commaDangle: 'never', braceStyle: '1tbs' }
    }
  }
})
