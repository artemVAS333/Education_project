<script setup>
import Menu from './components/menu/Menu.vue'
import NavBar from './components/menu/NavBar.vue'
</script>

<template>
	<div class="wrapper">
		<header class="header">
			<div class="header_container user-select-none">
				<Menu />
				<NavBar />
			</div>
		</header>
		<main class="main">
			<div class="main_container">
				<RouterView />
			</div>
		</main>
		<footer class="footer">Сайт у розробці</footer>
	</div>
</template>

<style>
@import url('./style.scss');
</style>
