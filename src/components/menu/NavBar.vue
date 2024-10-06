<script setup>
	import router from '../router/router';
	import { open, toggleMenu } from './script';
</script>

<template>
	<nav
		class="header_menu"
		:class="{
			active: open,
		}">
		<ul class="header_menu_list">
			<li
				class="menu_list_item"
				v-for="route in router.options.routes.filter(
					(route) => route.showInMenu
				)"
				:key="route.showInMenu">
				<RouterLink
					:to="route.path"
					class="menu-item"
					:class="{
						active: route.path === router.currentRoute.value.path,
					}"
					@click="toggleMenu">
					{{ route.label }}
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>
