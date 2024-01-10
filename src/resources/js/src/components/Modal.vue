<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

interface ModalProps {
    returnValue: string;
    showModal: () => void;
    resetOnClose: boolean;
    close: (returnValue?: string) => void;
    cancelLabel: string;
    confirmLabel: string;
}

const props = defineProps({
    title: {
        type: String,
        required: true,
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

const form = ref<HTMLFormElement|null>(null);

const emit = defineEmits(['update:showModal', 'close', 'confirm', 'cancel']);

const modal = ref<ModalProps|null>(null);

const { showModal } = toRefs(props);

const close = () => {
    emit('update:showModal', false);
    emit('close');

    if (modal.value?.returnValue === 'default') {
        emit('confirm');
    } else {
        emit('cancel');
    }

    if (props.resetOnClose) {
        form.value?.reset();
    }
}

watch(showModal, (showModal) => {
    if (showModal) {
        modal.value?.showModal();
    } else {
        modal.value?.close();
    }
});

</script>

<template>
    <dialog ref="modal" class="p-4 rounded-lg" @close="close">
        <form class="flex flex-col gap-4" ref="form">
            <span class="font-bold">{{ props.title }}</span>
            <div>
                <slot></slot>
            </div>
            <div class="flex justify-end gap-4">
                <button v-if="showCancel" :type="resetOnClose ? 'reset' : 'button'" value="cancel" class="button danger" formmethod="dialog" @click="modal?.close('cancel')">{{ cancelLabel || $t('buttons.cancel') }}</button>
                <button v-if="showConfirm" type="submit" class="button primary ml-auto" value="default" formmethod="dialog">{{ confirmLabel || $t('buttons.confirm') }}</button>
            </div>
        </form>
    </dialog>
</template>

<style scoped>
</style>
