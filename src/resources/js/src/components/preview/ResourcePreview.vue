<script setup lang="ts">
import Modal from '../Modal.vue';
import { ref } from 'vue';

defineProps({
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
    showModal.value = true;
};

const toggleBackground = () => {
    darkBackground.value = !darkBackground.value;
};

</script>

<template>
    <button type="button" class="resource-container" @click.stop="showPreview">
        <video v-if="url?.match('.mp4')" :src="url" class="resource-preview"></video>
        <img v-else :src="url" class="resource-preview"/>
    </button>
    <modal
        :showModal="showModal"
        :showCancel="false"
        :confirmLabel="$t('buttons.close')"
        @close="handleCloseModal"
    >
        <div :class="['max-h-[35vw] overflow-hidden relative transition-colors p-4 flex justify-center items-center', { 'bg-gray-800': darkBackground, 'bg-white': !darkBackground}]">
            <button type="button" :class="['absolute right-3 top-3', { 'text-white': darkBackground, 'text-gray-800': !darkBackground}]" @click.stop="toggleBackground">
                <fa-icon v-if="darkBackground" icon="moon"></fa-icon>
                <fa-icon v-else icon="sun"></fa-icon>
            </button>
            <video v-if="url?.match('.mp4')" :src="url" class="resource-preview" controls></video>
            <img v-else :src="url" class="resource-preview"/>
        </div>
    </modal>
</template>

<style scoped>
.resource-container {
    @apply flex flex-1 w-full items-center justify-center bg-gray-100 overflow-hidden;

    img, video {
        @apply !max-w-full !max-h-full;
    }
}
</style>
