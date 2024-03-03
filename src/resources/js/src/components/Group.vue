<script setup lang="ts">
import { PropType, computed } from 'vue';
import { GroupItem, Group } from '../types/Group';
import { Component } from '../types/Component';
import { groupBy } from '../utils/helpers';
import Accordion from './Accordion.vue';

const props = defineProps({
    items: Array as PropType<GroupItem<Component>[]>,
    expanded: {
        type: Boolean,
        default: true,
    },
})

const groupedItems = computed<Group<Component>>((): Group<Component> => {
    if (!props.items) return {};

    const group = groupBy<Component>(props.items, 'name');

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
