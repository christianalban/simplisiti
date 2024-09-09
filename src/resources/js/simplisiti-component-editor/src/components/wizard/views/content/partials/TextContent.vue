<script setup lang="ts">

defineProps({
    content: {
        type: String,
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
    <div class="sp-font__select-item">
        <label>Texto</label>
        <textarea class="sp-font__select-text" :value="content" @input="updateContent($event)"></textarea>
    </div>
</template>

<style scoped>
.sp-font__select-item {
    display: flex;
    flex-direction: column;

    .sp-font__select-text {
        border: 1px solid #ccc;
    }
}
</style>
