## Nuxt 4 Migration Design for kfzgutachten-karakale.de

### Objectives

- Move from Nuxt 2.17 + Vue 2.7 to Nuxt 4 + Vue 3 while:
  - Preserving current routes, SEO meta, and sitemap behavior.
  - Keeping static hosting (SSG) as the primary deployment mode.
  - Reducing JS bundle size and leveraging modern performance features (Vite, Nitro, better tree-shaking, Nuxt Image, Nuxt Scripts, and page/view transitions).
  - Treating Nuxt 4 as the direct target because Nuxt 2 is EOL and Nuxt 4 is stable.

### Target Project Structure

- Nuxt 4 app using the current default structure:
  - `app/` as the default Nuxt 4 application directory.
  - `pages/`
    - `index.vue` → current home page
    - `about.vue` → from existing `pages/about.vue`
    - `kontakt.vue` → from existing `pages/kontakt.vue`
    - `leistungen.vue` → from `pages/leistungen.vue`
    - `galerie.vue` → from `pages/galerie.vue`
    - `datenschutz.vue` → from `pages/datenschutz.vue`
    - `impressum.vue` → from `pages/impressum.vue`
  - `components/`
    - Reuse most of the existing components with Vue 3–compatible syntax.
  - `assets/`
    - SCSS from `assets/scss` carried over with minimal changes.
  - `public/`
    - Static files like favicon, robots.txt, and images (`/img/**`) moved from `static/`.

- Routing:
  - Nuxt 4 file-based routing preserves the same paths as today (`/`, `/about`, `/kontakt`, etc.) so existing links and SEO remain valid.

### Dependency Strategy

Replace Vue 2–only libraries with Vue 3–ready equivalents or lighter alternatives:

- **Bootstrap 4 CSS / legacy template CSS**:
  - Replace with:
    - Pure Bootstrap 5 CSS (import only grid and a subset of utilities), plus a few simple composition-based Vue 3 components where needed, **or**
    - A Vue 3–compatible Bootstrap integration (e.g. bootstrap-vue-next or similar, depending on your preference).
  - Aim to reduce CSS imports and rely on PurgeCSS or UnoCSS for dead CSS removal.

- **vue2-google-maps**:
  - The current Nuxt 2 app no longer uses this plugin; for Nuxt 4:
    - Prefer a **static map image** or `<iframe>` for the contact section unless you truly need interactive map controls.
    - If interaction is required, use a Vue 3 Google Maps wrapper and lazy-load it behind an interaction (e.g. “Show map” button) to avoid loading maps JS on initial paint.

- **vue-awesome-swiper (Swiper 5)**:
  - Upgrade to the current Vue 3 Swiper package or replace simple carousels with CSS/static layouts where animation is not essential.
  - Keep hero/testimonial sliders but:
    - Lazy-load non-critical sliders (e.g. testimonials) using dynamic imports and `<ClientOnly>` in Nuxt 4.
    - Disable autoplay where it doesn’t add value to cut down main-thread work.

- **vue-cookie-accept-decline**:
  - Migrate to a Vue 3–compatible cookie/consent banner or reimplement a lightweight banner using the Composition API.
  - Keep the same consent behavior around Google Tag Manager and Analytics.

- **vue-social-sharing**:
  - Replace with:
    - Simple `<a>` share links (WhatsApp, Facebook, etc.) using static URLs, or
    - A small Vue 3 social-share helper if needed.

- **Removed in Nuxt 2 and not needed in Nuxt 4**:
  - `vue2-google-maps`, `vue-masonry`, `vue-masonry-css`, `vue-silentbox`, `mixitup`, `vuejs-paginate`.
  - Do not reintroduce these unless a concrete page requires them; rely on CSS Grid + Flexbox for layout, and native `<dialog>` / simple lightbox instead of heavy plugins where possible.

### Nuxt 4 Configuration Mapping

- **App configuration**:
  - Map `nuxt.config.js` settings to `nuxt.config.ts`:
    - `target: 'static'` → use `ssr: true` and `nuxi generate` for full SSG output.
    - `head` → `app.head` in Nuxt 4:
      - Global meta (charset, viewport, default description).
      - `link` tags for favicon and canonical URL.
      - `preconnect` hints for Google Fonts kept with `display=swap` from the SCSS imports.

- **Modules**:
  - `@nuxtjs/style-resources`:
    - Replace with Nuxt 4’s `css` + `vite.css.preprocessorOptions` or global SCSS in `nuxt.config.ts` (e.g. `css: ['@/assets/scss/style.scss']` and SCSS variables via `vite` options).
  - `@nuxtjs/redirect-module`:
    - Implement redirects using Nitro route rules or server middleware if still needed.
  - `@nuxtjs/sitemap`:
    - Use a Nuxt 4–compatible sitemap module or Nitro route introspection to generate `sitemap.xml`. Keep the explicit routes and `changefreq` similar to the current configuration.

- **Build/Performance**:
  - Use Vite (default in Nuxt 4) for:
    - Faster dev HMR.
    - Better tree-shaking in production builds.
  - Use Nitro for server/edge rendering:
    - Even in static mode, Nitro optimises data fetching and payload generation.
  - Enable modern features:
    - Use `@nuxt/image` for responsive image generation and AVIF/WebP output.
    - Use Nuxt Scripts for GTM/consent-aware third-party loading.
    - Use built-in page transitions or view transitions for smoother internal navigation.
    - Lazy/delayed hydrate non-interactive sections where possible, so the browser doesn’t hydrate everything immediately.

### Component Migration Approach

- **Pages**:
  - Port each existing page component (`pages/*.vue`) to Nuxt 4 with minimal logic changes:
    - Replace `head()` with Nuxt 4’s `useHead` composable in `<script setup>` where appropriate, or keep the options API-compatible migration style briefly while porting.
    - Preserve canonical links and meta descriptions to avoid SEO regressions.

- **Shared components**:
  - Convert components gradually to Vue 3 patterns:
    - For simple components, use `<script setup>` to remove boilerplate and enable better tree-shaking.
    - Keep SCSS structure from `assets/scss/style.scss`, but incrementally remove unused partials as you confirm which templates are no longer used.

- **Routing and navigation**:
  - Keep link structure the same (`<NuxtLink>` in Nuxt 4) and maintain navigation hierarchy (header, footer, mobile menu).

### Migration Phasing

- **Phase A – Create Nuxt 4 skeleton**:
  - Scaffold a new Nuxt 4 project in a separate directory or Git worktree.
  - Configure base routes and global `app.head`.
  - Add SCSS pipeline and import `assets/scss/style.scss`.

- **Phase B – Port critical pages and components**:
  - Home page (`/`) with `HeroAgency`, `ServiceOne`, `PortfolioOne`, testimonials, brand logos, and contact section.
  - High‑value pages: `about`, `leistungen`, `kontakt`.
  - Verify styles and layout match the Nuxt 2 site closely.

- **Phase C – Replace legacy integrations**:
  - Introduce Swiper (Vue 3 version) and rewire sliders.
  - Implement consent banner and analytics tracking using Nuxt Scripts and Nuxt 4-friendly patterns.

- **Phase D – Finalise SEO and sitemap**:
  - Ensure all meta tags, canonical URLs, and sitemap routes are in place.
  - Double-check 404 and fallback behavior.

This design gives you a clear mapping from the existing Nuxt 2 static site to a Nuxt 4 application, with specific dependency replacements and configuration targets but without forcing the migration to happen before the Nuxt 2 performance pass is measured. It is ready to use as the blueprint when you start the actual port.
