<template>
    <div class="flexale-image bg_color--1" :class="addClass">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-element-carousel flexable-arrow flexable-dots">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/other/ZOE_cut.webp" alt="Renault ZOE als Firmenwagen mit Logo auf der linken Seite." width="800" height="600" loading="lazy" decoding="async">
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/logo/logo_karakale.svg" alt="Das Logo von Kfz Gutachten Karakale in Farbe." width="400" height="200" loading="lazy" decoding="async">
                                    </div>
                                </div>
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';

    export default {
        components: {
            Swiper,
        },
        props: ["addClass"],
        
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    spaceBetween: 30,
                    autoplay: true,
                    effect: "fade",
                    fadeEffect: { crossFade: true },
                }
            }
        }
    };
</script>
