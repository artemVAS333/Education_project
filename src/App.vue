<script setup>
</script>

<template>
    <div class="wrapper">
        <header class="header">
            <div class="header_container  user-select-none">
                <div class="logo">
                    <div class="title">ЧНУ</div>
                </div>
                <div class="menu">
                    <div class=" menu-item">
                        <RouterLink to="/Education/#">Головна</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink to="/Education/about">Про нас</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink to="/Education/contacts">Контакти</RouterLink>
                    </div>
                    <div class=" menu-item">
                        <RouterLink to="/Education/schedule">Розклад</RouterLink>
                    </div>
                </div>
            </div>
        </header>

        <main class="main">
            <div class="main_container">
                <RouterView />
            </div>
        </main>

        <footer class="footer">
            Сайт у розробці
        </footer>
    </div>
</template>

<style>
@import url('./style.scss');

.wrapper {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;
}
</style>