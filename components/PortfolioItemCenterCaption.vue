<template>
    <div class="portfolio portfolio_style--1">
        <div class="thumb">
            <img
                :src="image.src"
                :srcset="image.srcset"
                sizes="(min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw"
                :alt="portfolio.heading"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
            >
        </div>
        <!-- <div class="port-overlay-info">
            <div class="hover-action">
                <h3 class="post-overlay-title">
                    <n-link :to="`/portfolio/${portfolio.slug}`">{{ portfolio.heading }}</n-link>
                </h3>
            </div>
        </div> -->
    </div>
</template>

<script>
    import { getResponsiveImage } from '@/utils/responsiveImages';

    export default {
        props: ['portfolio'],
        computed: {
            image() {
                return getResponsiveImage(this.portfolio.image);
            },
        },
    };
</script>
