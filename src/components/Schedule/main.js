export function freeItems() {
	const subject_info = document.querySelectorAll('.subject_info')
	const subject = document.querySelectorAll('.subject')
	const teacher = document.querySelectorAll('.teacher')
	const cabinet = document.querySelectorAll('.cabinet')
	for (let i = 0; i < subject_info.length; i++)
		if (
			subject[i].textContent == '' &&
			teacher[i].textContent == '' &&
			cabinet[i].textContent == ''
		)
			subject_info[i].classList.add('free')
}

export function currentDay() {
	const day = document.querySelectorAll('.day')
	const dayOfWeek = new Date().getDay()
	if (dayOfWeek >= 0 && dayOfWeek < day.length) {
		day[dayOfWeek].classList.add('currentDay')
		scrollToElement(day[dayOfWeek])
	}
}

function scrollToElement(params) {
	params.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
