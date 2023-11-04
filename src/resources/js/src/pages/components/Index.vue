<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <div class="flex gap-2">
            <router-link class="button" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button" :to="{ name: 'components.create' }">{{ $t('components.buttons.create') }}</router-link>
        </div>
    </div>
</template>

<style scoped>

</style>
