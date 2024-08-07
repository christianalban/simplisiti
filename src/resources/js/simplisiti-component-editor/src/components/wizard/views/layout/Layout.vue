<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue';
import { DisplayType, GridType, HorizontalAligment, MAX_COL, MAX_ROW, VerticalAligment } from '../../../../enginge/constants/Layout';

const props = defineProps({
    spClassList: {
        type: Array as PropType<string[]>,
        default: [],
    },
});

const display = ref<DisplayType|null>(null);
const horizontalAlignment = ref<HorizontalAligment|null>(null);
const verticalAlignment = ref<VerticalAligment|null>(null);

const propagateClassList = () => {
    display.value = props.spClassList.find(item => item.startsWith('sp-style__layout-display__')) as DisplayType;
    horizontalAlignment.value = props.spClassList.find(item => item.startsWith('sp-style__layout-justify-content__')) as HorizontalAligment;
    verticalAlignment.value = props.spClassList.find(item => item.startsWith('sp-style__layout-align-items__')) as VerticalAligment;
}

const emit = defineEmits(['update']);

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
    ].filter(item => item);

    emit('update', cleanedClassList);
}

onMounted(() => {
    propagateClassList();
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
                <div class="sp-layout__grid-container" v-if="display === 'sp-style__layout-display__grid'">
                    <div class="sp-layout__grid-item sp-layout__columns-container">
                        <label>
                            <fa-icon icon="grip" />
                            Columas
                        </label>
                        <select name="" id="">
                            <option value=""></option>
                            <option v-for="option in columnsOptions" :key="option" :value="`sp-style__layout-columns__${option}`">{{ option }}</option>
                        </select>
                    </div>
                    <div class="sp-layout__grid-item sp-layout__rows-container">
                        <label>
                            <fa-icon icon="grip-vertical" />
                            Filas
                        </label>
                        <select name="" id="">
                            <option value=""></option>
                            <option v-for="option in rowsOptions" :key="option" :value="`sp-style__layout-rows__${option}`">{{ option }}</option>
                        </select>
                    </div>
                </div>
                <div class="sp-layout__horizontal-alignment-container">
                    <label>Horizontal</label>
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
                        <label class="sp-layout__button__aligment">
                            <fa-icon icon="bars" />
                            <input type="radio" name="horizontal" value="sp-style__layout-justify-content__between" v-model="horizontalAlignment" @change="notify"/>
                        </label>
                    </div>
                </div>
                <div class="sp-layout__vertical-alignment-container">
                    <label>Vertical</label>
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
