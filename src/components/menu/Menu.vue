<script setup>
</script>

<template>
    <div class="menu">
        <RouterLink :to="{ name: 'home' }">
            <div class=" menu-item">Головна</div>
        </RouterLink>
        <div class="menu-item">
            <RouterLink :to="{ name: 'about' }">Про нас</RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink :to="{ name: 'contacts' }">Контакти</RouterLink>
        </div>
        <div class=" menu-item">
            <RouterLink :to="{ name: 'schedule' }">Розклад</RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
@import url('./style.scss');
</style>