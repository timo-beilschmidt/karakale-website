const siteUrl = 'https://kfzgutachten-karakale.de';

const publicRoutes = [
  '/',
  '/about/',
  '/leistungen/',
  '/kontakt/',
  '/galerie/',
  '/datenschutz/',
  '/impressum/',
  '/kfz-gutachten-bonn/',
  '/unfallgutachten-bonn/',
  '/hauptuntersuchung-tuev-bonn/',
  '/sitemap.xml',
];

export default defineNuxtConfig({
  compatibilityDate: '2026-06-10',
  srcDir: 'app/',
  ssr: true,
  devtools: {
    enabled: false,
  },

  modules: [
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'de',
      },
      title: 'Kfz Gutachten und Prüfbüro Karakale',
      titleTemplate: '%s || Kfz Gutachten Karakale',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an. (z.B. Oldtimer-, Unfall-, e-Auto Gutachten)',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Kfz Gutachten Karakale' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:title', content: 'Kfz Gutachten und Prüfbüro Karakale' },
        {
          property: 'og:description',
          content: 'Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an. (z.B. Oldtimer-, Unfall-, e-Auto Gutachten)',
        },
        { property: 'og:url', content: siteUrl },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kfz Gutachten und Prüfbüro Karakale' },
        {
          name: 'twitter:description',
          content: 'Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an.',
        },
        {
          name: 'keywords',
          content: 'Kfz Gutachten, TÜV, Hauptuntersuchung, HU, Oldtimer Gutachten, Unfallgutachten, e-Auto Gutachten, Bonn, Prüfbüro',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon_logo.png' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon_logo.png' },
        {
          rel: 'preload',
          as: 'image',
          href: '/img/generated/pruefer-unter-auto-1440.webp',
          imagesrcset: '/img/generated/pruefer-unter-auto-480.webp 480w, /img/generated/pruefer-unter-auto-960.webp 960w, /img/generated/pruefer-unter-auto-1440.webp 1440w',
          imagesizes: '100vw',
          fetchpriority: 'high',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  css: [
    'bootstrap/dist/css/bootstrap-reboot.css',
    'bootstrap/dist/css/bootstrap-grid.css',
    'bootstrap/dist/css/bootstrap-utilities.css',
    '~/assets/scss/style.scss',
    '~/assets/scss/nuxt4-compat.scss',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  site: {
    url: siteUrl,
    name: 'Kfz Gutachten Karakale',
  },

  sitemap: {
    exclude: [
      '/datenschutz',
      '/datenschutz/**',
      '/impressum',
      '/impressum/**',
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: publicRoutes,
      failOnError: false,
    },
  },

  experimental: {
    viewTransition: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/default/_variables.scss"; @import "@/assets/scss/default/_mixins.scss";',
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
    },
  },
});
