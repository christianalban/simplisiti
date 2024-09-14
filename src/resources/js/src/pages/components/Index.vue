<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getComponents} from '../../services/ComponentService';
import { Component } from '../../types/Component';
import Group from '../../components/Group.vue';
import { groupItems } from '../../utils/helpers';
import ComponentFloatingPreview from '../../components/preview/ComponentFloatingPreview.vue';

const components = ref<Component[]>([]);

const componentsGroup = computed(() => {
    return groupItems(components.value);
});

onMounted(() => {
    getComponents()
    .then((response) => {
        components.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <h1 class="title">{{ $t('components.titles.componentsList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'components.create' }">{{ $t('components.buttons.create') }}</router-link>
        </div>
        <group class="h-full overflow-y-auto" :items="componentsGroup" v-slot="slotProps">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                <router-link v-for="item in slotProps.item" :key="item.id" :to="{ name: 'components.edit', params: { component: item.id } }">
                    <component-floating-preview
                        :component="item" class="flex-1 shadow rounded overflow-hidden"
                    />
                </router-link>
            </div>
        </group>
    </div>
</template>

<style scoped lang="scss">
</style>
