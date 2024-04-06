<script setup lang="ts">
import Modal from '../Modal.vue';
import { ref } from 'vue';

defineProps({
    url: {
        type: String,
        default: '',
    },
});

const showModal = ref(false);

const handleCloseModal = () => {
    showModal.value = false;
};

const update = () => {
    console.log('update');
};

const showPreview = () => {
    showModal.value = true;
};

</script>

<template>
    <button type="button" class="resource-container" @click="showPreview">
        <video v-if="url?.match('.mp4')" :src="url" class="resource-preview" controls></video>
        <img v-else :src="url" class="resource-preview"/>
    </button>
    <modal
        :title="''"
        :showModal="showModal"
        @close="handleCloseModal"
        @confirm="update"
    >
        <img :src="url" class="resource-preview"/>
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
