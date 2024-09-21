<script setup>

const openMenu = () => {
    const menu = document.querySelector('.header_menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }

    const burger = document.querySelector('.header_burger');
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
    } else {
        burger.classList.add('active');
    }
    
    const body = document.querySelector('body');
    if (body.classList.contains('lock_scroll')) {
        body.classList.remove('lock_scroll');
    } else {
        body.classList.add('lock_scroll');
    }
}
</script>

<template>
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
</template>

<style lang="scss">
@import url('./style.scss');
</style>