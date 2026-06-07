<template>
    <div class="brook-portfolio-area">
        <div class="black-bg-wrapper bg-image-nature bg_color--1 section-pt-xl pb--240">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center wow move-up">
                            <h3 class="promise">Unser Versprechen</h3>
                            <h2>Für jedes Gutachten pflanzen wir einen Baum</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-wrapper pl--150 pr--150 pl_lg--50 pr_lg--50 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
            <div class="row row--0 space_dec--110">
                <!-- Start Single Portfolio -->
                <div class="col-lg-6">
                    <div class="portfolio portfolio_style--1">
                        <div class="thumb">
                            <img
                                src="/img/generated/unfallgutachten-810-810.webp"
                                srcset="/img/generated/unfallgutachten-810-480.webp 480w, /img/generated/unfallgutachten-810-810.webp 810w"
                                sizes="(min-width: 992px) 50vw, 100vw"
                                alt="Mercedes auf einer Rampe bei Erstellung des Gutachtens."
                                width="810"
                                height="810"
                                loading="lazy"
                                decoding="async"
                            >
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="leistungen">
                                        <p>Wir erstellen Ihr Gutachten</p>
                                        <ul>
                                            <li>persönlich</li>
                                            <li>unabhängig</li>
                                            <li>schnell</li>
                                            <li>fair</li>
                                            <li>nachhaltig</li>
                                        </ul>
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Portfolio -->

                <div class="col-lg-6">
                    <div class="row row--0">

                        <div class="col-lg-12 wow move-up">
                            <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--1">
                                <div class="thumb">
                                    <img src="/img/portfolio/bearbeitet/810_405.jpg" alt="Ein Peugeot mit starken Schäden auf der linken Seite." width="810" height="405" loading="lazy" decoding="async">
                                </div>
                                <div class="port-overlay-info">
                                    <div class="hover-action">
                                        <h3 class="post-overlay-title">
                                            <n-link to="leistungen">
                                                Aufnahme des Schadens direkt vor Ort
                                            </n-link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Portfolio -->
                        </div>

                        <div class="col-lg-6 wow move-up">
                            <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--1">
                                <div class="thumb">
                                    <img src="/img/portfolio/bearbeitet/480_1.jpg" alt="Ein Smart mit schwerem Schaden auf der rechten Seite." width="480" height="480" loading="lazy" decoding="async">
                                </div>
                                <div class="port-overlay-info">
                                    <div class="hover-action">
                                        <h3 class="post-overlay-title">
                                             <n-link to="leistungen">
                                               Wir beraten Sie im Schadensfall
                                            </n-link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Portfolio -->
                        </div>

                        <div class="col-lg-6 wow move-up">
                            <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--1">
                                <div class="thumb">
                                    <img src="/img/portfolio/bearbeitet/480_2.jpg" alt="Van mit seitlichem Schaden." width="480" height="480" loading="lazy" decoding="async">
                                </div>
                                <div class="port-overlay-info">
                                    <div class="hover-action">
                                        <h3 class="post-overlay-title">
                                            <n-link to="galerie">
                                                Kein Schaden ist zu klein
                                            </n-link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Portfolio -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss">
    .section-title h3 {
        font-size: 26px;
    }
    .bg-image-nature{
        background-image: url(/img/generated/country-road-1440.webp);
        position: relative;
        background-position-y: 100%;
        background-position-x: 40%;
        &::before{
            position: absolute;
            background: #fff;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.55;
        }
    }
</style>
