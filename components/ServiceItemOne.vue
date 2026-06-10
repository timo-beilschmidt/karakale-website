<template>
    <div class="service service--1 text-center mt--30">
        <div class="icons">
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
            <h4>{{ service.heading }}</h4>
            <p v-html="service.desc"></p>
            <n-link
                :to="getLink(service)"
                class="service-btn"
                data-analytics-event="select_service"
                :data-service-name="service.heading"
            >
                <span>Weitere Details</span> 
                <SiteIcon name="arrow-right" />
            </n-link>
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';

    export default {
        components: {
            SiteIcon,
        },
        props: ['service'],
        methods: {
            getLink(service) {
                return service.link || "/leistungen/";
            },
        },
    };
</script>
