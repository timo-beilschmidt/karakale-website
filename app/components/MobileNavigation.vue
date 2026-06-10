<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li class="menu-item-has-children">
                    <NuxtLink to="/" @click="$emit('navigate')">Home</NuxtLink>
                </li>

                <li class="menu-item-has-children" :class="{ active: servicesOpen }">
                    <NuxtLink to="/leistungen/" @click="$emit('navigate')">Leistungen</NuxtLink>
                    <button
                        type="button"
                        class="menu-expand"
                        aria-label="Untermenü Leistungen umschalten"
                        :aria-expanded="servicesOpen ? 'true' : 'false'"
                        @click="servicesOpen = !servicesOpen"
                    >
                        <i></i>
                    </button>
                    <ul class="sub-menu">
                        <li>
                            <NuxtLink to="/kfz-gutachten-bonn/" @click="$emit('navigate')">Kfz Gutachten</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/unfallgutachten-bonn/" @click="$emit('navigate')">Unfallgutachten</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/hauptuntersuchung-tuev-bonn/" @click="$emit('navigate')">TÜV/HU</NuxtLink>
                        </li>
                    </ul>
                </li>

                <li class="menu-item-has-children">
                    <NuxtLink to="/galerie/" @click="$emit('navigate')">Galerie</NuxtLink>
                </li>

                <li class="menu-item-has-children">
                    <NuxtLink to="/about/" @click="$emit('navigate')">Über Uns</NuxtLink>
                </li>

                <li class="menu-item-has-children">
                    <NuxtLink to="/kontakt/" @click="$emit('navigate')">Kontakt</NuxtLink>
                </li>

                <li class="menu-item-has-children">
                    <NuxtLink to="/datenschutz/" @click="$emit('navigate')">Datenschutz</NuxtLink>
                </li>

                <li class="menu-item-has-children">
                    <NuxtLink to="/impressum/" @click="$emit('navigate')">Impressum</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
defineEmits(['navigate']);

const servicesOpen = ref(false);
</script>

<style lang="scss">
    .offcanvas-navigation {
        ul {
            li {
                &.menu-item-has-children {
                    &.mega--title > {
                        a {
                            font-weight: 500;
                        }
                    }
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $theme-color;
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    a {
                        color: $white;
                        font-weight: 400;
                        &:hover {
                            color: $theme-color;
                        }
                    }
                    .sub-menu {
                        li {
                            a {
                                font-size: 13px;
                                padding: 5px 0;
                            }
                        }
                    }
                }
            }
            li {
                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active > {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        border: 0;
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid #ffffff;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
