<script setup>
</script>

<template>
    <div class="logo">
        <span class="title">
            <RouterLink :to="{ name: 'home' }">ЧНУ</RouterLink>
        </span>
    </div>
    <nav class="header_menu">
        <ul class="header_menu_list">
            <li class="menu_list_item">
                <RouterLink :to="{ name: 'home' }" class="menu-item">
                    Головна
                </RouterLink>
            </li>
            <li class="menu_list_item">                
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
        </ul>
    </nav>
</template>

<style lang="scss">
@import url('./style.scss');
</style>