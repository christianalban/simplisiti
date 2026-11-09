<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import { SelectOption } from '../../../../engine/constants/Select';
import { propagateClassGroup, rgbaToHex } from '../../../../engine/helpers/HtmlAlias';
import {
    FontSize,
    FontStyle,
    FontWeight,
    fontSizeItems,
    fontStyleItems,
    fontWeightItems,
} from '../../../../engine/constants/Font';
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
const fontStyle = ref<string|null>(null);
const fontWeight = ref<string|null>(null);
const fontItalic = ref(false);
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

const fontStyleOptions = computed(() => {
    return fontStyleItems((step) => `sp-style__font-style__${step}`);
});

const fontWeightOptions = computed(() => {
    return fontWeightItems((step) => `sp-style__font-weight__${step}`);
});

const fontStyleIcons: Record<FontStyle, string> = {
    'normal': 'font',
    'line-through': 'strikethrough',
    'underline': 'underline',
};

const fontItalicClass = 'sp-style__font-style__italic';

const fontWeightLabels: Record<FontWeight, string> = {
    'thin': 'T',
    'normal': 'N',
    'bold': 'B',
};

const getFontStyleIcon = (value: string) => {
    const style = value.replace('sp-style__font-style__', '') as FontStyle;
    return fontStyleIcons[style];
};

const getFontWeightLabel = (value: string) => {
    const weight = value.replace('sp-style__font-weight__', '') as FontWeight;
    return fontWeightLabels[weight];
};

const getFontWeightClass = (value: string) => {
    const weight = value.replace('sp-style__font-weight__', '') as FontWeight;
    return {
        'thin': 'font-light',
        'normal': 'font-normal',
        'bold': 'font-bold',
    }[weight];
};

const propagateClassList = () => {
    fontSize.value = propagateGroup<FontSize>('sp-style__font-size__');
    fontStyle.value = props.spClassList.find((className) => [
        'sp-style__font-style__normal',
        'sp-style__font-style__line-through',
        'sp-style__font-style__underline',
    ].includes(className)) ?? null;
    fontWeight.value = propagateGroup<FontWeight>('sp-style__font-weight__');
    fontItalic.value = props.spClassList.includes(fontItalicClass);
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
        fontStyle.value,
        fontWeight.value,
        fontItalic.value ? fontItalicClass : null,
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
    <div class="space-y-3">
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Tamaño</label>
                <select
                    v-model="fontSize"
                    class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    @change="notifyClass"
                >
                    <option value=""></option>
                    <option v-for="option in fontSizeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Estilo</label>
                <div class="flex flex-nowrap gap-1">
                    <button
                        v-for="option in fontStyleOptions"
                        :key="option.value"
                        type="button"
                        :class="[
                            'wizard-icon-button rounded-md border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
                            { 'wizard-icon-button--selected': fontStyle === option.value }
                        ]"
                        :title="option.label"
                        :aria-label="option.label"
                        :aria-pressed="fontStyle === option.value"
                        @click="fontStyle = option.value; notifyClass()"
                    >
                        <div class="editor-icon-wrapper">
                            <fa-icon :icon="getFontStyleIcon(option.value)" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Ancho</label>
                <div class="flex flex-nowrap gap-1">
                    <button
                        v-for="option in fontWeightOptions"
                        :key="option.value"
                        type="button"
                        :class="[
                            'wizard-icon-button rounded-md border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
                            { 'wizard-icon-button--selected': fontWeight === option.value }
                        ]"
                        :title="option.label"
                        :aria-label="option.label"
                        :aria-pressed="fontWeight === option.value"
                        @click="fontWeight = option.value; notifyClass()"
                    >
                        <div class="editor-icon-wrapper">
                            <span
                                class="text-lg leading-none"
                                :class="getFontWeightClass(option.value)"
                            >
                                {{ getFontWeightLabel(option.value) }}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Italic</label>
                <div class="flex flex-nowrap gap-1">
                    <button
                        type="button"
                        class="wizard-icon-button rounded-md border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        :class="{ 'wizard-icon-button--selected': fontItalic }"
                        :title="'Italic'"
                        :aria-label="'Italic'"
                        :aria-pressed="fontItalic"
                        @click="fontItalic = !fontItalic; notifyClass()"
                    >
                        <div class="editor-icon-wrapper">
                            <fa-icon icon="italic" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Color {{ fontColor['color'] }}</label>
                <input
                    class="h-8 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-1 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    type="color"
                    v-model="fontColor['color']"
                    @change="notifyStyle"
                />
            </div>
        </div>
    </div>
</template>
