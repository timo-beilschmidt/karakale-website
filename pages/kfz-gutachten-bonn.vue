<template>
    <div class="main-container">
        <HeaderBlack @togglenav="navOpen = !navOpen" />
        <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />
        <LocalSeoLanding :page="page" />
        <Footer />
    </div>
</template>

<script>
import localSeoPages from '@/data/localSeoPages';
import { createPageHead } from '@/utils/seo';

export default {
    components: {
        HeaderBlack: () => import('@/components/HeaderBlack'),
        OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
        LocalSeoLanding: () => import('@/components/LocalSeoLanding'),
        Footer: () => import('@/components/Footer'),
    },

    data() {
        return {
            navOpen: false,
            page: localSeoPages.kfzGutachtenBonn,
        };
    },

    head() {
        return createPageHead({
            title: this.page.metaTitle,
            description: this.page.metaDescription,
            path: this.page.path,
            keywords: this.page.keywords,
            image: this.page.image,
            breadcrumbs: this.page.breadcrumbs,
            services: this.page.services,
            faq: this.page.faq,
        });
    },
};
</script>
