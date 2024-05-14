<script setup lang="ts">
import { PropType } from 'vue';
import { value } from '../../../utils/helpers';
import { ResourceUploadType } from '../../../types/Resource';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    file: {
        type: [Array, Object, null] as PropType<File[]|File|null>,
        default: null,
    },
    fileRequired: {
        type: Boolean,
        default: false,
    },
    uploadType: {
        type: String as PropType<ResourceUploadType>,
        default: 'single',
    },
});

const emit = defineEmits(['update:name', 'update:file']);

const handleFile = (event: EventTarget | null) => {
    if (!event) {
        return;
    }
    const files = props.uploadType === 'single' ? (event as HTMLInputElement).files?.[0] : [...(event as HTMLInputElement).files ?? []];

    emit('update:file', files);
}

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 w-full">
            <label class="label">{{ $t(`resources.labels.${uploadType === 'single' ? 'resourceFile' : 'resourceFiles'}`) }}</label>
            <input
                type="file"
                :required="fileRequired"
                @change="handleFile($event.target)"
                class="input"
                :multiple="uploadType === 'batch'"
                :placeholder="$t('resources.placeholders.resourceFile')"
                accept="image/jpeg,image/svg+xml,image/png,image/webp,video/mp4,application/pdf,image/gif,application/zip,application/x-7z-compressed,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
            />
        </div>
        <div class="flex flex-col gap-2 w-full" v-if="uploadType === 'single'">
            <label class="label">{{ $t('resources.labels.resourceName') }}</label>
            <input type="text" :value="name" @input="$emit('update:name', value($event.target))" class="input" :placeholder="$t('resources.placeholders.resourceName')"/>
        </div>
    </div>
</template>

<style scoped>

</style>
