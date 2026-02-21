# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (hot reload at localhost:3000)
npm run dev

# Generate static site (output to dist/)
npm run generate

# Lint .js and .vue files
npm run lint

# Deploy dist/ to gh-pages branch
npm run deploy
```

Note: `dev`, `build`, and `generate` scripts require `NODE_OPTIONS=--openssl-legacy-provider` (already set in package.json) due to Node.js/webpack compatibility.

## Architecture

This is a **Nuxt 2 static site** (target: `static`) for a German automotive inspection business (Kfz Gutachten Karakale, Bonn). It generates a fully static site via `nuxt generate`.

**Pages** (`pages/`): Each `.vue` file maps to a route. Current routes: `/`, `/about`, `/leistungen`, `/galerie`, `/kontakt`, `/datenschutz`, `/impressum`. Each page defines its own `head()` with SEO meta tags (title, description, OG, Twitter Card, canonical URL) and JSON-LD structured data using `__dangerouslyDisableSanitizers: ['script']`.

**Components** (`components/`): Split into two levels:
- Top-level: reusable UI pieces — headers (`Header.vue`, `HeaderBlack.vue`, `HeaderElement.vue`, etc.), `Footer.vue`, `Navigation.vue`, hero sections, breadcrumbs, contact widgets.
- `components/sections/`: self-contained page sections (services, testimonials, counters, portfolios, blog, team) imported lazily by pages.

All components are lazy-loaded in pages with `() => import('@/component/...')`.

**Data** (`data/*.json`): Static JSON files drive content for services, blog, team, testimonials, brand logos, portfolio, etc. Components import these directly.

**Layouts** (`layouts/default.vue`): Minimal wrapper — renders `<nuxt />` and a GTM noscript iframe. `layouts/error.vue` handles 404s.

**Assets** (`assets/scss/`): Global styles in `style.scss`. SCSS variables are globally injected via `@nuxtjs/style-resources` from `assets/scss/default/_variables.scss`, making them available in all component `<style>` blocks without explicit imports.

**Static** (`static/`):
- `js/consent.js` + `js/analytics.js`: Google Consent Mode v2 + GTM/GA4 setup, loaded deferred.
- `img/`: All site images organized by category.
- `_headers`: Netlify/CDN HTTP headers configuration.
- `robots.txt`: SEO crawler directives.

**Plugins** (`plugins/`): Nuxt client-side plugin registrations (swiper, google maps, masonry, paginate, etc.). Most are registered as client-only plugins.

**Mixins** (`mixins/`): Shared Vue mixin utilities.

## Key Configuration

- **Sitemap**: Managed by `@nuxtjs/sitemap` in `nuxt.config.js`. Add new routes to the `sitemap.routes` array when adding pages.
- **PurgeCSS**: Active in production builds only. When adding new CSS classes (especially dynamic ones), add them to the `safelist` in `nuxt.config.js` to prevent purging.
- **CSS class conventions**: The template uses `brook-`, `bk_`, `heading`, `bg_color--*`, `template-color-*`, `template-font-*` prefixes — all safelisted in PurgeCSS.
- **Body classes**: Pages add template/color classes in `mounted()` via `document.body.classList.add(...)`.
- **Language**: Site content is in German (de). `htmlAttrs.lang` is set to `de`.
