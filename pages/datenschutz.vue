<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <!-- <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" /> -->

        <!-- <AboutBreadcrumb /> -->

        <!-- <WhatWeDo /> -->

        <DatenschutzText />

        <!-- <FlexibleSlider /> -->

        <!-- <div class="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bk-title--default text-center">
                            <h5 class="heading heading-h5 theme-color">How We Do</h5>
                            <div class="bkseparator--30"></div>
                            <h3 class="heading heading-h3">Creative Procedure</h3>
                        </div>

                        <GradationOne />
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <TestimonialTwo /> -->

        <!-- <BrandLogoStyleOne /> -->

        <!-- <CallToAction /> -->

        <Footer />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            DatenschutzText: () => import('@/components/DatenschutzText'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            const baseUrl = 'https://kfzgutachten-karakale.de';
            const pageUrl = baseUrl + '/datenschutz';
            
            return {
                title: 'Datenschutz - Kfz Gutachten Karakale',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Datenschutzerklärung des Kfz Prüfbüros Karakale. Informationen zum Schutz Ihrer persönlichen Daten.'
                    },
                    {
                        hid: 'robots',
                        name: 'robots',
                        content: 'noindex, follow'
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: 'Datenschutz - Kfz Gutachten Karakale'
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'Datenschutzerklärung des Kfz Prüfbüros Karakale.'
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: pageUrl
                    },
                ],
                link: [
                    { rel: 'canonical', href: pageUrl }
                ]
            }
        },
    };
</script>