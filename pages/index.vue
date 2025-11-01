<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <!-- <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" /> -->

        <HeroAgency />

        <ServiceOne id="service" />

        <PortfolioOne />

        <CounterUpTwo />

        <!-- <TeamOne /> -->

        <CurveShape>
            <template v-slot:bgcolor>
                <path style="fill: #f5f5f5;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <TestimonialOne />

        <BrandLogoStyleOne />

        <ContactUsOne />

        <Footer />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroAgency: () => import('@/components/HeroAgency'),
            ServiceOne: () => import('@/components/sections/ServiceOne'),
            PortfolioOne: () => import('@/components/sections/PortfolioOne'),
            CounterUpOne: () => import('@/components/sections/CounterUpOne'),
            CounterUpTwo: () => import('@/components/sections/CounterUpTwo'),
            TeamOne: () => import('@/components/sections/TeamOne'),
            TestimonialOne: () => import('@/components/sections/TestimonialOne'),
            BrandLogoStyleOne: () => import('@/components/BrandLogoStyleOne'),
            BlogOne: () => import('@/components/sections/BlogOne'),
            CurveShape: () => import('@/components/CurveShape'),
            ContactUsOne: () => import('@/components/ContactUsOne'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-2')
        },

        head() {
            const baseUrl = 'https://kfzgutachten-karakale.de';
            const pageUrl = baseUrl + this.$route.path;
            
            return {
                title: 'Hauptuntersuchung (TÜV, HU) - Kfz Gutachten Karakale',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Hauptuntersuchung (TÜV/HU) beim Kfz Prüfbüro Karakale in Bonn. Professionelle TÜV-Prüfungen und Gutachten für Ihr Fahrzeug. Schnelle Termine, kompetente Beratung. Partner der TÜV NORD.'
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'TÜV Hauptuntersuchung, HU Prüfung, Kfz Gutachten Bonn, TÜV Prüfung Bonn, Hauptuntersuchung Termin, TÜV Nord Partner'
                    },
                    // Open Graph
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: 'Hauptuntersuchung (TÜV, HU) - Kfz Gutachten Karakale Bonn'
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'Hauptuntersuchung (TÜV/HU) beim Kfz Prüfbüro Karakale in Bonn. Professionelle TÜV-Prüfungen und Gutachten. Partner der TÜV NORD.'
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: baseUrl + '/favicon_logo.png'
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: pageUrl
                    },
                    // Twitter Card
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: 'Hauptuntersuchung (TÜV, HU) - Kfz Gutachten Karakale'
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: 'Hauptuntersuchung (TÜV/HU) beim Kfz Prüfbüro Karakale in Bonn. Professionelle TÜV-Prüfungen und Gutachten.'
                    },
                    {
                        hid: 'twitter:image',
                        name: 'twitter:image',
                        content: baseUrl + '/favicon_logo.png'
                    },
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: pageUrl
                    }
                ],
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        type: 'application/ld+json',
                        innerHTML: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Kfz Gutachten und Prüfbüro Karakale",
                            "description": "Kfz Gutachten und Prüfbüro für Hauptuntersuchungen (TÜV) und Gutachten jeder Art in Bonn",
                            "url": baseUrl,
                            "telephone": "+49-228-96699180",
                            "email": "info@ing-karakale.de",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Siemensstr. 1",
                                "addressLocality": "Bonn",
                                "postalCode": "53121",
                                "addressCountry": "DE"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "50.7374",
                                "longitude": "7.0982"
                            },
                            "openingHours": [
                                "Mo-Fr 08:00-18:00",
                                "Sa 09:00-14:00"
                            ],
                            "priceRange": "$$",
                            "image": baseUrl + "/favicon_logo.png",
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