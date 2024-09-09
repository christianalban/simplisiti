<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import { SelectOption } from '../../../../engine/constants/Select';
import { propagateClassGroup, rgbaToHex } from '../../../../engine/helpers/HtmlAlias';
import { FontSize, fontSizeItems } from '../../../../engine/constants/Font';
import { StyleValue } from '../../../../engine/constants/WizardPages';

const props = defineProps({
    spClassList: {
        type: Array as PropType<string[]>,
        default: [],
    },
    spStyleList: {
        type: Object as PropType<StyleValue>,
        default: [],
    },
});

const fontSize = ref<FontSize|null>(null);
const fontColor = ref<StyleValue>(
    { 'color': '#000000' },
);

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

const propagateStyleList = () => {
    for (const key in props.spStyleList) {
        if (key === 'color') {
            fontColor.value['color'] = rgbaToHex(props.spStyleList[key]);
        }
    }
}

const emit = defineEmits(['update:spClassList', 'update:spStyleList']);

const notifyClass = () => {
    const cleanedClassList = [
        fontSize.value,
    ].filter(item => item);

    emit('update:spClassList', cleanedClassList);
}

const notifyStyle = () => {
    const cleanedStyleList: StyleValue = {
        'color': fontColor.value['color']
    }

    emit('update:spStyleList', cleanedStyleList);
}

onMounted(() => {
    propagateClassList();
    propagateStyleList();
    notifyClass();
});

</script>

<template>
    <div class="sp-font__container">
        <div class="sp-font__select-container">
            <div class="sp-font__select-item">
                <label>Tamaño</label>
                <select v-model="fontSize" @change="notifyClass">
                    <option value=""></option>
                    <option v-for="option in fontSizeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
        </div>
        <div class="sp-font__select-container">
            <div class="sp-font__select-item">
                <label>Color {{ fontColor['color'] }}</label>
                <input class="sp-font__select-color" type="color" v-model="fontColor['color']" @change="notifyStyle" />
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

    .sp-font__select-item__full {
        grid-column: 1 / span 2;
    }

    .sp-font__select-color {
        height: 20px;
        width: 100%;
    }
}
</style>
