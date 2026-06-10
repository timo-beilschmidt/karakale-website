<template>
    <main>
        <AboutBreadcrumb />

        <WhatWeDo />

        <!-- <AboutSkill /> -->

        <FlexibleSlider />

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

        <TestimonialTwo />

        <BrandLogoStyleOne />

        <CallToAction />

    </main>
</template>

<script>
    import { createPageHead } from '@/utils/seo';

    export default {
        components: {
            AboutBreadcrumb: () => import('@/components/AboutBreadcrumb'),
            WhatWeDo: () => import('@/components/WhatWeDo'),
            FlexibleSlider: () => import('@/components/FlexibleSlider'),
            TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
            BrandLogoStyleOne: () => import('@/components/BrandLogoStyleOne'),
            CallToAction: () => import('@/components/CallToAction'),
        },

        head() {
            return createPageHead({
                title: 'Über uns - Kfz Gutachten Karakale Bonn',
                description: 'Erfahren Sie mehr über das Kfz Prüfbüro Karakale in Bonn: Erfahrung, Sachverständigenkompetenz, Hauptuntersuchungen und Gutachten als Partner der TÜV NORD.',
                path: '/about/',
                keywords: 'Kfz Prüfbüro Bonn, Kfz Gutachten Team Bonn, TÜV Partner Bonn, Prüfbüro Karakale',
                image: '/img/other/ZOE_cut.webp',
                breadcrumbs: [
                    { name: 'Startseite', path: '/' },
                    { name: 'Über uns', path: '/about/' },
                ],
            });
        },
    };
</script>
