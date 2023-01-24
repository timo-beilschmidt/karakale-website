<template>
    <div>
        <noscript v-html="iFrameCode" />
        <nuxt />
    </div>
</template>

<script>
    export default {
    data() {
        return {
            iFrameCode: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GGHFT2" height="0" width="0" style="display: none; visibility: hidden" />',
        }
    },
    }
</script>

<style>

</style>
