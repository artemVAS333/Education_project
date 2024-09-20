<script setup>
import Menu from './components/menu/Menu.vue'
</script>

<template>
    <div class="wrapper">
        <header class="header">
            <div class="header_container  user-select-none">
                <div class="logo">
                    <div class="title">ЧНУ</div>
                </div>
                <Menu /> 
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



.title {
    font-size: 28px;
    font-weight: bold;
}


</style>
