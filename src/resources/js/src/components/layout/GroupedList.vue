<script setup lang="ts">
import Group from '../Group.vue';

defineProps({
    listGroup: Array,
});
</script>

<template>
    <group :items="listGroup" v-slot="slotProps">
        <ul class="w-full md:w-2/3 grid gap-4">
            <li v-for="list of slotProps.item" class="flex">
                <slot :item="list"></slot>
            </li>
        </ul>
    </group>
</template>

<style scoped lang="scss">
</style>
