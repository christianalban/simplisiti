<script setup lang="ts">
import CodeEditor from "../../../components/CodeEditor.vue";

defineProps({
    code: {
        type: String,
        default: '.custom-style {\n    color: red;\n}',
    },
});

defineEmits(['update:code']);

</script>

<template>
    <div class="flex flex-col gap-4 overflow-hidden py-2 h-full">
        <h2 class="title mb-4">{{ $t('components.titles.code') }}</h2>
        <code-editor :code="code" @update:code="$emit('update:code', $event)" language="css"/>
    </div>
</template>

<style scoped>

</style>
