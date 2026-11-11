<script setup lang="ts">
import { AxiosError } from 'axios';
import { computed, PropType, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ActionButtonOptions } from '../../types/Plugin';
import { executePluginAction } from '../../services/PluginService';
import { showToast } from '../../services/ToastService';
import { useSettings } from '../../services/SettingService';
import DialogComponent from '../Dialog.vue';

const props = defineProps({
    data: {
        type: Object as PropType<ActionButtonOptions>,
    },
    plugin: {
        type: String,
    },
    editable: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
});

const { t } = useI18n();
const { loadSettings } = useSettings();

const isExecuting = ref(false);
const showConfirmation = ref(false);

const confirmationTitle = computed(() => {
    return props.data?.confirmation_title || props.data?.button_text || '';
});

const executeAction = async () => {
    if (isExecuting.value) {
        return;
    }

    isExecuting.value = true;

    try {
        await executePluginAction(props.data?.url ?? '', props.plugin as string);

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
        isExecuting.value = false;
    }
};

const handleClick = () => {
    if (props.data?.with_confirmation) {
        showConfirmation.value = true;
        return;
    }

    executeAction();
};
</script>

<template>
    <button
        type="button"
        class="button primary flex gap-2 justify-center px-1 relative items-center w-full h-full"
        @click="handleClick"
        :disabled="!editable || isExecuting"
    >
        <fa-icon :icon="['fas', 'circle-notch']" class="text-xl animate-spin" v-if="isExecuting"/>
        <fa-icon :icon="['fas', 'bolt']" class="text-xl" v-else/>
        <span>{{ data?.button_text }}</span>
    </button>
    <dialog-component
        v-if="data?.with_confirmation"
        v-model:showDialog="showConfirmation"
        :title="confirmationTitle"
        :message="data?.confirmation_text || ''"
        :confirmLabel="data?.confirmation_accept_button_text || 'Accept'"
        :cancelLabel="data?.confirmation_cancel_button_text || 'Cancel'"
        @confirm="executeAction"
    />
</template>

<style scoped>
</style>
