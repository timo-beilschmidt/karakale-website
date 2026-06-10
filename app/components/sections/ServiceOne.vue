<template>
    <div class="bk-service-area section-ptb-xl bg_image--2 test-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center wow move-up">
                        <h3>Wenn es mal kracht oder die Plakette fehlt...</h3>
                        <h2>Zu unseren Leistungen gehören Gutachten sowie die Hauptuntersuchung.</h2><br>
                        <h2>Rufen Sie uns einfach an oder schreiben Sie uns.</h2><br>
                        <h2>Wir freuen uns auf Sie!</h2>
                    </div>
                </div>
            </div>
            <div class="row mt--70 mt_sm--20 mt_md--30">
                <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(0, 6)" :key="service.id">
                    <ServiceItemOne :service="service" />
                </div>
                <div id="extension" class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(6, 9)" :key="service.id">
                    <ServiceItemOne :service="service" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';
    
    import ServiceItemOne from '../ServiceItemOne';

    export default {
        components: {
            ServiceItemOne,
        },

        data () {
            return {
                data
            }
        },
    };
</script>

<style lang="scss" scoped>

 #extension {
    @media #{$sm-layout} {
        display: none;
    }
 }
</style>
