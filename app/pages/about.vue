<template>
    <main>
        <AboutBreadcrumb />

        <WhatWeDo />

        

        <FlexibleSlider />

        

        <TestimonialTwo />

        <BrandLogoStyleOne />

        <CallToAction />

    </main>
</template>

<script setup>
useKarakaleHead({
    title: 'Über uns - Kfz Gutachten Karakale Bonn',
    description: 'Erfahren Sie mehr über das Kfz Prüfbüro Karakale in Bonn: Erfahrung, Sachverständigenkompetenz, Hauptuntersuchungen und Gutachten als Partner der TÜV NORD.',
    path: '/about/',
    keywords: 'Kfz Prüfbüro Bonn, Kfz Gutachten Team Bonn, TÜV Partner Bonn, Prüfbüro Karakale',
    image: '/img/other/ZOE_cut.webp',
    breadcrumbs: [
        { name: 'Startseite', path: '/' },
        { name: 'Über uns', path: '/about/' },
    ],
});
</script>
