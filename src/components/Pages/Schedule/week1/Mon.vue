<script>
import { timetable } from './main';
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
        <div class="title">Понеділок</div>
        <div class="shedule_day">
            <div class="subjects_of_day">
                <div class="subject_info">
                    <div class="time">{{ timetable.time1 }}</div>
                    <div class="subject">Архітектура комп'ютерів</div>
                    <div class="teacher">Стецько Ю.П.</div>
                    <div class="cabinet">8-224</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time2 }}</div>
                    <div class="subject">Комп'ютерна дискретна математика</div>
                    <div class="teacher">Стецько Ю.П.</div>
                    <div class="cabinet">8-224</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time3 }}</div>
                    <div class="subject">Алгоритмізація та програмування</div>
                    <div class="teacher">Фратавчан В.Г.</div>
                    <div class="cabinet">8-216</div>
                </div>
                <div class="subject_info free">
                    <div class="time">{{ timetable.time4 }}</div>
                    <div class="subject"></div>
                    <div class="teacher"></div>
                    <div class="cabinet"></div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.time5 }}</div>
                    <div class="subject">Фізичне виховання (за видами спорту)</div>
                    <div class="teacher"></div>
                    <div class="cabinet">16 корп.</div>
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