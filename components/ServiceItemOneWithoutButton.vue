<template>
    <div class="service service--1 text-center mt--30">
        <div class="icons">
            <SiteIcon :name="service.icon" />
        </div>
        <div class="content">
            <h4>{{ service.heading }}</h4>
            <p>{{ service.desc }}</p>
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';

    export default {
        components: {
            SiteIcon,
        },
        props: ['service']
    };
</script>
