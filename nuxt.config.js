const GTM_ID = 'GTM-WB4L3K8';

const consentModeScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
`;

const googleTagManagerScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;

export default {

    target: 'static',

    generate: {
        fallback: true
    },

    // Sitemap configuration
    sitemap: {
        hostname: 'https://kfzgutachten-karakale.de',
        gzip: true,
        trailingSlash: true,
        exclude: [
            '/datenschutz',
            '/datenschutz/**',
            '/impressum',
            '/impressum/**'
        ],
        defaults: {
            changefreq: 'monthly',
            priority: 0.8
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
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: [
            {
                hid: 'google-consent-mode',
                innerHTML: consentModeScript,
                'data-cookieconsent': 'ignore'
            },
            {
                hid: 'google-tag-manager',
                innerHTML: googleTagManagerScript,
                'data-cookieconsent': 'ignore'
            },
        ]
    },

    /*
    ** Global CSS
    */
    css: [
        'bootstrap/dist/css/bootstrap.css',
        'assets/scss/style.scss',
    ],

    router: {
        linkExactActiveClass: 'active-link',
        trailingSlash: true,
    },
/* 
    redirect: [
        { from: '^(?!www\.).*$', to: 'https://www.$1', statusCode: 301  },
    ], */
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/analytics.client.js',
    ],
  
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/redirect-module',
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
        terser: {
            terserOptions: {
                compress: {
                    drop_console: process.env.NODE_ENV === 'production'
                }
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: 10
                    },
                    common: {
                        minChunks: 2,
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        postcss: {
            plugins: process.env.NODE_ENV === 'production' ? {
                '@fullhuman/postcss-purgecss': {
                    content: [
                        'components/**/*.vue',
                        'layouts/**/*.vue',
                        'pages/**/*.vue',
                        'plugins/**/*.js',
                        'nuxt.config.js'
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                    safelist: {
                        standard: [
                            /-(leave|enter|appear)(|-(to|from|active))$/,
                            /^(?!(|.*?:)cursor-move).+-move$/,
                            /^router-link(|-exact)-active$/,
                            /data-v-.*/,
                            /swiper-.*/,
                            /wow/,
                            /move-up/,
                            /active-link/,
                            /show-mobile-menu/,
                            /search-popup-open/,
                            /vue-fixed-header--isFixed/
                        ],
                        deep: [
                            /swiper/,
                            /nuxt/
                        ],
                        greedy: [
                            /swiper/,
                            /nuxt/
                        ]
                    }
                }
            } : {}
        }
    },
}
