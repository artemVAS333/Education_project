<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <!-- <header class="header">
        <div class="title">ЧНУ</div>
        <div class="menu">
            <div class="menu-item">
                <a href="/#">Головна</a>
            </div>
            <div class="menu-item">
                <a href="/#/about">Про нас</a>
            </div>
            <div class="menu-item">
                <a href="/#/contacts">Контакти</a>
            </div>
            <div class="menu-item">
                <a href="/#/schedule">Розклад</a>
            </div>
        </div>
    </header> -->

    <header class="header">
        <div class="title">ЧНУ</div>
        <div class="menu">
            <div class="menu-item">
                <RouterLink to="/#">Головна</RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink to="/about">Про нас</RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink to="/contacts">Контакти</RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink to="/schedule">Розклад</RouterLink>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import url('./main.scss');
</style>