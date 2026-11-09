<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import TextContent from './partials/TextContent.vue';
import { ContentTypeMapping } from '../../../../engine/constants/Content';
import { normalizeSerializedTemplate } from '../../../../engine/helpers/TemplateProtection';

const props = defineProps({
    element: {
        type: [HTMLElement, null] as PropType<HTMLElement | null>,
        required: true,
    }
});

const content = ref<any>(null);
const contentType = computed(() => props.element ? ContentTypeMapping[props.element.tagName.toLowerCase()] : null);

const propagateContent = () => {
    if (contentType.value === 'text') {
        content.value = normalizeSerializedTemplate(props.element?.innerHTML ?? '');
    }
}

const emit = defineEmits(['update:spContent', 'update:spClassList']);

const notifyClassList = () => {
    emit('update:spClassList', []);
}

const notifyContent = () => {
    notifyClassList();
    content.value = normalizeSerializedTemplate(content.value ?? '');
    emit('update:spContent', {
        content: content.value,
        type: contentType.value,
    });
}

onMounted(() => {
    propagateContent();
    notifyContent();
    notifyClassList();
});

</script>

<template>
    <div>
        <text-content v-if="contentType === 'text'" v-model:content="content" @change="notifyContent" />
    </div>
</template>
