<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <ServiceModernBreadcrumb />

        <ServiceModern />

        <ServiceIconBoxTwo />

        <CallToAction />

        <Footer />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ServiceModernBreadcrumb: () => import('@/components/ServiceModernBreadcrumb'),
            ServiceModern: () => import('@/components/ServiceModern'),
            ServiceIconBoxTwo: () => import('@/components/sections/ServiceIconBoxTwo'),
            CallToAction: () => import('@/components/CallToAction'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        head() {
            const baseUrl = 'https://kfzgutachten-karakale.de';
            const pageUrl = baseUrl + '/leistungen';
            
            return {
                title: 'Leistungen: Gutachten und TÜV (HU) - Karakale',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Unsere Leistungen: TÜV Hauptuntersuchung (HU), Oldtimer-Gutachten, Unfallgutachten, e-Auto Gutachten, Wertgutachten, Gasanlagenprüfung, Vollabnahme und mehr. Jetzt Termin vereinbaren.'
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'Kfz Gutachten, TÜV, Hauptuntersuchung, Oldtimer Gutachten, Unfallgutachten, e-Auto Gutachten, Wertgutachten, Gasanlagenprüfung, Vollabnahme'
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: 'Leistungen: Gutachten und TÜV (HU) - Karakale'
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'Unsere Leistungen: TÜV Hauptuntersuchung, Oldtimer-Gutachten, Unfallgutachten, e-Auto Gutachten und mehr.'
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: pageUrl
                    },
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: 'Leistungen: Gutachten und TÜV (HU) - Karakale'
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: 'Unsere Leistungen: TÜV Hauptuntersuchung, Oldtimer-Gutachten, Unfallgutachten und mehr.'
                    },
                ],
                link: [
                    { rel: 'canonical', href: pageUrl }
                ],
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        type: 'application/ld+json',
                        innerHTML: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Kfz Gutachten und Hauptuntersuchung",
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "Kfz Gutachten und Prüfbüro Karakale",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Siemensstr. 1",
                                    "addressLocality": "Bonn",
                                    "postalCode": "53121",
                                    "addressCountry": "DE"
                                }
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": "Bonn"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Kfz Dienstleistungen",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Hauptuntersuchung (TÜV/HU)"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Oldtimer Gutachten"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Unfallgutachten"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "e-Auto Gutachten"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Wertgutachten"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Eintragungen"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Gasanlagenprüfung"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Vollabnahme"
                                        }
                                    }
                                ]
                            }
                        })
                    }
                ]
            }
        },
    };
</script>