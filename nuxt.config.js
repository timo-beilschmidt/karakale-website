export default {

    target: 'static',

    generate: {
        fallback: true
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
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon_logo.png' },
            { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon_logo.png' }
        ],
        script: [
            // Google Analytics Code
            {
                src: "https://www.googletagmanager.com/gtag/js?id=GTM-5GGHFT2",
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
