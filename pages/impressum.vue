<template>
    <main>
        <ImpressumBreadcrumb />

        <!-- <WhatWeDo /> -->

        <Impressum />

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

    </main>
</template>

<script>
    import { createPageHead } from '@/utils/seo';

    export default {
        components: {
            ImpressumBreadcrumb: () => import('@/components/ImpressumBreadcrumb'),
            Impressum: () => import('@/components/Impressum'),
        },

        head() {
            return createPageHead({
                title: 'Impressum - Kfz Gutachten Karakale',
                description: 'Impressum des Kfz Prüfbüros Karakale. Rechtliche Angaben und Kontaktdaten.',
                path: '/impressum/',
                robots: 'noindex, follow',
                image: '/img/logo/logo_karakale.svg',
                breadcrumbs: [
                    { name: 'Startseite', path: '/' },
                    { name: 'Impressum', path: '/impressum/' },
                ],
            });
        },
    };
</script>
