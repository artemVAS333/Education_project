<script setup>
	import router from '../router/router'
	import { open, toggleMenu } from './script'
</script>

<template>
	<div class="header_menu_container">
		<div class="header_menu_interface">
			<div class="logo">
				<span class="title">
					<RouterLink
						:to="router.options.routes[0].path"
						@click="open = false">
						ЧНУ
					</RouterLink>
				</span>
			</div>
			<div
				class="header_burger"
				@click="toggleMenu"
				:class="{ active: open }">
				<span></span>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import url('./style.scss');
</style>
