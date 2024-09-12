<script>
const timetable = {
    time1: "08:20 - 09:40",
    time2: "09:50 - 11:10",
    time3: "11:30 - 12:50",
    time4: "13:00 - 14:20",
    time5: "14:30 - 16:00",
    time6: "16:10 - 17:30",
}

export default {
    data() {
        return {
            timetable: timetable
        }
    },
}
</script>

<template>
    <div class="day">
        <div class="title">Вівторок</div>
        <div class="shedule_day">
            <div class="subjects_of_day">
                <div class="subject_info">
                    <div class="time">{{ timetable.time1 }}</div>
                    <div class="subject"></div>
                    <div class="teacher"></div>
                    <div class="cabinet"></div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time2 }}</div>
                    <div class="subject">Теоретичні основи кібернетики</div>
                    <div class="teacher">Дрінь Я.М.</div>
                    <div class="cabinet">9-2</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time3 }}</div>
                    <div class="subject">Архітектура комп'ютерів</div>
                    <div class="teacher">Стецько Ю.П.</div>
                    <div class="cabinet">8-106</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time4 }}</div>
                    <div class="subject">Українська мова (за професійним спрямуванням)</div>
                    <div class="teacher">Філіпчук М.В.</div>
                    <div class="cabinet">8-111</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time5 }}</div>
                    <div class="subject"></div>
                    <div class="teacher"></div>
                    <div class="cabinet"></div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time6 }}</div>
                    <div class="subject"></div>
                    <div class="teacher"></div>
                    <div class="cabinet"></div>
                </div>
            </div>
        </div>
    </div>
</template>