<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getStyles, updateOrder } from '../../services/StyleService';
import { ListItem } from '../../types/List';
import { Style } from '../../types/Style';
import DraggableList from '../../components/DraggableList.vue';
import HeaderComponent from '../../components/layout/Header.vue';
import { compareStrings } from '../../utils/helpers';

const styles = ref<ListItem[]>([]);
const filter = ref<string>('');

const filteredStyles = computed(() => {
    return styles.value.filter((style) => {
        return compareStrings(style.name, filter.value);
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
    <div class="flex flex-col gap-4 h-full py-2">
        <header-component
            :title="$t('styles.titles.stylesList')"
            backName="dashboard"
            :backTitle="$t('buttons.back')"
            createName="styles.create"
            :createTitle="$t('styles.buttons.create')"
            :searchTitle="$t('placeholders.search')"
            v-model="filter"
        />
        <div class="flex-1 overflow-y-auto">
            <draggable-list
                class="md:w-1/5 grid gap-4"
                :list="filteredStyles"
                @update:list="saveOrder"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
