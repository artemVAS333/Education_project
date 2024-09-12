export function free_items() {
    const subject_info = document.querySelectorAll('.subject_info');
    const subject = document.querySelectorAll('.subject');
    const teacher = document.querySelectorAll('.teacher');
    const cabinet = document.querySelectorAll('.cabinet');
    for (let i = 0; i < subject_info.length; i++) {
        if (subject[i].textContent == '' && teacher[i].textContent == '' && cabinet[i].textContent == '') {
            subject_info[i].classList.add('free');
        }
    }
}

export const timetable = {
    time1: "08:20 - 09:40",
    time2: "09:50 - 11:10",
    time3: "11:30 - 12:50",
    time4: "13:00 - 14:20",
    time5: "14:30 - 16:00",
    time6: "16:10 - 17:30",
}