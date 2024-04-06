<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getStyles, updateOrder } from '../../services/StyleService';
import { ListItem } from '../../types/List';
import { Style } from '../../types/Style';
import DraggableList from '../../components/DraggableList.vue';

const styles = ref<ListItem[]>([]);

const saveOrder = (list: ListItem[]) => {
    const orderedList = list.map(({ id }, index) => ({
        id,
        order: index + 1,
    }));

    updateOrder(orderedList);
};

onMounted(() => {
    getStyles()
    .then((response) => {
        styles.value = response.data.data.map(({id, name, is_active}: Style) => ({
            id,
            name,
            url: { name: 'styles.edit', params: { style: id } },
            is_active,
        }));
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full overflow-y-auto py-2">
        <h1 class="title">{{ $t('styles.titles.stylesList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'styles.create' }">{{ $t('styles.buttons.create') }}</router-link>
        </div>
        <draggable-list
            class="md:w-1/5 grid gap-4"
            :list="styles"
            @update:list="saveOrder"
        />
    </div>
</template>

<style scoped lang="scss">
</style>
