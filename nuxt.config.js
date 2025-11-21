export default {

    target: 'static',

    generate: {
        fallback: true
    },

    // Sitemap configuration
    sitemap: {
        hostname: 'https://kfzgutachten-karakale.de',
        gzip: true,
        routes: [
            '/',
            '/about/',
            '/kontakt/',
            '/leistungen/',
            '/galerie/',
            '/datenschutz/',
            '/impressum/'
        ],
        defaults: {
            changefreq: 'monthly',
            priority: 1,
            lastmod: new Date()
        }
    },

    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'de'
        },
        title: 'Kfz Gutachten und Prüfbüro Karakale',
        titleTemplate: 'Kfz Gutachten Karakale || %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { 
                hid: 'description', 
                name: 'description', 
                content: 'Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an. (z.B. Oldtimer-, Unfall-, e-Auto Gutachten)'
            },
            // Open Graph tags
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'Kfz Gutachten Karakale' },
            { hid: 'og:locale', property: 'og:locale', content: 'de_DE' },
            { hid: 'og:title', property: 'og:title', content: 'Kfz Gutachten und Prüfbüro Karakale' },
            { hid: 'og:description', property: 'og:description', content: 'Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an. (z.B. Oldtimer-, Unfall-, e-Auto Gutachten)' },
            { hid: 'og:url', property: 'og:url', content: 'https://kfzgutachten-karakale.de' },
            // Twitter Card tags
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Kfz Gutachten und Prüfbüro Karakale' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an.' },
            // Keywords
            { hid: 'keywords', name: 'keywords', content: 'Kfz Gutachten, TÜV, Hauptuntersuchung, HU, Oldtimer Gutachten, Unfallgutachten, e-Auto Gutachten, Bonn, Prüfbüro' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon_logo.png' },
            { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon_logo.png' },
            { rel: 'canonical', href: 'https://kfzgutachten-karakale.de' }
        ],
        script: [
            // Google Consent Mode
            {
                src: "/js/consent.js",
                "data-cookieconsent": "ignore",
            },
            // Google Analytics Code
            {
                src: "https://www.googletagmanager.com/gtag/js?id=GTM-WB4L3K8",
                async: true,
            },
            // Import analitics.js file
            { src: "/js/analytics.js" },
        ]
    },

    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],

    router: {
        linkExactActiveClass: 'active-link',
    },
/* 
    redirect: [
        { from: '^(?!www\.).*$', to: 'https://www.$1', statusCode: 301  },
    ], */
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/vue2-google-maps.js',
        '~/plugins/vue-masonry-css.js',
        '~/plugins/Mixitup.client.js',
        '~/plugins/silentbox.js',
        { src: '~/plugins/vue-masonry', ssr: false }
    ],
  
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/redirect-module',
        'vue-social-sharing/nuxt',
        '@nuxtjs/sitemap',
    ],

    styleResources: {
        scss: [
            'assets/scss/default/_variables.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        transpile: [/^vue2-google-maps($|\/)/]
    },
}
