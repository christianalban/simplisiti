<script setup lang="ts">
import { PropType } from 'vue';


defineProps({
    content: {
        type: [String, null] as PropType<string | null>,
        required: true,
    },
});

const emit = defineEmits(['update:content', 'change']);

const updateContent = (event: Event) => {
    const element = event.target as HTMLTextAreaElement;
    emit('update:content', element.value);
    emit('change');
};

</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-xs font-semibold text-gray-700">Url</label>
        <textarea
            class="min-h-24 w-full resize-y rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            :value="content"
            @input="updateContent($event)"
        ></textarea>
    </div>
</template>
