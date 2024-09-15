<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getComponents} from '../../services/ComponentService';
import { Component } from '../../types/Component';
import Group from '../../components/Group.vue';
import { groupItems, labelName } from '../../utils/helpers';
import ComponentFloatingPreview from '../../components/preview/ComponentFloatingPreview.vue';
import HeaderComponent from '../../components/layout/Header.vue';

const components = ref<Component[]>([]);

const filter = ref<string>('');

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
        <header-component
            :title="$t('components.titles.componentsList')"
            backName="dashboard"
            :backTitle="$t('buttons.back')"
            createName="components.create"
            :createTitle="$t('components.buttons.create')"
            :searchTitle="$t('placeholders.search')"
            v-model="filter"
        />
        <group class="h-full overflow-y-auto" :items="componentsGroup" v-slot="slotProps" :filter="filter">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                <router-link v-for="item in slotProps.item" :key="item.id" :to="{ name: 'components.edit', params: { component: item.id } }" class="shadow rounded overflow-hidden">
                    <div class="flex items-center justify-between gap-2 bg-blue-200 px-2 py-1">
                        <div class="flex flex-col">
                            <span class="font-semibold">{{ labelName(item.name) }}</span>
                        </div>
                    </div>
                    <component-floating-preview
                        :component="item" class="flex-1 overflow-hidden"
                    />
                </router-link>
            </div>
        </group>
    </div>
</template>

<style scoped lang="scss">
</style>
