<script setup>
import { openMenu } from './script';
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
                <li class="menu_list_item">
                    <RouterLink :to="{ name: 'home' }" @click="openMenu" class="menu-item">
                        Головна
                    </RouterLink>
                </li>
                <li class="menu_list_item">                
                    <RouterLink :to="{ name: 'about' }" @click="openMenu" class="menu-item">
                        Про нас
                    </RouterLink>
                </li>        
                <li class="menu_list_item">
                    <RouterLink :to="{ name: 'contacts' }" @click="openMenu" class="menu-item">
                        Контакти
                    </RouterLink>
                </li>
            <li class="menu_list_item">
                    <RouterLink :to="{ name: 'schedule' }" @click="openMenu" class="menu-item">
                        Розклад
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
@import url('./style.scss');
</style>