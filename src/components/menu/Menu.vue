<script setup>
import { openMenu } from './script';
import router from '../router/router';
</script>

<template>
    <div class="header_menu_container">
        <div class="header_menu_interface">
            <div class="logo">
                <span class="title">
                    <RouterLink :to="{ name: 'home' }">ЧНУ</RouterLink>
                </span>
            </div>
            <div class="header_burger" @click="openMenu">
                <span></span>
            </div>
        </div>
        <nav class="header_menu">
            <ul class="header_menu_list">
                <li class="menu_list_item" v-for="i in router.name">
                    {{ router[i] }}
                </li>
                <!-- <li class="menu_list_item">
                    <RouterLink :to="{ name: 'home' }" class="menu-item">
                        Головна
                    </RouterLink>
                </li>
                <li class=" menu_list_item">
                    <RouterLink :to="{ name: 'about' }" class="menu-item">
                        Про нас
                    </RouterLink>
                </li>
                <li class="menu_list_item">
                    <RouterLink :to="{ name: 'contacts' }" class="menu-item">
                        Контакти
                    </RouterLink>
                </li>
                <li class="menu_list_item">
                    <RouterLink :to="{ name: 'schedule' }" class="menu-item">
                        Розклад
                    </RouterLink>
                </li>
                <li class="menu_list_item">
                    <RouterLink :to="{ name: 'notFound' }" @click="openMenu" class="menu-item">
                        404
                    </RouterLink>
                </li> -->
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
@import url('./style.scss');
</style>