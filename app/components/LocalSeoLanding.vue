<template>
    <div>
        <section class="local-hero bg_color--1 pt--150 pb--110 pt_md--120 pb_md--80 pt_sm--100 pb_sm--70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="local-hero-content">
                            <p class="local-eyebrow">{{ page.eyebrow }}</p>
                            <h1 class="heading heading-h1">{{ page.h1 }}</h1>
                            <p class="bk_pra local-lead">{{ page.lead }}</p>
                            <div class="local-actions">
                                <a
                                    v-if="page.ctaExternal"
                                    :href="page.ctaHref"
                                    class="brook-btn bk-btn-theme btn-sd-size btn-rounded"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-analytics-event="generate_lead"
                                    :data-lead-method="page.ctaLeadMethod || 'contact'"
                                >
                                    {{ page.ctaLabel }}
                                </a>
                                <NuxtLink
                                    v-else
                                    :to="page.ctaHref"
                                    class="brook-btn bk-btn-theme btn-sd-size btn-rounded"
                                    data-analytics-event="generate_lead"
                                    data-lead-method="contact_page"
                                >
                                    {{ page.ctaLabel }}
                                </NuxtLink>
                                <a href="tel:022896699180" class="local-phone">0228-96699180</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt_md--40 mt_sm--40">
                        <img
                            class="local-hero-image"
                            :src="heroImage.src"
                            :srcset="heroImage.srcset"
                            sizes="(min-width: 992px) 50vw, 100vw"
                            :alt="page.imageAlt"
                            width="760"
                            height="560"
                            loading="eager"
                            decoding="async"
                            fetchpriority="high"
                        >
                    </div>
                </div>
            </div>
        </section>

        <section class="local-service-area bg_color--1 pb--110 pb_md--80 pb_sm--60">
            <div class="container">
                <article
                    v-for="section in page.sections"
                    :id="section.id"
                    :key="section.id"
                    class="local-service-block"
                >
                    <div class="row">
                        <div class="col-lg-4">
                            <h2 class="heading heading-h3">{{ section.title }}</h2>
                        </div>
                        <div class="col-lg-8">
                            <p class="bk_pra">{{ section.text }}</p>
                            <ul v-if="section.bullets" class="local-list">
                                <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <SeoFaq :items="page.faq" />

        <CallToAction />
    </div>
</template>

<script>
import CallToAction from '@/components/CallToAction';
import SeoFaq from '@/components/SeoFaq';
import { getResponsiveImage } from '@/utils/responsiveImages';

export default {
    components: {
        CallToAction,
        SeoFaq,
    },
    props: {
        page: {
            type: Object,
            required: true,
        },
    },
    computed: {
        heroImage() {
            return getResponsiveImage(this.page.image);
        },
    },
};
</script>

<style lang="scss" scoped>
.local-eyebrow {
    color: $theme-color;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 16px;
    text-transform: uppercase;
}

.local-lead {
    font-size: 20px;
    line-height: 1.7;
    margin-top: 24px;
}

.local-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 36px;
}

.local-phone {
    color: $heading-color;
    font-weight: 700;
}

.local-hero-image {
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
    height: auto;
    max-width: 100%;
    object-fit: cover;
}

.local-service-block {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 54px 0;
}

.local-service-block:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.local-list {
    margin: 24px 0 0;
    padding-left: 20px;

    li {
        color: $body-color;
        line-height: 1.8;
        margin-bottom: 8px;
    }
}
</style>
