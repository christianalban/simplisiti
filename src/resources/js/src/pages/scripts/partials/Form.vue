<script setup lang="ts">
import CodeEditor from "../../../components/CodeEditor.vue";
import { value } from '../../../utils/helpers';
import { ref } from 'vue';

const props = defineProps({
    code: {
        type: String,
        default: 'alert("Hello World")',
    },
    name: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

const isChecked = ref(props.isActive);

defineEmits(['update:code', 'update:name', 'update:isActive']);

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex gap-4">
            <div class="flex flex-col gap-2 md:w-1/3">
                <label class="label">{{ $t('scripts.labels.scriptName') }}</label>
                <input type="text" :value="name" required @input="$emit('update:name', value($event.target))" class="input" :placeholder="$t('scripts.placeholders.scriptName')"/>
            </div>
            <div class="flex flex-col gap-2 w-1/3">
                <label class="label">{{ $t('scripts.labels.scriptIsActive') }}</label>
                <div>
                    <input type="checkbox" :checked="isActive" v-model="isChecked" @change="$emit('update:isActive', isChecked)" class="checkbox" :placeholder="$t('scripts.placeholders.scriptIsActive')"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4 h-screen py-2">
            <h2 class="title mb-4">{{ $t('components.titles.code') }}</h2>
            <code-editor :code="props.code" @update:code="$emit('update:code', $event)" language="javascript"/>
        </div>
    </div>
</template>

<style scoped>

</style>
