<script setup lang="ts">
import CodeEditor from "../../../components/CodeEditor.vue";

defineProps({
    code: {
        type: String,
        default: 'alert("Hello World")',
    },
});

defineEmits(['update:code']);

</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <h2 class="title mb-4">{{ $t('components.titles.code') }}</h2>
        <code-editor :code="code" @update:code="$emit('update:code', $event)" language="javascript"/>
    </div>
</template>

<style scoped>

</style>
