<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <!-- <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" /> -->

        <div class="breadcaump-area pt--130 pb--50 bg_color--1 breadcaump-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <h1 class="heading heading-h1">Galerie</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container-fluid plr--30">
                <div class="row mtn--30">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--30" v-for="portfolio in data.portfolioItems" :key="portfolio.id">
                        <PortfolioItemCenterCaption :portfolio="portfolio" />
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </div>
</template>

<script>
    import data from '../data/portfolio.json';

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
            Footer: () => import('@/components/Footer'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            const baseUrl = 'https://kfzgutachten-karakale.de';
            const pageUrl = baseUrl + '/galerie';
            
            return {
                title: 'Galerie - Kfz Gutachten Karakale',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Galerie unserer Arbeit - Sehen Sie Beispiele unserer Kfz Gutachten und Prüfungen. Bilder von Hauptuntersuchungen, Unfallgutachten und mehr.'
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'Galerie, Kfz Gutachten Bilder, TÜV Prüfung Bilder, Unfallgutachten Beispiele'
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: 'Galerie - Kfz Gutachten Karakale'
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'Galerie unserer Arbeit - Sehen Sie Beispiele unserer Kfz Gutachten und Prüfungen.'
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