<script setup>
import Mon from './week1/Mon.vue';
import Tue from './week1/Tue.vue';
import Wed from './week1/Wed.vue'
import Thu from './week1/Thu.vue';
import Fri from './week1/Fri.vue';
import Sat from './week1/Sat.vue';
import Sun from './week1/Sun.vue';

import { freeItems, currentDay } from './main';

import { onMounted } from 'vue';
onMounted(() => {
    freeItems();
    currentDay();
})
</script>

<template>
    <div class="schedule">
        <div class="week1">
            <Sun />
            <Mon />
            <Tue />
            <Wed />
            <Thu />
            <Fri />
            <Sat />
        </div>
    </div>
</template>