<template>
    <div class="py-4 brook-counterup-area bg_color--1">
        <div class="container">
            <div class="row">
                <!-- Start Single Counter -->
                <div class="px-1 col-lg-4 col-md-4 col-sm-6 col-12" v-for="counter in data.counters.slice(0, 3)" :key="counter.id">
                    <div class="brook-counter text-center">
                        <div class="icon">
                            <SiteIcon :name="counter.icon" />
                        </div>
                        <div class="content">
                            <span class="count">{{ counter.count }}</span>
                            <h6 class="heading heading-h6">{{ counter.heading }}</h6>
                        </div>
                    </div>
                </div>
                <!-- End Single Counter -->
            </div>
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';
    import data from '../../data/counterup.json';

    export default {
        components: {
            SiteIcon,
        },
        data () {
            return {
                data
            }
        },
    };
</script>

<style lang="scss">

</style>
