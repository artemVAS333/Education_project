<script setup>
	import { timetable } from '../main';
</script>

<template>
	<div class="day">
		<div class="title">Вівторок</div>
		<div class="shedule_day">
			<div class="subjects_of_day">
				<div class="subject_info">
					<div class="time">{{ timetable.pair1 }}</div>
					<div class="subject"></div>
					<div class="teacher"></div>
					<div class="cabinet"></div>
				</div>
				<div class="subject_info">
					<div class="time">{{ timetable.pair2 }}</div>
					<div class="subject">Теоретичні основи кібернетики</div>
					<div class="teacher">Дрінь Я.М.</div>
					<div class="cabinet">9-2</div>
				</div>
				<div class="subject_info">
					<div class="time">{{ timetable.pair3 }}</div>
					<div class="subject">Архітектура комп'ютерів</div>
					<div class="teacher">Стецько Ю.П.</div>
					<div class="cabinet">8-106</div>
				</div>
				<div class="subject_info">
					<div class="time">{{ timetable.pair4 }}</div>
					<div class="subject">
						Українська мова (за професійним спрямуванням)
					</div>
					<div class="teacher">Філіпчук М.В.</div>
					<div class="cabinet">8-111</div>
				</div>
				<div class="subject_info">
					<div class="time">{{ timetable.pair5 }}</div>
					<div class="subject"></div>
					<div class="teacher"></div>
					<div class="cabinet"></div>
				</div>
				<div class="subject_info">
					<div class="time">{{ timetable.pair6 }}</div>
					<div class="subject"></div>
					<div class="teacher"></div>
					<div class="cabinet"></div>
				</div>
			</div>
		</div>
	</div>
</template>
