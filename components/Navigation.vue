<template>
    <nav class="page_nav">
        <ul class="mainmenu">
            <li class="lavel-1">
                <n-link to="/">
                    <span>Home</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/leistungen/">
                    <span>Leistungen</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/galerie/">
                    <span>Galerie</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/about/">
                    <span>Über Uns</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/kontakt/">
                    <span>Kontakt</span>
                </n-link>
            </li><li class="lavel-1">
                <n-link to="/datenschutz/">
                    <span>Datenschutz</span>
                </n-link>
            </li><li class="lavel-1">
                <n-link to="/impressum/">
                    <span>Impressum</span>
                </n-link>
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
