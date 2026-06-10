<template>
    <div class="brook-icon-boxes-area bg_color--1 pb_lg--50">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-lg-7 pl--350 plr_lg--30 plr_md--50 plr_sm--15">
                    <div class="row mtn--50">
                        <div class="col-sm-6 wow move-up mt--50" v-for="service in data.services.slice(0, 4)" :key="service.id">
                            <div class="icon-box text-left no-border">
                                <component
                                    :is="service.link ? 'NuxtLink' : 'div'"
                                    v-bind="service.link ? { to: service.link } : {}"
                                    class="inner service-card-link"
                                    :data-analytics-event="service.link ? 'select_service' : null"
                                    :data-service-name="service.link ? service.heading : null"
                                >
                                    <div class="icon">
                                        <SiteIcon
                                            v-if="service.icon" 
                                            key="ionic"
                                            :name="service.icon"
                                        />
                                        <img 
                                            v-else
                                            key="static"
                                            width="70"
                                            height="90"
                                            :src="'/img/icons/' + service.img" 
                                            :alt="service.alt"
                                        >
                                    </div>
                                    <div class="content">
                                        <h5 class="heading heading-h5">{{ service.heading }}</h5>
                                        <p class="bk_pra">{{ service.desc }}</p>
                                    </div>
                                </component>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 mt_md--40 mt_sm--40">
                    <div class="thumb">
                        <img
                            class="w-100"
                            src="/img/generated/leistung-2-960.webp"
                            srcset="/img/generated/leistung-2-480.webp 480w, /img/generated/leistung-2-960.webp 960w, /img/generated/leistung-2-1440.webp 1440w"
                            sizes="(min-width: 992px) 42vw, 100vw"
                            alt="Kfz Sachverständiger bei der Fahrzeugprüfung in Bonn"
                            width="600"
                            height="800"
                            loading="lazy"
                            decoding="async"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';
    import data from '../../data/service.json';

    export default {
        components: {
            SiteIcon,
        },
        data () {
            return {
                data
            }
        }
    };
</script>

<style lang="scss">
    .mtn--50 {
        margin-top: -50px;
    }

    .service-card-link {
        color: inherit;
        display: block;

        &:hover {
            color: inherit;
        }
    }
</style>
