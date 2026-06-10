<template>
    <main>
        <LocalSeoLanding :page="page" />
    </main>
</template>

<script setup>
import localSeoPages from '@/data/localSeoPages';

const page = localSeoPages.unfallgutachtenBonn;

useKarakaleHead({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: page.keywords,
    image: page.image,
    breadcrumbs: page.breadcrumbs,
    services: page.services,
    faq: page.faq,
});
</script>
