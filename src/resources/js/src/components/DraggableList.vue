<script setup lang="ts">
import { PropType } from 'vue';
import Draggable from 'vuedraggable';
import { ListItem } from '../types/List';

defineProps({
    list: {
        type: Array as PropType<ListItem[]>,
        required: true,
    },
    group: {
        type: String,
        default: 'sections',
    },
    itemKey: {
        type: String,
        default: 'id',
    },
});

defineEmits(['update:list']);

</script>

<template>
    <draggable
        :list="list"
        :group="group" 
        :item-key="itemKey"
        @end="$emit('update:list', list)"
    >
        <template #item="{element: item}">
            <div class="form-group">
                <router-link :to="item.url" class="button primary w-full flex items-center justify-between">
                    <span class="font-semibold">{{ item.name }}</span>
                    <fa-icon v-if="item.is_active" icon="circle-check" />
                    <fa-icon v-else :icon="['far','circle']" />
                </router-link>
                <button class="button secondary flex items-center justify-between cursor-row-resize">
                    <fa-icon icon="grip-lines" />
                </button>
            </div>
        </template>
    </draggable>
</template>

<style scoped>
</style>
