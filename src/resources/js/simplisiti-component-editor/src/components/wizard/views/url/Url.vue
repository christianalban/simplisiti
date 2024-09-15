<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import TextContent from './partials/TextContent.vue';

const props = defineProps({
    element: {
        type: [HTMLElement, null] as PropType<HTMLElement | null>,
        required: true,
    }
});

const content = ref<any>(null);

const propagateContent = () => {
    content.value = props.element?.getAttribute('href') || '';
}

const emit = defineEmits(['update:spAttribute', 'update:spClassList']);

const notifyClassList = () => {
    emit('update:spClassList', []);
}

const notifyContent = () => {
    notifyClassList();
    emit('update:spAttribute', {
        content: content.value,
        type: 'href',
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
        <text-content v-model:content="content" @change="notifyContent" />
    </div>
</template>

<style scoped>
</style>
