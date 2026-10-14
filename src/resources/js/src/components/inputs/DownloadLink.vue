<script setup lang="ts">
import { PropType, computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, null] as PropType<string|null>,
        required: true,
    },
});

const linkUrl = computed(() => {
    return props.modelValue ?? '#';
});

</script>

<template>
    <a class="button secondary flex gap-2 w-full justify-center !p-1 relative items-center" :href="linkUrl" target="_download">
        <fa-icon :icon="['fas', 'download']" class="text-xl"/>
        <span>{{ $t('placeholders.download') }}</span>
    </a>
</template>

<style scoped>
</style>
