<script setup>
	import { RouterView } from 'vue-router'
	import Menu from './components/menu/Menu.vue'
</script>

<template>
	<div class="wrapper">
		<header class="header">
			<div class="header_container user-select-none">
				<Menu />
			</div>
		</header>
		<main class="main">
			<div class="main_container">
				<router-view v-slot="{ Component, route }">
					<transition :name="route.meta.transition || 'fade'" mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</div>
		</main>
		<footer class="footer">Сайт у розробці</footer>
	</div>
</template>

<style lang="scss">
	@import url('./style.scss');

	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateY(-20px);
	}

	.slide-fade-enter-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.1s ease-in;
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		opacity: 0;
	}
</style>
