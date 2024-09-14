<template>
    <div class="wrapper">
        <header class="header">
            <div class="header_container  user-select-none">
                <div class="logo">
                    <div class="title">ЧНУ</div>
                </div>
                <div class="menu">
                    <div class=" menu-item">
                        <RouterLink :to="{ name: 'home' }">Головна</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink :to="{ name: 'about' }">Про нас</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink :to="{ name: 'contacts' }">Контакти</RouterLink>
                    </div>
                    <div class=" menu-item">
                        <RouterLink :to="{ name: 'schedule' }">Розклад</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink :to="{ name: 'notFound' }"> 404 </RouterLink>
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
</style>