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

onMounted(() => {
    propagateClassList();
    notify();
});

</script>

<template>
    <div  class="sp-layout__container">
        <div class="sp-layout__header">
            <label>
                <input type="radio" name="display" value="sp-style__layout-display__flex" v-model="display" @change="notify"/>
                <fa-icon icon="arrows-left-right" />
                Flexible
            </label>
            <label>
                <input type="radio" name="display" value="sp-style__layout-display__grid" v-model="display" @change="notify"/>
                <fa-icon icon="table-cells" />
                Tabla
            </label>
        </div>
        <div class="sp-layout__body">
            <div class="sp-layout__body">
                <div class="sp-layout__flex-container" v-if="display === 'sp-style__layout-display__flex'">
                    <div class="sp-layout__grid-item sp-layout__flex-direction-container">
                        <label>
                            <fa-icon icon="arrow-down-wide-short" />
                            Dirección
                        </label>
                        <select v-model="flexDirection" @change="notify">
                            <option value=""></option>
                            <option value="sp-style__layout-flex-direction__row">Fila</option>
                            <option value="sp-style__layout-flex-direction__column">Columna</option>
                        </select>
                    </div>
                </div>
                <div class="sp-layout__gap-spacing-container">
                    <div class="sp-layout__grid-item sp-layout__gap-container">
                        <label>
                            <fa-icon icon="arrow-down-wide-short" />
                            Espaciado
                        </label>
                        <select v-model="gapSpacing" @change="notify">
                            <option value=""></option>
                            <option v-for="option in gapSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                        </select>
                    </div>
                </div>
                <div class="sp-layout__grid-container" v-if="display === 'sp-style__layout-display__grid'">
                    <div class="sp-layout__grid-item sp-layout__columns-container">
                        <label>
                            <fa-icon icon="grip" />
                            Columas
                        </label>
                        <select v-model="gridColumns" @change="notify">
                            <option value=""></option>
                            <option v-for="option in columnsOptions" :key="`sp-style__layout-grid-template__columns-${option}`" :value="`sp-style__layout-grid-template__columns-${option}`">{{ option }}</option>
                        </select>
                    </div>
                    <div class="sp-layout__grid-item sp-layout__rows-container">
                        <label>
                            <fa-icon icon="grip-vertical" />
                            Filas
                        </label>
                        <select v-model="gridRows" @change="notify">
                            <option value=""></option>
                            <option v-for="option in rowsOptions" :key="`sp-style__layout-grid-template__rows-${option}`" :value="`sp-style__layout-grid-template__rows-${option}`">{{ option }}</option>
                        </select>
                    </div>
                </div>
                <div :class="`sp-layout__horizontal-alignment-container ${flexDirection}`">
                    <label>{{ flexDirection === 'sp-style__layout-flex-direction__column' ? 'Vertical' : 'Horizontal' }}</label>
                    <div class="sp-layout__buttons-container">
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="arrows-up-to-line" />
                            <input type="radio" name="horizontal" value="sp-style__layout-justify-content__start" v-model="horizontalAlignment" @change="notify"/>
                        </label>
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="arrows-left-right-to-line" />
                            <input type="radio" name="horizontal" value="sp-style__layout-justify-content__center" v-model="horizontalAlignment" @change="notify"/>
                        </label>
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="arrows-up-to-line" />
                            <input type="radio" name="horizontal" value="sp-style__layout-justify-content__end" v-model="horizontalAlignment" @change="notify"/>
                        </label>
                        <label class="sp-layout__button__aligment" v-if="display === 'sp-style__layout-display__flex'">
                            <fa-icon icon="bars" />
                            <input type="radio" name="horizontal" value="sp-style__layout-justify-content__between" v-model="horizontalAlignment" @change="notify"/>
                        </label>
                    </div>
                </div>
                <div :class="`sp-layout__vertical-alignment-container ${flexDirection}`">
                    <label>{{ flexDirection === 'sp-style__layout-flex-direction__column' ? 'Horizontal' : 'Vertical' }}</label>
                    <div class="sp-layout__buttons-container">
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="arrows-up-to-line" />
                            <input type="radio" name="vertical" value="sp-style__layout-align-items__start" v-model="verticalAlignment" @change="notify"/>
                        </label>
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="arrows-left-right-to-line" />
                            <input type="radio" name="vertical" value="sp-style__layout-align-items__center" v-model="verticalAlignment" @change="notify"/>
                        </label>
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="arrows-up-to-line" />
                            <input type="radio" name="vertical" value="sp-style__layout-align-items__end" v-model="verticalAlignment" @change="notify"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sp-layout__container {
    .sp-layout__header {
        display: flex;
        gap: 1rem;
        label {
            [type="radio"] {
                margin-right: 0.5rem;
            }
        }
    }
}

.sp-layout__grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .sp-layout__grid-item {
        display: flex;
        flex-direction: column;
    }
}

.sp-layout__flex-direction-container,
.sp-layout__gap-container {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.sp-layout__horizontal-alignment-container {
    gap: 0.5rem;

    & > .sp-layout__buttons-container {
        & > .sp-layout__button__aligment:first-child {
            transform: rotate(-90deg);
        }
        & > .sp-layout__button__aligment:nth-child(3),
        & > .sp-layout__button__aligment:last-child {
            transform: rotate(90deg);
        }
    }

    &.sp-style__layout-flex-direction__column {
        & > .sp-layout__buttons-container {
            & > .sp-layout__button__aligment:first-child {
                transform: rotate(0deg);
            }
            & > .sp-layout__button__aligment:nth-child(2) {
                transform: rotate(90deg);
            }
            & > .sp-layout__button__aligment:nth-child(3),
            & > .sp-layout__button__aligment:last-child {
                transform: rotate(180deg);
            }
        }
    }
}

.sp-layout__vertical-alignment-container {
    gap: 0.5rem;

    & > .sp-layout__buttons-container {
        & > .sp-layout__button__aligment:nth-child(2) {
            transform: rotate(-90deg);
        }
        & > .sp-layout__button__aligment:last-child {
            transform: rotate(180deg);
        }
    }

    &.sp-style__layout-flex-direction__column {
        & > .sp-layout__buttons-container {
            & > .sp-layout__button__aligment:first-child {
                transform: rotate(-90deg);
            }
            & > .sp-layout__button__aligment:nth-child(2) {
                transform: rotate(0deg);
            }
            & > .sp-layout__button__aligment:last-child {
                transform: rotate(90deg);
            }
        }
    }
}

.sp-layout__buttons-container {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;

    & > .sp-layout__button__aligment {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        transition: background-color 0.3s;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        & > input[type="radio"] {
            display: none;
        }

        &:hover,
        &:has(input[type="radio"]:checked) {
            background-color: #f0f0f0;
        }
    }
}
</style>
