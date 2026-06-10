<template>
    <div class="popup-mobile-menu popup-mobile-visiable">
        <div class="mobile-menu-overlay" @click="$emit('togglenav')"></div>
        <div class="inner">
            <div class="mobileheader">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="/img/logo/logo-black.svg" alt="Logo von Kfz Gutachten Karakale in dunkel." loading="lazy">
                    </NuxtLink>
                </div>
                <button class="mobile-close" @click="$emit('togglenav')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation @navigate="$emit('togglenav')" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['togglenav']);
</script>
