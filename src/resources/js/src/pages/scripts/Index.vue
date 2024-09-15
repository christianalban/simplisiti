<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getScripts, updateOrder } from '../../services/ScriptService';
import { Script } from '../../types/Script';
import { ListItem } from '../../types/List';
import DraggableList from '../../components/DraggableList.vue';
import { compareStrings } from '../../utils/helpers';
import HeaderComponent from '../../components/layout/Header.vue';

const scripts = ref<ListItem[]>([]);
const filter = ref<string>('');

const filteredScripts = computed(() => {
    return scripts.value.filter((script) => {
        return compareStrings(script.name, filter.value);
    });;
});

const saveOrder = (list: ListItem[]) => {
    const orderedList = list.map(({ id }, index) => ({
        id,
        order: index + 1,
    }));

    updateOrder(orderedList);
};

onMounted(() => {
    getScripts()
    .then((response) => {
        scripts.value = response.data.data.map(({id, name, is_active}: Script) => ({
            id,
            name,
            url: { name: 'scripts.edit', params: { script: id } },
            is_active,
        }));
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <header-component
            :title="$t('scripts.titles.scriptsList')"
            backName="dashboard"
            :backTitle="$t('buttons.back')"
            createName="scripts.create"
            :createTitle="$t('scripts.buttons.create')"
            :searchTitle="$t('placeholders.search')"
            v-model="filter"
        />
        <div class="flex-1 overflow-y-auto">
            <draggable-list
                class="md:w-1/5 grid gap-4"
                :list="filteredScripts"
                @update:list="saveOrder"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
