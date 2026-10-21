<script setup lang="ts">
import { PropType, ref, useTemplateRef } from 'vue';
import { UploadFileOptions } from '../../types/Plugin';
import { uploadFile } from '../../services/PluginService';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { useSettings } from '../../services/SettingService';
import { AxiosError } from 'axios';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Object as PropType<UploadFileOptions>,
    },
    plugin: {
        type: String,
    },
});

const { t } = useI18n();
const { loadSettings } = useSettings();

const isUploading = ref(false);

const inputRef = useTemplateRef<HTMLInputElement>('fileRef');

const isFileSelected = ref(false);

const changeFileSelectedStatus = () => {
    if (!inputRef.value || !inputRef.value.files) {
        isFileSelected.value = false;
        return;
    }

    isFileSelected.value = inputRef.value.files.length > 0;
};

const processUploadFile = async () => {
    if (!inputRef.value || !inputRef.value.files || inputRef.value.files.length === 0) {
        return;
    }

    const file = inputRef.value.files[0];

    isUploading.value = true;

    try {
        await uploadFile({
            url: props.data?.url ?? '/api/upload',
            file: file,
        }, props.plugin as string);

        loadSettings();

        showToast({
            title: t('toasts.success'),
            message: t('settings.toasts.successUpdated'),
            type: 'success',
        });
    } catch (error: AxiosError | any) {
        showToast({
            title: t('toasts.error'),
            message: error.response.data.message ?? t('settings.toasts.errorUpdated'),
            type: 'error',
        });
    } finally {
        isUploading.value = false;
        isFileSelected.value = false;
    }
};

</script>

<template>
    <div class="form-group">
        <label class="button secondary cursor-pointer flex gap-2 w-full justify-center !p-1 relative items-center" :for="name">
            <fa-icon :icon="['fas', 'file']" class="text-xl"/>
            <span>{{ $t('placeholders.selectFile') }}</span>
        </label>
        <input type="file" class="hidden" :id="name" :accept="data?.accept" ref="fileRef" @change="changeFileSelectedStatus"/>
        <button type="button" :class="['button primary flex gap-2 justify-center px-1 relative items-center', {'!bg-teal-200': isFileSelected}]" @click="processUploadFile" :disabled="isUploading">
            <fa-icon :icon="['fas', 'circle-notch']" class="text-xl animate-spin" v-if="isUploading"/>
            <fa-icon :icon="['fas', 'upload']" class="text-xl" v-else/>
            <span>{{ $t('placeholders.upload') }}</span>
        </button>
    </div>
</template>

<style scoped>
</style>
