<template>
    <main>
        <ContactUsBreadcrumb />

        <ContactModern />

    </main>
</template>

<script>
    import { createPageHead } from '@/utils/seo';

    export default {
        components: {
            ContactUsBreadcrumb: () => import('@/components/ContactUsBreadcrumb'),
            ContactModern: () => import('@/components/sections/ContactModern'),
        },

        head() {
            return createPageHead({
                title: 'Kontakt - Kfz Gutachten Karakale Bonn',
                description: 'Kontaktieren Sie das Kfz Prüfbüro Karakale in Bonn. Siemensstr. 1, 53121 Bonn. Terminvereinbarung für TÜV Prüfungen und Gutachten: 0228-96699180.',
                path: '/kontakt/',
                keywords: 'Kontakt Kfz Gutachten Bonn, TÜV Terminvereinbarung Bonn, Prüfbüro Bonn, Karakale Kontakt',
                image: '/img/other/Pruefer_unter_Auto_scaled.webp',
                breadcrumbs: [
                    { name: 'Startseite', path: '/' },
                    { name: 'Kontakt', path: '/kontakt/' },
                ],
            });
        },
    };
</script>
