<template>
    <main>
        <ImpressumBreadcrumb />

        

        <Impressum />

        

        

        

        

        

    </main>
</template>

<script setup>
useKarakaleHead({
    title: 'Impressum - Kfz Gutachten Karakale',
    description: 'Impressum des Kfz Prüfbüros Karakale. Rechtliche Angaben und Kontaktdaten.',
    path: '/impressum/',
    robots: 'noindex, follow',
    image: '/img/logo/logo_karakale.svg',
    breadcrumbs: [
        { name: 'Startseite', path: '/' },
        { name: 'Impressum', path: '/impressum/' },
    ],
});
</script>
