<script>
import test1 from './test1.vue'

const groups = [
    "141 (1)", "141 (2-1)", "141 (2-2)", "141 (3)"
]

export default {
    components: {
        test1
    },
    data() {
        return {
            groups: groups,
            item: 0
        }
    }
}
</script>

<template>
    <h1>Розклад {{ groups[item] }}</h1>
    <!-- <ul class="list">
        <li class="list_item" @click="item = 0">141 (1)</li>
        <li class="list_item" @click="item = 1">141 (2-1)</li>
        <li class="list_item" @click="item = 2">141 (2-2)</li>
        <li class="list_item" @click="item = 3">141 (3)</li>
    </ul> -->
    <test1 />
</template>

<style lang="scss">
@import url('./Schedule.scss');
</style>
