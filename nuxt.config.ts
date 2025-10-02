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
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: 'MyRocket',
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
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://myrocket.fr',
    name: 'MyRocket – Facturation intelligente pour TPE / PME et indépendants'
  },
  mdc: { highlight: { noApiRoute: false } },
  compatibilityDate: '2025-01-15',
  nitro: {
    prerender: { routes: ['/'] },
    routeRules: {
      '/_well-known/*': { headers: { 'cache-control': 'public, max-age=31536000' } },
      '/**': { static: true }
    }
  },
  eslint: {
    config: {
      stylistic: { commaDangle: 'never', braceStyle: '1tbs' }
    }
  }
})
