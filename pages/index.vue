<template>
    <main>
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

    </main>
</template>

<script>
    import { createPageHead } from '@/utils/seo';

    export default {
        components: {
            HeroAgency: () => import('@/components/HeroAgency'),
            ServiceOne: () => import('@/components/sections/ServiceOne'),
            PortfolioOne: () => import('@/components/sections/PortfolioOne'),
            CounterUpTwo: () => import('@/components/sections/CounterUpTwo'),
            TestimonialOne: () => import('@/components/sections/TestimonialOne'),
            BrandLogoStyleOne: () => import('@/components/BrandLogoStyleOne'),
            CurveShape: () => import('@/components/CurveShape'),
            ContactUsOne: () => import('@/components/ContactUsOne'),
        },

        head() {
            const head = createPageHead({
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

            head.link.push({
                rel: 'preload',
                as: 'image',
                href: '/img/generated/pruefer-unter-auto-1440.webp',
                imagesrcset: '/img/generated/pruefer-unter-auto-480.webp 480w, /img/generated/pruefer-unter-auto-960.webp 960w, /img/generated/pruefer-unter-auto-1440.webp 1440w',
                imagesizes: '100vw',
                fetchpriority: 'high',
            });

            return head;
        },
    };
</script>
