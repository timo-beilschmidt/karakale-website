<template>
    <main>
        <LocalSeoLanding :page="page" />
    </main>
</template>

<script>
import localSeoPages from '@/data/localSeoPages';
import { createPageHead } from '@/utils/seo';

export default {
    components: {
        LocalSeoLanding: () => import('@/components/LocalSeoLanding'),
    },

    data() {
        return {
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
