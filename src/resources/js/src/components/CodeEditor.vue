<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue';
import * as monaco from 'monaco-editor';

const props = defineProps({
    code: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:code']);

const editor = ref(null);

let codeEditor: any = null;

onMounted(() => {
    if (editor.value) {
        codeEditor = monaco.editor.create(editor.value, {
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

const { code  } = toRefs(props);

watch(code, (code) => {
    codeEditor?.setValue(code);
});

</script>

<template>
    <div class="w-full h-full" ref="editor"></div>
</template>

<style scoped>
</style>
