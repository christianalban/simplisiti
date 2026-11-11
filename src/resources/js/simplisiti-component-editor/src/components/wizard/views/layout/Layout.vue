<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import { DisplayType, FlexDirection, GridColumns, GridRows, GridType, HorizontalAligment, MAX_COL, MAX_ROW, VerticalAligment } from '../../../../engine/constants/Layout';
import { SelectOption } from '../../../../engine/constants/Select';
import { spacingItems, Spacings } from '../../../../engine/constants/Spacing';
import { propagateClassGroup } from '../../../../engine/helpers/HtmlAlias';

const props = defineProps({
    spClassList: {
        type: Array as PropType<string[]>,
        default: [],
    },
});

const display = ref<DisplayType|null>(null);
const horizontalAlignment = ref<HorizontalAligment|null>(null);
const verticalAlignment = ref<VerticalAligment|null>(null);
const flexDirection = ref<FlexDirection|null>(null);
const gridColumns = ref<GridColumns|null>(null);
const gridRows = ref<GridRows|null>(null);
const gapSpacing = ref<Spacings|null>(null);

const propagateGroup = <T>(group: string) => {
    return propagateClassGroup<T>(group, props.spClassList);
}

const computeGapOptions = (): SelectOption[] => {
    return spacingItems((step) => `sp-style__layout-gap__${step}`)
};

const gapSpacingOptions = computed(() => {
    return computeGapOptions();
});

const propagateClassList = () => {
    display.value = propagateGroup<DisplayType>('sp-style__layout-display__');
    horizontalAlignment.value = propagateGroup<HorizontalAligment>('sp-style__layout-justify-content__');
    verticalAlignment.value = propagateGroup<VerticalAligment>('sp-style__layout-align-items__');
    flexDirection.value = propagateGroup<FlexDirection>('sp-style__layout-flex-direction__');
    gridColumns.value = propagateGroup<GridColumns>('sp-style__layout-grid-template__columns-');
    gridRows.value = propagateGroup<GridRows>('sp-style__layout-grid-template__rows-');
    gapSpacing.value = propagateGroup<Spacings>('sp-style__layout-gap__');
}

const emit = defineEmits(['update:spClassList']);

const computeClassesFor = (gridType: GridType): number[] => {
    const maxOptions = gridType === 'rows' ? MAX_ROW : MAX_COL;

    const options = [];
    for (let i = 0; i < maxOptions; i++) {
        options.push(i + 1);
    }

    return options;
}

const columnsOptions = computed(() => computeClassesFor('columns'));
const rowsOptions = computed(() => computeClassesFor('rows'));

const notify = () => {
    const cleanedClassList = [
        display.value,
        horizontalAlignment.value,
        verticalAlignment.value,
        flexDirection.value,
        gridColumns.value,
        gridRows.value,
        gapSpacing.value,
    ].filter(item => item);

    emit('update:spClassList', cleanedClassList);
}

const horizontalAlignmentRotation = (index: number): string => {
    if (flexDirection.value === 'sp-style__layout-flex-direction__column') {
        return ['rotate-0', 'rotate-90', 'rotate-180', 'rotate-180'][index] || 'rotate-0';
    }

    return ['-rotate-90', 'rotate-0', 'rotate-90', 'rotate-90'][index] || 'rotate-0';
}

const verticalAlignmentRotation = (index: number): string => {
    if (flexDirection.value === 'sp-style__layout-flex-direction__column') {
        return ['-rotate-90', 'rotate-0', 'rotate-90'][index] || 'rotate-0';
    }

    return ['rotate-0', '-rotate-90', 'rotate-180'][index] || 'rotate-0';
}

const alignmentButtonClass = (isActive: boolean, rotation: string): string[] => [
    'wizard-icon-button cursor-pointer rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500',
    rotation,
    ...(isActive ? ['wizard-icon-button--selected'] : []),
];

onMounted(() => {
    propagateClassList();
    notify();
});

</script>

<template>
    <div class="space-y-3">
        <div class="flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
            <label class="inline-flex cursor-pointer items-center gap-1.5">
                <input class="accent-blue-600" type="radio" name="display" value="sp-style__layout-display__flex" v-model="display" @change="notify"/>
                <div class="editor-icon-wrapper">
                    <fa-icon icon="arrows-left-right" />
                </div>
                Flexible
            </label>
            <label class="inline-flex cursor-pointer items-center gap-1.5">
                <input class="accent-blue-600" type="radio" name="display" value="sp-style__layout-display__grid" v-model="display" @change="notify"/>
                <div class="editor-icon-wrapper">
                    <fa-icon icon="table-cells" />
                </div>
                Tabla
            </label>
        </div>
        <div class="space-y-3">
            <div class="flex flex-wrap gap-3" v-if="display === 'sp-style__layout-display__flex'">
                <div class="flex w-1/2 min-w-[8rem] flex-col gap-1">
                    <label class="text-xs font-semibold text-gray-700">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrow-down-wide-short" />
                            </div>
                            Dirección
                    </label>
                    <select
                        v-model="flexDirection"
                        class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        @change="notify"
                    >
                            <option value=""></option>
                            <option value="sp-style__layout-flex-direction__row">Fila</option>
                            <option value="sp-style__layout-flex-direction__column">Columna</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-wrap gap-3">
                <div class="flex w-1/2 min-w-[8rem] flex-col gap-1">
                    <label class="text-xs font-semibold text-gray-700">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrow-down-wide-short" />
                            </div>
                            Espaciado
                    </label>
                    <select
                        v-model="gapSpacing"
                        class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        @change="notify"
                    >
                            <option value=""></option>
                            <option v-for="option in gapSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2" v-if="display === 'sp-style__layout-display__grid'">
                <div class="flex flex-col gap-1">
                    <label class="text-xs font-semibold text-gray-700">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="grip" />
                            </div>
                            Columas
                    </label>
                    <select
                        v-model="gridColumns"
                        class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        @change="notify"
                    >
                            <option value=""></option>
                            <option v-for="option in columnsOptions" :key="`sp-style__layout-grid-template__columns-${option}`" :value="`sp-style__layout-grid-template__columns-${option}`">{{ option }}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-xs font-semibold text-gray-700">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="grip-vertical" />
                            </div>
                            Filas
                    </label>
                    <select
                        v-model="gridRows"
                        class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        @change="notify"
                    >
                            <option value=""></option>
                            <option v-for="option in rowsOptions" :key="`sp-style__layout-grid-template__rows-${option}`" :value="`sp-style__layout-grid-template__rows-${option}`">{{ option }}</option>
                    </select>
                </div>
            </div>
            <div class="space-y-2">
                <label class="text-xs font-semibold text-gray-700">{{ flexDirection === 'sp-style__layout-flex-direction__column' ? 'Vertical' : 'Horizontal' }}</label>
                <div class="flex w-full justify-start gap-4">
                    <label :class="alignmentButtonClass(horizontalAlignment === 'sp-style__layout-justify-content__start', horizontalAlignmentRotation(0))">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrows-up-to-line" />
                            </div>
                        <input class="sr-only" type="radio" name="horizontal" value="sp-style__layout-justify-content__start" v-model="horizontalAlignment" @change="notify"/>
                    </label>
                    <label :class="alignmentButtonClass(horizontalAlignment === 'sp-style__layout-justify-content__center', horizontalAlignmentRotation(1))">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrows-left-right-to-line" />
                            </div>
                        <input class="sr-only" type="radio" name="horizontal" value="sp-style__layout-justify-content__center" v-model="horizontalAlignment" @change="notify"/>
                    </label>
                    <label :class="alignmentButtonClass(horizontalAlignment === 'sp-style__layout-justify-content__end', horizontalAlignmentRotation(2))">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrows-up-to-line" />
                            </div>
                        <input class="sr-only" type="radio" name="horizontal" value="sp-style__layout-justify-content__end" v-model="horizontalAlignment" @change="notify"/>
                    </label>
                    <label
                        v-if="display === 'sp-style__layout-display__flex'"
                        :class="alignmentButtonClass(horizontalAlignment === 'sp-style__layout-justify-content__between', horizontalAlignmentRotation(3))"
                    >
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="bars" />
                            </div>
                        <input class="sr-only" type="radio" name="horizontal" value="sp-style__layout-justify-content__between" v-model="horizontalAlignment" @change="notify"/>
                    </label>
                </div>
            </div>
            <div class="space-y-2">
                <label class="text-xs font-semibold text-gray-700">{{ flexDirection === 'sp-style__layout-flex-direction__column' ? 'Horizontal' : 'Vertical' }}</label>
                <div class="flex w-full justify-start gap-4">
                    <label :class="alignmentButtonClass(verticalAlignment === 'sp-style__layout-align-items__start', verticalAlignmentRotation(0))">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrows-up-to-line" />
                            </div>
                        <input class="sr-only" type="radio" name="vertical" value="sp-style__layout-align-items__start" v-model="verticalAlignment" @change="notify"/>
                    </label>
                    <label :class="alignmentButtonClass(verticalAlignment === 'sp-style__layout-align-items__center', verticalAlignmentRotation(1))">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrows-left-right-to-line" />
                            </div>
                        <input class="sr-only" type="radio" name="vertical" value="sp-style__layout-align-items__center" v-model="verticalAlignment" @change="notify"/>
                    </label>
                    <label :class="alignmentButtonClass(verticalAlignment === 'sp-style__layout-align-items__end', verticalAlignmentRotation(2))">
                            <div class="editor-icon-wrapper">
                                <fa-icon icon="arrows-up-to-line" />
                            </div>
                        <input class="sr-only" type="radio" name="vertical" value="sp-style__layout-align-items__end" v-model="verticalAlignment" @change="notify"/>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
