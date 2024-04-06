<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getScripts, updateOrder } from '../../services/ScriptService';
import { Script } from '../../types/Script';
import { ListItem } from '../../types/List';
import DraggableList from '../../components/DraggableList.vue';

const scripts = ref<ListItem[]>([]);

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
    <div class="flex flex-col gap-4 h-full overflow-y-auto py-2">
        <h1 class="title">{{ $t('scripts.titles.scriptsList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'scripts.create' }">{{ $t('scripts.buttons.create') }}</router-link>
        </div>
        <draggable-list
            class="md:w-1/5 grid gap-4"
            :list="scripts"
            @update:list="saveOrder"
        />
    </div>
</template>

<style scoped lang="scss">
</style>
