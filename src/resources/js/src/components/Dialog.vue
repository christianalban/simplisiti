<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

interface DialogProps {
    returnValue: string;
    showModal: () => void;
}

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    showDialog: {
        type: Boolean,
        required: true,
    }
});

const emit = defineEmits(['update:showDialog', 'close', 'confirm', 'cancel']);

const dialog = ref<DialogProps|null>(null);

const { showDialog } = toRefs(props);

const close = () => {
    emit('update:showDialog', false);
    emit('close');

    if (dialog.value?.returnValue === 'default') {
        emit('confirm');
    } else {
        emit('cancel');
    }
}

watch(showDialog, (showDialog) => {
    if (showDialog) {
        dialog.value?.showModal();
    }
});

</script>

<template>
    <dialog ref="dialog" class="p-4 rounded-lg" @close="close">
        <form class="flex flex-col gap-4">
            <span class="font-bold">{{ props.title }}</span>
            <p class="text-sm">{{ props.message }}</p>
            <div class="flex justify-between gap-4">
                <button value="cancel" class="button danger" formmethod="dialog">{{ $t('buttons.cancel') }}</button>
                <button id="confirmBtn" class="button primary" value="default" formmethod="dialog">{{ $t('buttons.confirm') }}</button>
            </div>
        </form>
    </dialog>
</template>

<style scoped>
</style>
