<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <ServiceModernBreadcrumb />

        <ServiceModern />

        <ServiceIconBoxTwo />

        <SeoFaq :items="faq" />

        <CallToAction />

        <Footer />

    </div>
</template>

<script>
    import { createPageHead } from '@/utils/seo';

    const leistungenFaq = [
        {
            question: 'Welche Kfz Gutachten bietet Karakale in Bonn an?',
            answer: 'Wir bieten unter anderem Unfallgutachten, Wertgutachten, Oldtimer-Gutachten, e-Auto Gutachten und Beweissicherung an.',
        },
        {
            question: 'Kann ich bei Karakale auch eine Hauptuntersuchung machen lassen?',
            answer: 'Ja. Als Partner der TÜV NORD bieten wir Hauptuntersuchungen in Bonn an.',
        },
        {
            question: 'Wie erreiche ich das Prüfbüro?',
            answer: 'Sie erreichen uns in der Siemensstr. 1 in 53121 Bonn, telefonisch unter 0228-96699180 oder per E-Mail an info@ing-karakale.de.',
        },
    ];

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ServiceModernBreadcrumb: () => import('@/components/ServiceModernBreadcrumb'),
            ServiceModern: () => import('@/components/ServiceModern'),
            ServiceIconBoxTwo: () => import('@/components/sections/ServiceIconBoxTwo'),
            SeoFaq: () => import('@/components/SeoFaq'),
            CallToAction: () => import('@/components/CallToAction'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                faq: leistungenFaq,
            }
        },

        head() {
            return createPageHead({
                title: 'Leistungen: Kfz Gutachten und TÜV (HU) in Bonn',
                description: 'Unsere Leistungen in Bonn: TÜV Hauptuntersuchung (HU), Oldtimer-Gutachten, Unfallgutachten, e-Auto Gutachten, Wertgutachten, Gasanlagenprüfung und Vollabnahme.',
                path: '/leistungen/',
                keywords: 'Kfz Gutachten Bonn, TÜV Bonn, Hauptuntersuchung Bonn, Oldtimer Gutachten Bonn, Unfallgutachten Bonn, e-Auto Gutachten, Wertgutachten',
                image: '/img/other/leistung_2.webp',
                breadcrumbs: [
                    { name: 'Startseite', path: '/' },
                    { name: 'Leistungen', path: '/leistungen/' },
                ],
                services: [
                    { name: 'Hauptuntersuchung (TÜV/HU)', description: 'HU-Termine beim Prüfbüro Karakale in Bonn.' },
                    { name: 'Unfallgutachten', description: 'Schadengutachten und Beweissicherung nach einem Unfall.' },
                    { name: 'Oldtimer-Gutachten', description: 'Gutachten für Klassiker und H-Kennzeichen.' },
                    { name: 'Wertgutachten', description: 'Bewertung des Marktwerts von Fahrzeugen.' },
                    { name: 'Gasanlagenprüfung', description: 'Gasanlagenprüfung für Fahrzeuge, Wohnmobile und Boote.' },
                    { name: 'Vollabnahme', description: 'Prüfung für Importfahrzeuge und lange stillgelegte Fahrzeuge.' },
                ],
                faq: this.faq,
            });
        },
    };
</script>
