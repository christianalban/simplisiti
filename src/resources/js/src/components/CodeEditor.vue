<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as monaco from 'monaco-editor';

const props = defineProps({
    code: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:code']);

const editor = ref(null);

onMounted(() => {
    if (editor.value) {
        const codeEditor = monaco.editor.create(editor.value, {
            value: props.code,
            language: "html",
            minimap: {
                enabled: false,
            },
        });

        codeEditor.onDidChangeModelContent(() => {
            emit('update:code', codeEditor.getValue());
        });
    };
});

</script>

<template>
    <div class="w-full h-full" ref="editor"></div>
</template>

<style scoped>
</style>
