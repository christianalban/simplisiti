<script setup lang="ts">

defineProps({
    title: String,
    backName: String,
    backTitle: String,
    createName: String,
    createTitle: String,
    searchPlaceholder: String,
    searchTitle: String,
    modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const emitUpdate = (event: Event) => {
    const element = event.target as HTMLInputElement;

    emit('update:modelValue', element.value)
};
</script>

<template>
    <div class="flex flex-col justify-between md:flex-row">
        <div class="flex flex-col gap-2">
            <h1 class="title">{{ title }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: backName }">{{ backTitle }}</router-link>
                <router-link class="button primary" :to="{ name: createName }">{{ createTitle }}</router-link>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <label for="filter" class="title">{{ searchTitle }}</label>
            <input :value="modelValue" @input="emitUpdate" type="search" id="filter" class="input" :placeholder="$t('placeholders.search')" />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
