<script setup>
	import Mon from './week/Mon.vue'
	import Tue from './week/Tue.vue'
	import Wed from './week/Wed.vue'
	import Thu from './week/Thu.vue'
	import Fri from './week/Fri.vue'
	import Sat from './week/Sat.vue'
	import Sun from './week/Sun.vue'

	import { freeItems, currentDay } from './main'

	import { onMounted } from 'vue'
	onMounted(() => {
		freeItems()
		currentDay()
	})
</script>

<template>
	<div class="schedule">
		<div class="week1">
			<Sun />
			<Mon />
			<Tue />
			<Wed />
			<Thu />
			<Fri />
			<Sat />
		</div>
	</div>
</template>
