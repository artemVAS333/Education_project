<script setup>
import Menu from './Menu.vue';
</script>

<template>
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