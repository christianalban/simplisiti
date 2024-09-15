<script setup lang="ts" generic="T">
import { PropType, computed } from 'vue';
import { GroupItem, Group } from '../types/Group';
import { groupBy, filterBy } from '../utils/helpers';
import Accordion from './Accordion.vue';

const props = defineProps({
    items: Array as PropType<GroupItem<T>[]>,
    expanded: {
        type: Boolean,
        default: true,
    },
    filter: {
        type: String,
        default: '',
    },
    filterBy: {
        type: String,
        default: 'name',
    },
})

const groupedItems = computed<Group<T>>((): Group<T> => {
    if (!props.items) return {};

    const filtered = filterBy(props.items, props.filter, props.filterBy);

    const group = groupBy<T>(filtered, props.filterBy);

    return group.data;
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
