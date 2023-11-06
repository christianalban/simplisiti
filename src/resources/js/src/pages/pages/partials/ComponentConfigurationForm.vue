<script setup lang="ts">

const props = defineProps({
    component: {
        type: Object as PropType<Component|null>,
    },
});
defineEmits(['exit']);

</script>

<template>
    <div class="flex gap-2">
        <h2 class="font-bold">{{ $t('pages.titles.componentConfigurationForm') }}</h2>
        <button type="button" class="button small default" @click="$emit('exit')">
            {{ $t('pages.buttons.exit') }}
        </button>
    </div>
    <div class="flex flex-col gap-4">
        <div v-for="variable of component.variables" :key="variable.name">
            <div v-if="variable.type === 'text'" class="flex flex-col gap-2">
                <label class="label">{{ variable.name }}</label>
                <input class="input" type="text" v-model="variable.default" :placeholder="variable.name"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tile {
    &.sortable-chosen {
        @apply bg-blue-100;
    }
}
</style>
