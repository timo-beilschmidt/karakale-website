<template>
    <div class="bk-contact-area section-pb-xl bg_color--1">
        <div class="container">
            <div class="row">
                <!-- Start Address -->
                <div class="col-xl-3 col-lg-3 col-12">
                    <div class="address-inner">
                        <div class="address wow move-up">
                            <h3 class="heading">Kommen Sie zu unserer Prüfstelle</h3>
                            <p>Siemensstr. 1,<br>53121 Bonn</p>
                        </div>

                        <div class="address mt--60 mb--60 wow move-up">
                            <h3 class="heading">Oder kontaktieren Sie uns</h3>
                            <p><a href="mailto:info@ing-karakale.de">info@ing-karakale.de</a></p>
                            <p><a href="tel:022896699180">0228-96699180</a></p>
                            <p><a href="tel:015737154376">01573-7154376</a></p>
                        </div>

                        <ul class="social-icon icon-size-medium text-dark text-left tooltip-layout move-up wow">
                            <li class="facebook">
                                <a href="https://www.facebook.com/CarKarakale/" class="link hint--bounce hint--top hint--theme" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <SiteIcon name="facebook" />
                                </a>
                            </li>
                            <li class="instagram">
                                <a href="https://www.instagram.com/gutachten.karakale/" class="link hint--bounce hint--top hint--theme" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <SiteIcon name="instagram" />
                                </a>
                            </li>
                            <li class="whatsapp2">
                                <a href="https://wa.me/4915737154376" class="link hint--bounce hint--top hint--theme" aria-label="Whatsapp" target="_blank" rel="noopener noreferrer">
                                    <SiteIcon name="whatsapp" />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
                        
            <!-- <div class="my-4 google-map-essential">
                <GoogleMap />
            </div> -->
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';

    export default {
        components: {
            SiteIcon,
        },
        /* components: {
            GoogleMap: () => import('@/components/GoogleMap'),
        }, */
    };
</script>

<style lang="scss">
    /* .google-map-essential {
        .vue-map-container {
            height: 300px !important;
        }
    } */
</style>
