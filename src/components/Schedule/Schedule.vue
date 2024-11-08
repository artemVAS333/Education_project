<script setup>
	import data from './data.json'
	import { freeItems, currentDay } from './main'

	import { onMounted } from 'vue'
	onMounted(() => {
		freeItems()
		currentDay()
	})
</script>

<template>
	<div class="schedule">
		<div v-for="day in data.days" class="day">
			<div class="title">
				{{ day.day }}
			</div>
			<div class="subjects_of_day">
				<div v-for="subject in day.subjects" class="subject_info">
					<div class="time">{{ subject.pair }}</div>
					<div class="subject">{{ subject.subject }}</div>
					<div class="teacher">{{ subject.teacher }}</div>
					<div class="cabinet">{{ subject.cabinet }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import url('./style.scss');
</style>
