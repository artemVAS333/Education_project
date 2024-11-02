<script setup>
	import { onMounted } from 'vue'
	import router from '../router/router'

	import { open, toggleMenu } from './script'
	import NavBar from './NavBar.vue'

	onMounted(() => {
		document.body.addEventListener('click', (e) => {
			if (open.value && !e.target.closest('.header_block_menu')) toggleMenu()
		})
	})
</script>
<template>
	<div v-if="open" class="header_menu_overlay"></div>

	<div class="header_menu_container">
		<div class="header_menu_interface">
			<div class="logo">
				<span class="title">
					<RouterLink :to="router.options.routes[0].path" @click="open = false">
						ЧНУ
					</RouterLink>
				</span>
			</div>
			<div class="header_block_menu">
				<div class="header_burger" @click="toggleMenu" :class="{ active: open }">
					<span></span>
				</div>
				<NavBar />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import url('./style.scss');
</style>
