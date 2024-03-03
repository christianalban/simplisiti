<script setup lang="ts">
import { useSources } from '../../services/DataSourceService.ts';

const { sources } = useSources();

</script>

<template>
    <select class="input w-full">
        <option value="">{{ $t('placeholders.select') }}</option>
        <option value="text" v-for="source of sources">
            {{ source.name }}
        </option>
    </select>
</template>

<style scoped>
</style>
