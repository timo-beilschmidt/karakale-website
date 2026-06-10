<template>
    <div class="bk-testimonial-area section-ptb-xl pt-0 bg_color--5 poss_relative pt_sm--0">
        <div class="container section-pt-xl">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center wow move-up">
                        <h3 class="theme-color">{{ data.sectionSubTitle }}</h3>
                        <h2>{{ data.sectionTitle }}</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="testimonial-wrapper testimonial--horizontal mt--80 wow move-up">
            <div class="testimonial-container">
                <div class="testimonial-static-grid">
                    <div v-for="testimonial in data.testimonials" :key="testimonial.id">
                        <TestimonialItem :testimonial="testimonial" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/testimonial.json';
    import TestimonialItem from '../TestimonialItem.vue';

    export default {
        components: {
            TestimonialItem,
        },

        data () {
            return {
                data,
            }
        }
    };
</script>

<style lang="scss" scoped>
.testimonial-static-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media #{$md-layout} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media #{$sm-layout} {
        grid-template-columns: 1fr;
    }
}
</style>
