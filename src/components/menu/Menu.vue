<script setup>
import { ref } from 'vue';
import router from '../router/router';

const open = ref(false);
const body = document.querySelector('body');

const openMenu = () => {
    open.value = !open.value;
    body.classList.toggle('lock');
}
</script>

<template>
    <div class="header_menu_container">
        <div class="header_menu_interface">
            <div class="logo">
                <span class="title">
                    <RouterLink :to="router.options.routes[0].path" @click="open = false">ЧНУ</RouterLink>
                </span>
            </div>
            <div class="header_burger" @click="openMenu" :class="{ active: open }">
                <span></span>
            </div>
        </div>
    </div>
    <nav class="header_menu" :class="{ active: open }">
        <ul class="header_menu_list">
            <li class="menu_list_item" v-for="route in router.options.routes.filter(route => route.showInMenu)"
                :key="route.showInMenu">
                <RouterLink :to="route.path" class="menu-item"
                    :class="{ 'active': route.path === router.currentRoute.value.path }" @click="openMenu">
                    {{ route.label }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import url('./style.scss');
</style>