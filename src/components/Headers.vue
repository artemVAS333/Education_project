<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="header_container">
            <div class="title">ЧНУ</div>
            <div class="menu">
                <div class="menu-item">
                    <RouterLink to="/Education/#">Головна</RouterLink>
                </div>
                <div class="menu-item">
                    <RouterLink to="/Education/about">Про нас</RouterLink>
                </div>
                <div class="menu-item">
                    <RouterLink to="/Education/contacts">Контакти</RouterLink>
                </div>
                <div class="menu-item">
                    <RouterLink to="/Education/schedule">Розклад</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import url('./main.scss');
</style>