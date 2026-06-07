<template>
    <section class="seo-faq-area bg_color--5 ptb--100 ptb-md--80 ptb-sm--60">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="brook-section-title text-center mb--50">
                        <h2 class="heading heading-h2">Häufige Fragen</h2>
                    </div>
                    <div class="seo-faq-list">
                        <article
                            v-for="item in items"
                            :key="item.question"
                            class="seo-faq-item"
                        >
                            <h3 class="heading heading-h4">{{ item.question }}</h3>
                            <p class="bk_pra">{{ item.answer }}</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.seo-faq-list {
    display: grid;
    gap: 26px;
}

.seo-faq-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 24px;
}

.seo-faq-item:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}
</style>
