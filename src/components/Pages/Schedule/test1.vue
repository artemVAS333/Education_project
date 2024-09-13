<script setup>
import Mon from './week1/Mon.vue';
import Tue from './week1/Tue.vue';
import Wed from './week1/Wed.vue'
import Thu from './week1/Thu.vue';
import Fri from './week1/Fri.vue';


import { freeItems, currentDay } from './week1/main';

import { onMounted } from 'vue';
onMounted(() => {
    freeItems();
    currentDay();
})
</script>

<template>
    <div class="schedule">
        <div class="week1">
            <Mon />
            <Tue />
            <Wed />
            <Thu />
            <Fri />
        </div>
        <!-- <div class="week2">
            <Mon />
            <Tue />
            <Wed />
            <Thu />
        </div> -->
    </div>
</template>