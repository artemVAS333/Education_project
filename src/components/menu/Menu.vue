<script setup>
	import { onMounted } from 'vue'

	import router from '../router/router'
	import { open, toggleMenu } from './script'

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
				<nav
					class="header_menu"
					:class="{
						active: open,
					}">
					<ul class="header_menu_list">
						<li
							class="menu_list_item"
							v-for="route in router.options.routes.filter((route) => route.showInMenu)"
							:key="route.showInMenu"
							@click="toggleMenu()">
							<RouterLink
								:to="route.path"
								class="menu-item"
								:class="{
									active: route.path === router.currentRoute.value.path,
								}">
								{{ route.label }}
							</RouterLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import url('./style.scss');
</style>
