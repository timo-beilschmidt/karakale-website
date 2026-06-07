<template>
    <div class="brook-search-popup">
        <div class="search-overlay" @click="$emit('toggleSearch')"></div>
        <div class="inner">
            <div class="search-header">
                <div class="logo">
                    <n-link to="/">
                        <img src="/img/logo/logo-black.png" alt="Logo von Kfz Gutachten Karakale in dunkel." loading="lazy">
                    </n-link>
                </div>
                <button class="search-close" @click="$emit('toggleSearch')"></button>
            </div>
            <div class="search-content">
                <form>
                    <label>
                        <input type="search" placeholder="Enter search keyword…">
                    </label>
                    <button class="search-submit"><SiteIcon name="search" /></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import SiteIcon from '@/components/SiteIcon';

    export default {
        components: {
            SiteIcon,
        },
    };
</script>
