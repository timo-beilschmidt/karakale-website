<template>
        <header
            class="br_header header-default header-transparent light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"
            :class="{ 'vue-fixed-header--isFixed': isFixed }"
        >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper mr--0">
                            
                            <div class="header-left flex-20">
                                <div class="logo">
                                    <NuxtLink to="/">
                                        <img src="/img/logo/logo-white.svg" alt="Logo von Kfz Gutachten Karakale in weiß">
                                    </NuxtLink>
                                </div>
                            </div>
                            

                            
                            <div class="mainmenu-wrapper d-none d-lg-block">
                                <Navigation />
                            </div>
                            

                            
                            <div class="header-right">
                                
                                
                                
                                <div class="tuev-logo">
                                    <a
                                        href="https://www.tuev-nord.de/de/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-analytics-event="outbound_click"
                                        data-outbound-name="TÜV NORD"
                                    >
                                        <img src="/img/other/TUV_NORD_PARTNER_WEISS.svg" alt="Logo von dem Partner TÜV Nord für Hauptuntersuchungen.">
                                    </a>
                                </div>

                                
                                <div class="manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none" @click="$emit('togglenav')">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';

defineEmits(['togglenav']);

const { isFixed } = useStickyHeader();
</script>

<style lang="scss" scoped>
    .vue-fixed-header--isFixed {
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 999;
        position: fixed !important;
        background-color: rgba($black, 0.9);
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
    }

    .tuev-logo{
        a{
            img{
                max-width: 100px;
                height: auto;
                display: inline-block;
            }
        }
    }
</style>
