<script setup lang="ts">
import { toRefs, PropType } from 'vue';
import { ModalPropsLabel, ModalPropsCode, ModalResponseCode } from '../types/Modal';

const props = defineProps({
    title: {
        type: [String, null] as PropType<string|null>,
    },
    showModal: {
        type: Boolean,
        required: true,
    },
    showCancel: {
        type: Boolean,
        default: true,
    },
    showConfirm: {
        type: Boolean,
        default: true,
    },
    resetOnClose: {
        type: Boolean,
        default: true,
    },
    cancelLabel: String,
    confirmLabel: String,
});

const emit = defineEmits(['update:showModal', 'close', 'confirm', 'cancel']);

const { showModal } = toRefs(props);

const modalLabelToCode = (label: ModalResponseCode) => {
    return ModalPropsLabel[label];
}

const close = () => {
    emit('update:showModal', false);
    emit('close');

    emit(modalLabelToCode(ModalPropsCode.CANCEL));
}

const confirm = () => {
    emit('update:showModal', false);
    emit('close');

    emit(modalLabelToCode(ModalPropsCode.CONFIRM));
}

</script>

<template>
    <div :class="['fixed z-10 top-0 left-0 right-0', { 'hidden': !showModal }]">
        <div class="grid w-full h-screen place-center overflow-auto">
            <div class="m-4 p-4 bg-white rounded-lg">
                <div class="flex flex-col gap-4 h-full">
                    <span v-if="props.title" class="font-bold">{{ props.title }}</span>
                    <div>
                        <slot></slot>
                    </div>
                    <div class="flex justify-end gap-4 mt-auto">
                        <button v-if="showCancel" type="button" value="cancel" class="button danger" @click="close">{{ cancelLabel || $t('buttons.cancel') }}</button>
                        <button v-if="showConfirm" type="button" @click="confirm" class="button primary ml-auto" value="default">{{ confirmLabel || $t('buttons.confirm') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div :class="['fixed inset-0 bg-gray-300 opacity-50', { 'hidden': !showModal }]"></div>
</template>

<style scoped>
</style>
