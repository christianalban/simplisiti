<script setup lang="ts">

defineProps({
    url: {
        type: String,
        default: '',
    },
});

</script>

<template>
    <div class="resource-container">
        <video v-if="url?.match('.mp4')" :src="url" class="resource-preview" controls></video>
        <img v-else :src="url" class="resource-preview"/>
    </div>
</template>

<style scoped>
.resource-container {
    @apply h-32 !max-h-full flex items-center justify-center;

    img, video {
        @apply !max-w-full !max-h-full;
    }
}
</style>
