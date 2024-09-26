<script setup>
import { timetable } from '../main';
</script>

<template>
    <div class="day">
        <div class="title">Четвер</div>
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
                    <div class="subject">Алгоритмізація та програмування</div>
                    <div class="teacher">Фратавчан В.Г.</div>
                    <div class="cabinet">8-216</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.pair3 }}</div>
                    <div class="subject">Алгоритмізація та програмування</div>
                    <div class="teacher">Фратавчан В.Г.</div>
                    <div class="cabinet">8-221</div>
                </div>
                <div class="subject_info">
                    <div class="time">{{ timetable.pair4 }}</div>
                    <div class="subject">Теоретичні основи кібернетики</div>
                    <div class="teacher">Філіпчук О.І.</div>
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