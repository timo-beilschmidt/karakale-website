<template>
    <div class="flexale-image bg_color--1" :class="addClass">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="flexable-static-grid">
                        <div class="thumb">
                            <img src="/img/other/ZOE_cut.webp" alt="Renault ZOE als Firmenwagen mit Logo auf der linken Seite." width="800" height="600" loading="lazy" decoding="async">
                        </div>

                        <div class="thumb flexable-logo-tile">
                            <img src="/img/logo/logo_karakale.svg" alt="Das Logo von Kfz Gutachten Karakale in Farbe." width="400" height="200" loading="lazy" decoding="async">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            addClass: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style lang="scss" scoped>
.flexable-static-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);

    @media #{$sm-layout} {
        grid-template-columns: 1fr;
    }
}

.thumb {
    align-items: center;
    background: #fff;
    display: flex;
    justify-content: center;
    min-height: 260px;

    img {
        height: auto;
        max-width: 100%;
    }
}

.flexable-logo-tile {
    padding: 40px;
}
</style>
