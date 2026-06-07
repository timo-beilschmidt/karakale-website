# External SEO, GTM, and GA4 Configuration Checklist

This file covers the configuration work that happens outside the codebase after the latest site build is deployed.

Site: `https://kfzgutachten-karakale.de/`  
GTM container: `GTM-WB4L3K8`  
Analytics source of truth: Google Tag Manager  
GA4 Measurement ID: `G-XXXXXXXXXX`

Replace `G-XXXXXXXXXX` with the real GA4 web stream measurement ID.

## 1. Deploy And Smoke Test

- [ ] Deploy the latest `main` branch build.
- [ ] Confirm the deployed site serves the updated static output.
- [ ] Open `https://kfzgutachten-karakale.de/robots.txt`.
- [ ] Confirm `Allow: /_nuxt/` is present.
- [ ] Open `https://kfzgutachten-karakale.de/sitemap.xml`.
- [ ] Confirm URLs use trailing slashes.
- [ ] Confirm `/datenschutz/` and `/impressum/` are not in the sitemap.
- [ ] Open the key pages and confirm they load without layout shifts:
  - `https://kfzgutachten-karakale.de/`
  - `https://kfzgutachten-karakale.de/leistungen/`
  - `https://kfzgutachten-karakale.de/kfz-gutachten-bonn/`
  - `https://kfzgutachten-karakale.de/unfallgutachten-bonn/`
  - `https://kfzgutachten-karakale.de/hauptuntersuchung-tuev-bonn/`

## 2. GTM Container Setup

Open Google Tag Manager and select container `GTM-WB4L3K8`.

### Variables

Create one constant variable:

| Variable name | Type | Value |
| --- | --- | --- |
| `GA4 Measurement ID` | Constant | `G-XXXXXXXXXX` |

Create these Data Layer Variables. Keep the names exactly as shown.

| Variable name | Data layer variable name |
| --- | --- |
| `DLV - page_path` | `page_path` |
| `DLV - page_location` | `page_location` |
| `DLV - page_title` | `page_title` |
| `DLV - link_url` | `link_url` |
| `DLV - link_text` | `link_text` |
| `DLV - lead_method` | `lead_method` |
| `DLV - service_name` | `service_name` |
| `DLV - outbound_name` | `outbound_name` |

Enable useful built-in variables:

- [ ] Click URL
- [ ] Click Text
- [ ] Page URL
- [ ] Page Path
- [ ] Event

### Triggers

Create these Custom Event triggers:

| Trigger name | Event name |
| --- | --- |
| `CE - page_view` | `page_view` |
| `CE - generate_lead` | `generate_lead` |
| `CE - select_service` | `select_service` |
| `CE - outbound_click` | `outbound_click` |

### Google Tag

Create one Google tag for GA4:

- Tag type: Google tag
- Tag ID: `{{GA4 Measurement ID}}`
- Trigger: Initialization - All Pages
- Consent: require `analytics_storage`
- Automatic page view: disabled, if this setting is available
- Config parameter fallback: set `send_page_view` to `false` if the tag UI exposes configuration parameters

The site already sends `page_view` through `dataLayer`, so automatic GA4 page views must be disabled to avoid duplicates.

### GA4 Event Tags

Create one GA4 Event tag per site event.

#### `page_view`

- Tag type: GA4 Event or Google Analytics: GA4 Event
- Measurement ID or configuration tag: `{{GA4 Measurement ID}}`
- Event name: `page_view`
- Trigger: `CE - page_view`
- Event parameters:
  - `page_path`: `{{DLV - page_path}}`
  - `page_location`: `{{DLV - page_location}}`
  - `page_title`: `{{DLV - page_title}}`
- Consent: require `analytics_storage`

#### `generate_lead`

- Event name: `generate_lead`
- Trigger: `CE - generate_lead`
- Event parameters:
  - `lead_method`: `{{DLV - lead_method}}`
  - `link_url`: `{{DLV - link_url}}`
  - `link_text`: `{{DLV - link_text}}`
- Consent: require `analytics_storage`

Expected `lead_method` values:

- `phone`
- `email`
- `whatsapp`
- `appointment`
- `contact_page`

#### `select_service`

- Event name: `select_service`
- Trigger: `CE - select_service`
- Event parameters:
  - `service_name`: `{{DLV - service_name}}`
  - `link_url`: `{{DLV - link_url}}`
  - `link_text`: `{{DLV - link_text}}`
- Consent: require `analytics_storage`

#### `outbound_click`

- Event name: `outbound_click`
- Trigger: `CE - outbound_click`
- Event parameters:
  - `outbound_name`: `{{DLV - outbound_name}}`
  - `link_url`: `{{DLV - link_url}}`
  - `link_text`: `{{DLV - link_text}}`
- Consent: require `analytics_storage`

Expected outbound targets include:

- TUEV NORD
- Instagram
- Facebook
- WhatsApp

## 3. Consent Mode Checks

The site sets Consent Mode v2 defaults before GTM loads:

- `ad_storage`: `denied`
- `analytics_storage`: `denied`
- `ad_user_data`: `denied`
- `ad_personalization`: `denied`

After accepting cookies, the site updates consent to `granted`.

In GTM:

- [ ] Enable Consent Overview.
- [ ] Confirm GA4 tags require `analytics_storage`.
- [ ] If Google Ads tags are added, require:
  - `ad_storage`
  - `ad_user_data`
  - `ad_personalization`
- [ ] Do not add Google Ads tags unless the business is actively using Ads.
- [ ] If Google Ads tags are enabled, make sure Datenschutz still accurately names them.

### Manual Consent Test

Use a fresh browser profile or clear the stored consent value:

- Local storage key: `vue-cookie-accept-decline-myCookiePanel`

Test decline:

- [ ] Open Tag Assistant Preview.
- [ ] Load the site.
- [ ] Click `Ablehnen`.
- [ ] Confirm consent remains denied for analytics and ads storage.
- [ ] Confirm GA4 tags do not send normal analytics hits before consent.

Test accept:

- [ ] Clear the consent key again.
- [ ] Reload the site.
- [ ] Click `Akzeptieren`.
- [ ] Confirm consent updates to granted.
- [ ] Confirm GA4 event tags fire after consent.

## 4. GA4 Admin Setup

In GA4 Admin for the correct property and web stream:

- [ ] Confirm the web stream URL is `https://kfzgutachten-karakale.de/`.
- [ ] Confirm Measurement ID matches the GTM variable.
- [ ] Use Realtime to confirm page views after consent.
- [ ] Use DebugView with GTM Preview to confirm:
  - `page_view`
  - `generate_lead`
  - `select_service`
  - `outbound_click`
- [ ] Mark `generate_lead` as a key event.

Recommended custom dimensions:

| Dimension name | Scope | Event parameter |
| --- | --- | --- |
| `Lead method` | Event | `lead_method` |
| `Service name` | Event | `service_name` |
| `Outbound name` | Event | `outbound_name` |
| `Link URL` | Event | `link_url` |

Optional:

- [ ] Exclude internal office traffic if reliable IP ranges are available.
- [ ] Create an exploration report for lead events by page path and lead method.

## 5. Google Search Console

In Google Search Console:

- [ ] Use the Domain property if available; otherwise use the URL-prefix property for `https://kfzgutachten-karakale.de/`.
- [ ] Submit `https://kfzgutachten-karakale.de/sitemap.xml`.
- [ ] Inspect and request indexing for:
  - `https://kfzgutachten-karakale.de/`
  - `https://kfzgutachten-karakale.de/leistungen/`
  - `https://kfzgutachten-karakale.de/kfz-gutachten-bonn/`
  - `https://kfzgutachten-karakale.de/unfallgutachten-bonn/`
  - `https://kfzgutachten-karakale.de/hauptuntersuchung-tuev-bonn/`
- [ ] Check Page indexing after Google recrawls.
- [ ] Check Core Web Vitals after enough field data is available.
- [ ] Check Enhancements for structured data warnings.

## 6. Structured Data Validation

Run Google Rich Results Test for:

- [ ] Home page
- [ ] Leistungen page
- [ ] Kfz Gutachten Bonn landing page
- [ ] Unfallgutachten Bonn landing page
- [ ] Hauptuntersuchung TUEV Bonn landing page

Expected structured data:

- `LocalBusiness` / `ProfessionalService`
- `WebSite`
- `WebPage`
- `BreadcrumbList`
- `FAQPage` only where visible FAQs exist

Fix any errors before requesting indexing in Search Console.

## 7. PageSpeed And Lighthouse Validation

Run PageSpeed Insights or Lighthouse mobile after deployment.

Pages to test:

- `https://kfzgutachten-karakale.de/`
- `https://kfzgutachten-karakale.de/leistungen/`
- `https://kfzgutachten-karakale.de/kfz-gutachten-bonn/`
- `https://kfzgutachten-karakale.de/hauptuntersuchung-tuev-bonn/`

Targets:

- Home Performance: `80+`
- Local landing page Performance: `85+`
- SEO: `95+`
- No new CLS regression

Checks in browser DevTools:

- [ ] LCP image uses `/img/generated/...webp`.
- [ ] No `gtag.js?id=GTM-WB4L3K8` request exists.
- [ ] `gtm.js?id=GTM-WB4L3K8` loads once.
- [ ] No Font Awesome, Ionicons, or Linea font files are loaded.
- [ ] CSS and JS are served compressed by the host.
- [ ] Long cache headers are set for hashed `/_nuxt/` assets.

## 8. Google Business Profile And Local SEO

For Bonn rankings, also verify the local business profile outside the website:

- [ ] Business name matches the site NAP.
- [ ] Address matches: `Siemensstr. 1, 53121 Bonn`.
- [ ] Phone matches: `+49 228 96699180`.
- [ ] Website URL points to the main site.
- [ ] Services mention Kfz Gutachten, Unfallgutachten, Hauptuntersuchung, HU, TUEV, Oldtimer Gutachten, and Wertgutachten.
- [ ] Opening hours match the website and schema.
- [ ] Add recent real photos of the location, team, inspection area, and vehicle checks.
- [ ] Ask satisfied customers for Google reviews in a compliant, non-incentivized way.

## 9. Publish And Record

After testing in GTM Preview:

- [ ] Submit and publish the GTM container.
- [ ] Version name: `GA4 events and consent mode setup`
- [ ] Version notes:
  - Added GA4 Google tag.
  - Added GA4 events for `page_view`, `generate_lead`, `select_service`, and `outbound_click`.
  - Kept Consent Mode v2 defaults and consent-gated analytics.
  - Marked `generate_lead` as the primary GA4 key event.
- [ ] Record the GTM version number here: `_____`
- [ ] Record the GA4 property name here: `_____`
- [ ] Record the GA4 measurement ID here: `_____`
- [ ] Record Search Console sitemap submission date here: `_____`
