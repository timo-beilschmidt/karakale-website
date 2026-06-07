<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <ContactUsBreadcrumb />

        <ContactModern />

        <Footer />

    </div>
</template>

<script>
    import { createPageHead } from '@/utils/seo';

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ContactUsBreadcrumb: () => import('@/components/ContactUsBreadcrumb'),
            ContactModern: () => import('@/components/sections/ContactModern'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
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
