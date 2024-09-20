<script setup>
</script>

<template>
    <div class="menu">
        <RouterLink :to="{ name: 'home' }">
            <div class=" menu-item">Головна</div>
        </RouterLink>
        <RouterLink :to="{ name: 'about' }">
            <div class="menu-item">
                Про нас
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'contacts' }">
            <div class="menu-item">
                Контакти
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'schedule' }">
            <div class=" menu-item">
                Розклад
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss">
@import url('./style.scss');
</style>