<template>
  <div class="main-container">
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5GGHFT2"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      />
    </noscript>
    <component
      :is="headerComponent"
      @togglenav="toggleNav"
    />
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="toggleNav"
    />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import HeaderAbout from '@/components/HeaderAbout.vue';
import HeaderBlack from '@/components/HeaderBlack.vue';
import HeaderElement from '@/components/HeaderElement.vue';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const navOpen = ref(false);

const headerComponent = computed(() => {
  if (route.path === '/about/') {
    return HeaderAbout;
  }

  if (route.path === '/leistungen/' || route.path === '/kontakt/') {
    return HeaderElement;
  }

  return HeaderBlack;
});

watch(
  () => route.path,
  () => {
    navOpen.value = false;
  },
);

useHead(() => ({
  bodyAttrs: {
    class: `template-color-1 ${route.path === '/' ? 'template-font-2' : 'template-font-1'}`,
  },
}));

function toggleNav() {
  navOpen.value = !navOpen.value;
}
</script>
