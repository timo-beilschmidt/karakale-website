<template>
    <div class="testimonial testimonial_style--1">
        <div class="content">
            <p v-html="testimonial.text"></p>
            <div class="testimonial-info">
                <div class="post-thumbnail">
                    <img :src="testimonial.thumb" :alt="testimonial.alt" width="70" height="70" loading="lazy" decoding="async">
                </div>
                <div class="clint-info">
                    <h6>{{ testimonial.name }}</h6>
                    <span>{{ testimonial.position }}</span>
                </div>
            </div>
            <div class="testimonial-quote">
                <SiteIcon name="quote" />
            </div>
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';

    export default {
        components: {
            SiteIcon,
        },
        props: {
            testimonial: {
                type: Object,
                required: true,
            },
        },
    };
</script>
