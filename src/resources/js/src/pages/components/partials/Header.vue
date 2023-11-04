<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <div class="flex items-center gap-4 mb-4">
        <router-link class="button" :to="{ name: 'components.index' }">{{ $t('buttons.back') }}</router-link>
        <h1 class="title">{{ $t(props.title) }}</h1>
    </div>
</template>

<style scoped>

</style>
