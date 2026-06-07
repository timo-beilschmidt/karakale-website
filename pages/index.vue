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
    import { createPageHead } from '@/utils/seo';

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
            return createPageHead({
                title: 'Hauptuntersuchung (TÜV, HU) und Kfz Gutachten in Bonn',
                description: 'Hauptuntersuchung (TÜV/HU), Unfallgutachten, Wertgutachten und Oldtimer-Gutachten beim Kfz Prüfbüro Karakale in Bonn. Partner der TÜV NORD.',
                path: '/',
                keywords: 'TÜV Hauptuntersuchung Bonn, HU Prüfung Bonn, Kfz Gutachten Bonn, Unfallgutachten Bonn, TÜV NORD Partner',
                image: '/img/other/Pruefer_unter_Auto_scaled.webp',
                breadcrumbs: [
                    { name: 'Startseite', path: '/' },
                ],
                services: [
                    { name: 'Hauptuntersuchung (TÜV/HU)', description: 'HU-Termine beim Prüfbüro Karakale in Bonn.' },
                    { name: 'Unfallgutachten', description: 'Schadengutachten und Beweissicherung nach einem Unfall.' },
                    { name: 'Wertgutachten', description: 'Nachvollziehbare Bewertung von Fahrzeugwerten.' },
                    { name: 'Oldtimer-Gutachten', description: 'Gutachten für Klassiker und H-Kennzeichen.' },
                ],
            });
        },
    };
</script>
