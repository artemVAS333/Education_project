<script setup>
import Week from './Week.vue'

const groups = [
    "141 (1)", "141 (2-1)", "141 (2-2)", "141 (3)"
]

</script>

<template>
    <ul class="list">
        <li class="list_of_speccily">
            <div class="title_of_speccily">Компʼтерні науки</div>
            <div class="list_of_group_container">
                <ul class="list_of_group">
                    <li class="list_item_of_speccily_group" v-for="group in groups">
                        {{ group }}
                    </li>
                </ul>
            </div>
        </li>
    </ul>
    <!-- <Week /> -->
</template>

<style lang="scss">
@import url('./Schedule.scss');
</style>