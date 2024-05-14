<script setup lang="ts">
import Modal from '../Modal.vue';
import { ref } from 'vue';

const props = defineProps({
    url: {
        type: String,
        default: '',
    },
});

const darkBackground = ref(false);

const showModal = ref(false);

const handleCloseModal = () => {
    showModal.value = false;
};

const showPreview = () => {
    if (!props.url.match(/(.webp|.mp4|.svg|.png|.jpg|.jpeg|.gif)$/)) {
        const link = document.createElement('a');
        link.href = props.url;
        link.target = '_blank';
        link.download = props.url;
        link.click();
        return;
    }
    showModal.value = true;
};

const toggleBackground = () => {
    darkBackground.value = !darkBackground.value;
};

</script>

<template>
    <button type="button" class="resource-container" @click.stop="showPreview">
        <fa-icon v-if="url?.match('.pdf')" icon="file-pdf" class="text-9xl text-red-500"/>
        <video v-else-if="url?.match('.mp4')" :src="url" class="resource-preview-button"></video>
        <img v-else :src="url" class="resource-preview-button"/>
    </button>
    <modal
        :showModal="showModal"
        :showCancel="false"
        :confirmLabel="$t('buttons.close')"
        @close="handleCloseModal"
    >
        <div :class="['h-[85vh] min-w-[95vw] overflow-hidden relative transition-colors flex justify-center items-center', { 'bg-gray-800': darkBackground, 'bg-gray-100': !darkBackground}]">
            <button type="button" :class="['absolute z-10 right-0 top-0', { 'text-white': darkBackground, 'text-gray-800': !darkBackground}]" @click.stop="toggleBackground">
                <fa-icon v-if="darkBackground" icon="moon"></fa-icon>
                <fa-icon v-else icon="sun"></fa-icon>
            </button>
            <div class="w-full h-full overflow-hidden flex items-center justify-center">
                <fa-icon v-if="url?.match('.pdf')" icon="file-pdf" class="text-9xl text-red-500"/>
                <video v-else-if="url?.match('.mp4')" :src="url" class="max-h-full" controls></video>
                <img v-else class="max-h-full" :src="url"/>
            </div>
        </div>
    </modal>
</template>

<style scoped>
.resource-container {
    @apply flex flex-1 w-full items-center justify-center bg-gray-100 overflow-hidden;

    .resource-preview-button
    {
        @apply w-full h-full object-cover;
    }
}
</style>
