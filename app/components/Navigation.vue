<template>
    <nav class="page_nav">
        <ul class="mainmenu">
            <li class="lavel-1">
                <NuxtLink to="/">
                    <span>Home</span>
                </NuxtLink>
            </li>

            <li class="lavel-1 with--drop slide-dropdown">
                <NuxtLink to="/leistungen/">
                    <span>Leistungen</span>
                </NuxtLink>
                <ul class="dropdown__menu">
                    <li>
                        <NuxtLink to="/kfz-gutachten-bonn/">
                            <span>Kfz Gutachten</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/unfallgutachten-bonn/">
                            <span>Unfallgutachten</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/hauptuntersuchung-tuev-bonn/">
                            <span>TÜV/HU</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>

            <li class="lavel-1">
                <NuxtLink to="/galerie/">
                    <span>Galerie</span>
                </NuxtLink>
            </li>

            <li class="lavel-1">
                <NuxtLink to="/about/">
                    <span>Über Uns</span>
                </NuxtLink>
            </li>

            <li class="lavel-1">
                <NuxtLink to="/kontakt/">
                    <span>Kontakt</span>
                </NuxtLink>
            </li><li class="lavel-1">
                <NuxtLink to="/datenschutz/">
                    <span>Datenschutz</span>
                </NuxtLink>
            </li><li class="lavel-1">
                <NuxtLink to="/impressum/">
                    <span>Impressum</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .mega__list {
        display: flex;
        li {
            flex-basis: 25%;
        }
    }
</style>
