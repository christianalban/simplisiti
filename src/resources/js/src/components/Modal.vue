<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

interface ModalProps {
    returnValue: string;
    showModal: () => void;
    close: (returnValue?: string) => void;
}

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    showModal: {
        type: Boolean,
        required: true,
    }
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

    form.value?.reset();
}

watch(showModal, (showModal) => {
    if (showModal) {
        modal.value?.showModal();
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
            <div class="flex justify-between gap-4">
                <button type="reset" value="cancel" class="button danger" formmethod="dialog" @click="modal?.close('cancel')">{{ $t('buttons.cancel') }}</button>
                <button type="submit" class="button primary" value="default" formmethod="dialog">{{ $t('buttons.confirm') }}</button>
            </div>
        </form>
    </dialog>
</template>

<style scoped>
</style>
