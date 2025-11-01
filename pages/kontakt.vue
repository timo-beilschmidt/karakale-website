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
            const baseUrl = 'https://kfzgutachten-karakale.de';
            const pageUrl = baseUrl + '/kontakt';
            
            return {
                title: 'Kontakt - Kfz Gutachten Karakale Bonn',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Kontaktieren Sie das Kfz Prüfbüro Karakale in Bonn. Siemensstr. 1, 53121 Bonn. Terminvereinbarung für TÜV Prüfungen und Gutachten. Tel: 0228-96699180'
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: 'Kontakt, Kfz Gutachten Bonn, TÜV Terminvereinbarung, Prüfbüro Anschrift, Karakale Kontakt'
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: 'Kontakt - Kfz Gutachten Karakale Bonn'
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'Kontaktieren Sie das Kfz Prüfbüro Karakale in Bonn. Terminvereinbarung für TÜV Prüfungen und Gutachten.'
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: pageUrl
                    },
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: 'Kontakt - Kfz Gutachten Karakale'
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: 'Kontaktieren Sie das Kfz Prüfbüro Karakale in Bonn.'
                    },
                ],
                link: [
                    { rel: 'canonical', href: pageUrl }
                ]
            }
        },
    };
</script>