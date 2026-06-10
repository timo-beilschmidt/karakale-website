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
        
    </div>
</template>

<script>
    import { getResponsiveImage } from '@/utils/responsiveImages';

    export default {
        props: {
            portfolio: {
                type: Object,
                required: true,
            },
        },
        computed: {
            image() {
                return getResponsiveImage(this.portfolio.image);
            },
        },
    };
</script>
