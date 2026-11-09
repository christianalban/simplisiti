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
