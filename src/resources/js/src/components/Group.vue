<script setup lang="ts" generic="T">
import { PropType, computed } from 'vue';
import { GroupItem, Group } from '../types/Group';
import { groupBy } from '../utils/helpers';
import Accordion from './Accordion.vue';

const props = defineProps({
    items: Array as PropType<GroupItem<T>[]>,
    expanded: {
        type: Boolean,
        default: true,
    },
})

const groupedItems = computed<Group<T>>((): Group<T> => {
    if (!props.items) return {};

    const group = groupBy<T>(props.items, 'name');

    return group;
});
</script>

<template>
    <div class="flex flex-col">
        <accordion v-for="(group, key) in groupedItems" :key="key" :title="key as string" :open="expanded">
            <slot :item="group"></slot>
        </accordion>
    </div>
</template>

<style scoped>
</style>
