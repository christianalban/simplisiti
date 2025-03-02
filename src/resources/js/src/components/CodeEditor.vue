<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue';
import * as monaco from 'monaco-editor';

// const tab = '    ';
const props = defineProps({
    code: {
        type: String,
        default: '',
    },
    language: {
        type: String,
        default: 'html',
    },
});

const emit = defineEmits(['update:code']);

const editor = ref(null);

let codeEditor: any = null;

// const formatHTML = (html: string) => {
//     let result = '';
//     let indentLevel = 0;
//
//     html.split(/(?=<)|(?<=>)/).forEach(function (element) {
//         element = element.trim();
//         if (element) {
//             if (element.match(/^<\/\w/)) indentLevel--;
//             indentLevel = Math.max(indentLevel, 0);
//             result += tab.repeat(indentLevel) + element + '\n';
//             if (element.match(/^<\w[^>]*[^\/]>$/)) indentLevel++;
//         }
//     });
//
//     return result.trim();
// };

onMounted(() => {
    if (editor.value) {
        codeEditor = monaco.editor.create(editor.value, {
            // value: formatHTML(props.code),
            value: props.code,
            language: props.language,
            minimap: {
                enabled: false,
            },
            automaticLayout: true,
        });

        codeEditor.onDidChangeModelContent(() => {
            emit('update:code', codeEditor.getValue());
        });
    };
});

const { code } = toRefs(props);

watch(code, (code) => {
    if (code !== codeEditor.getValue()) {
        codeEditor.setValue(code);
    }
});

</script>

<template>
    <div class="overflow-hidden flex-1">
        <div class="w-full h-full" ref="editor"></div>
    </div>
</template>

<style scoped>
</style>
