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
    }
}
</script>

<template>
    <div class="day">
        <div class="title">Середа</div>
        <div class="shedule_day">
            <div class="subjects_of_day">
                <div class="subject_info">
                    <div class="time">{{ timetable.time1 }}</div>
                    <div class="subject">Актуальні питання історії та культури України</div>
                    <div class="teacher">Юрій М.Ф.</div>
                    <div class="cabinet">8-106</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time2 }}</div>
                    <div class="subject">Алгоритмізація та програмування</div>
                    <div class="teacher">Фратавчан В.Г.</div>
                    <div class="cabinet">8-224</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time3 }}</div>
                    <div class="subject">Актуальні питання історії та культури України</div>
                    <div class="teacher">Юрій М.Ф.</div>
                    <div class="cabinet">8-106</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time4 }}</div>
                    <div class="subject">Теоретичні основи кібернетики</div>
                    <div class="teacher">Філіпчук О.І.</div>
                    <div class="cabinet">8-213</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time5 }}</div>
                    <div class="subject">Іноземна мова (за професійним спрямуванням)</div>
                    <div class="teacher">Кшевецький В.С.</div>
                    <div class="cabinet">8-111</div>
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