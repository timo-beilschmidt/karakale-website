<template>
    <main>
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

    </main>
</template>

<script>
    import data from '../data/portfolio.json';
    import { createPageHead } from '@/utils/seo';

    export default {
        components: {
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
        },
        
        data () {
            return {
                data,
            }
        },

        head() {
            return createPageHead({
                title: 'Galerie - Kfz Gutachten Karakale Bonn',
                description: 'Galerie unserer Arbeit in Bonn: Beispiele aus Kfz Gutachten, Unfallgutachten, Hauptuntersuchungen und Fahrzeugbewertungen.',
                path: '/galerie/',
                keywords: 'Galerie Kfz Gutachten Bonn, Unfallgutachten Beispiele, Kfz Prüfbüro Bilder',
                image: '/img/portfolio/bearbeitet/810_810.jpg',
                breadcrumbs: [
                    { name: 'Startseite', path: '/' },
                    { name: 'Galerie', path: '/galerie/' },
                ],
            });
        },
    };
</script>
