<script>

import Mon1 from './week1/Mon.vue';
import Tue1 from './week1/Tue.vue';
import Wed1 from './week1/Wed.vue'
import Thu1 from './week1/Thu.vue';

import { free_items, timetable } from './week1/main';

export default {
    data() {
        return {
            // timetable: timetable
        }
    },
    components: {
        Mon1,
        Tue1,
        Wed1,
        Thu1
    },
    methods: {
        current_day() {
            const current_day = new Date().getDay();
            const day = document.querySelectorAll('.day');
            console.log(day);

            day[current_day - 1].classList.add('active');
        },
    },
    mounted() {
        free_items();
    }
}
</script>

<template>
    <div class="schedule">
        <div class="week1">
            <Mon1 />
            <Tue1 />
            <Wed1 />
            <Thu1 />
        </div>
        <!-- <div class="week2">
            <Mon />
            <Tue />
            <Wed />
            <Thu />
        </div> -->
    </div>
</template>