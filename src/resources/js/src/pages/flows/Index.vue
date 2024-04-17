<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getFlows } from '../../services/FlowService';
import { Flow } from '../../types/Flow';
import Configuration from './layout/Configuration.vue';

const flows = ref<Flow[]>([]);

onMounted(() => {
    getFlows()
    .then((response) => {
        flows.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <div class="flex flex-col gap-4">
            <h1 class="title">{{ $t('flows.titles.flowsList') }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            </div>
        </div>
        <div class="overflow-y-auto flex-1">
            <configuration />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
