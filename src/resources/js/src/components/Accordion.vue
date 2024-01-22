<script setup lang="ts">
defineProps({
    title: String,
    open: Boolean,
})
</script>

<template>
    <details :open="open">
        <summary class="w-full">
            <slot name="title">{{ title }}</slot>
        </summary>
        <slot />
    </details>
</template>

<style scoped>
</style>
