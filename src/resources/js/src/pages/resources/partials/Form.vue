<script setup lang="ts">
import { PropType } from 'vue';
import { value } from '../../../utils/helpers';

defineProps({
    name: {
        type: String,
        required: true,
    },
    file: {
        type: [Object, null] as PropType<File|null>,
        default: null,
    },
    fileRequired: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:name', 'update:file']);

const handleFile = (event: EventTarget | null) => {
    if (!event) {
        return;
    }
    emit('update:file', (event as HTMLInputElement).files?.[0] ?? null);
}

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 w-full">
            <label class="label">{{ $t('resources.labels.resourceName') }}</label>
            <input type="text" :value="name" required @input="$emit('update:name', value($event.target))" class="input" :placeholder="$t('resources.placeholders.resourceName')"/>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <label class="label">{{ $t('resources.labels.resourceFile') }}</label>
            <input type="file" :required="fileRequired" @change="handleFile($event.target)" class="input" :placeholder="$t('resources.placeholders.resourceFile')" accept="image/jpeg,image/svg+xml,image/png,image/webp,video/mp4"/>
        </div>
    </div>
</template>

<style scoped>

</style>
