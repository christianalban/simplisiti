<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import { SelectOption } from '../../../../engine/constants/Select';
import { propagateClassGroup } from '../../../../engine/helpers/HtmlAlias';
import { FontSize, fontSizeItems } from '../../../../engine/constants/Font';

const props = defineProps({
    spClassList: {
        type: Array as PropType<string[]>,
        default: [],
    },
});

const fontSize = ref<FontSize|null>(null);

const propagateGroup = <T>(group: string) => {
    return propagateClassGroup<T>(group, props.spClassList);
}

const computeFontSizeOptions = (): SelectOption[] => {
    return fontSizeItems((step) => `sp-style__font-size__${step}`)
};

const fontSizeOptions = computed(() => {
    return computeFontSizeOptions();
});

const propagateClassList = () => {
    fontSize.value = propagateGroup<FontSize>('sp-style__font-size__');
}

const emit = defineEmits(['update']);

const notify = () => {
    const cleanedClassList = [
        fontSize.value,
    ].filter(item => item);

    emit('update', cleanedClassList);
}

onMounted(() => {
    propagateClassList();
    notify();
});

</script>

<template>
    <div class="sp-font__container">
        <div class="sp-font__select-container">
            <div class="sp-font__select-item">
                <label>Tamaño</label>
                <select v-model="fontSize" @change="notify">
                    <option value=""></option>
                    <option v-for="option in fontSizeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
        </div>
        <div class="sp-font__select-container">
            <div class="sp-font__select-item">
                <label>Color</label>
                <input class="sp-font__select-color" type="color" @change="notify" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.sp-font__select-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    .sp-font__select-item {
        display: flex;
        flex-direction: column;
    }

    .sp-font__select-color {
        height: 20px;
        width: 100%;
    }
}
</style>
