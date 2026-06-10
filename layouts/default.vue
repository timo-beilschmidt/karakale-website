<template>
  <div class="main-container">
    <noscript v-html="iFrameCode" />
    <component
      :is="headerComponent"
      @togglenav="toggleNav"
      @toggleSearch="toggleSearch"
    />
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="toggleNav"
    />
    <SearchPopup
      :class="{ 'search-popup-open': searchOpen }"
      @toggleSearch="toggleSearch"
    />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
const BODY_CLASSES = [
  'template-color-1',
  'template-font-1',
  'template-font-2',
];

export default {
  components: {
    HeaderBlack: () => import('@/components/HeaderBlack'),
    HeaderAbout: () => import('@/components/HeaderAbout'),
    HeaderElement: () => import('@/components/HeaderElement'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    SearchPopup: () => import('@/components/SearchPopup'),
    Footer: () => import('@/components/Footer'),
  },

  data() {
    return {
      iFrameCode:
        '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GGHFT2" height="0" width="0" style="display: none; visibility: hidden"></iframe>',
      navOpen: false,
      searchOpen: false,
    };
  },

  computed: {
    headerComponent() {
      const path = this.$route.path;

      if (path === '/about/') {
        return 'HeaderAbout';
      }

      if (path === '/leistungen/' || path === '/kontakt/') {
        return 'HeaderElement';
      }

      return 'HeaderBlack';
    },
  },

  watch: {
    '$route.path'() {
      this.navOpen = false;
      this.searchOpen = false;
      this.applyBodyClasses();
    },
  },

  mounted() {
    this.applyBodyClasses();
  },

  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },

    toggleSearch() {
      this.searchOpen = !this.searchOpen;
    },

    applyBodyClasses() {
      if (typeof document === 'undefined') {
        return;
      }

      document.body.classList.remove(...BODY_CLASSES);
      document.body.classList.add('template-color-1');
      document.body.classList.add(this.$route.path === '/' ? 'template-font-2' : 'template-font-1');
    },
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }

  .page-enter,
  .page-leave-to {
    transform: none;
  }
}
</style>
