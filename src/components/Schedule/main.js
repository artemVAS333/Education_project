export function freeItems() {
	const subject_info = document.querySelectorAll('.subject_info');
	const subject = document.querySelectorAll('.subject');
	const teacher = document.querySelectorAll('.teacher');
	const cabinet = document.querySelectorAll('.cabinet');
	for (let i = 0; i < subject_info.length; i++) {
		if (
			subject[i].textContent == '' &&
			teacher[i].textContent == '' &&
			cabinet[i].textContent == ''
		) {
			subject_info[i].classList.add('free');
		}
	}
}

export const timetable = {
	pair1: '08:20 - 09:40',
	pair2: '09:50 - 11:10',
	pair3: '11:30 - 12:50',
	pair4: '13:00 - 14:20',
	pair5: '14:40 - 16:00',
	pair6: '16:10 - 17:30',
};

export function currentDay() {
	const day = document.querySelectorAll('.day');
	const dayOfWeek = new Date().getDay();
	if (dayOfWeek >= 0 && dayOfWeek < day.length) {
		day[dayOfWeek].classList.add('currentDay');
		scrollToElement(day[dayOfWeek]);
	}
}

function scrollToElement(params) {
	params.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
