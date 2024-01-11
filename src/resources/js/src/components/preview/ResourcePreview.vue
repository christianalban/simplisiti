<script setup lang="ts">

defineProps({
    url: {
        type: String,
        default: '',
    },
});

</script>

<template>
    <video v-if="url?.match('.mp4')" :src="url" class="h-32 object-cover" controls></video>
    <img v-else :src="url" class="h-32 object-cover"/>
</template>

<style scoped>
</style>
