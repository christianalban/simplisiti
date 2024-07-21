<script setup lang="ts">
import { computed, ref } from 'vue';
import { DisplayType, GridType, MAX_COL, MAX_ROW } from '../../../../enginge/constants/Layout';

const display = ref<DisplayType|null>(null);

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

</script>

<template>
    <div  class="sp-layout__container">
        <div class="sp-layout__header">
            <label>
                <input type="radio" name="display" value="sp-layout-display-flex" v-model="display"/>
                <fa-icon icon="arrows-left-right" />
                Flexible
            </label>
            <label>
                <input type="radio" name="display" value="sp-layout-display-grid" v-model="display"/>
                <fa-icon icon="table-cells" />
                Tabla
            </label>
        </div>
        <div class="sp-layout__body">
            <div class="sp-layout__body">
                <div class="sp-layout__grid-container" v-if="display === 'sp-layout-display-grid'">
                    <div class="sp-layout__grid-item sp-layout__columns-container">
                        <label>
                            <fa-icon icon="grip" />
                            Columas
                        </label>
                        <select name="" id="">
                            <option value=""></option>
                            <option v-for="option in columnsOptions" :key="option" :value="`sp-layout-columns-${option}`">{{ option }}</option>
                        </select>
                    </div>
                    <div class="sp-layout__grid-item sp-layout__rows-container">
                        <label>
                            <fa-icon icon="grip-vertical" />
                            Filas
                        </label>
                        <select name="" id="">
                            <option value=""></option>
                            <option v-for="option in rowsOptions" :key="option" :value="`sp-layout-rows-${option}`">{{ option }}</option>
                        </select>
                    </div>
                </div>
                <div class="sp-layout__horizontal-alignment-container">
                    <label>Horizontal</label>
                    <div class="sp-layout__buttons-container">
                        <button>
                            <fa-icon icon="arrows-up-to-line" />
                        </button>
                        <button>
                            <fa-icon icon="arrows-left-right-to-line" />
                        </button>
                        <button>
                            <fa-icon icon="arrows-up-to-line" />
                        </button>
                    </div>
                </div>
                <div class="sp-layout__vertical-alignment-container">
                    <label>Vertical</label>
                    <div class="sp-layout__buttons-container">
                        <button>
                            <fa-icon icon="arrows-up-to-line" />
                        </button>
                        <button>
                            <fa-icon icon="arrows-left-right-to-line" />
                        </button>
                        <button>
                            <fa-icon icon="arrows-up-to-line" />
                        </button>
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
        & > button:first-child {
            transform: rotate(-90deg);
        }
        & > button:last-child {
            transform: rotate(90deg);
        }
    }
}

.sp-layout__vertical-alignment-container {
    gap: 0.5rem;

    & > .sp-layout__buttons-container {
        & > button:nth-child(2) {
            transform: rotate(-90deg);
        }
        & > button:last-child {
            transform: rotate(180deg);
        }
    }
}

.sp-layout__buttons-container {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;

    & > button {
        width: 2rem;
        height: 2rem;
        transition: background-color 0.3s;
        border-radius: 0.5rem;

        &:hover {
            background-color: #f0f0f0;
        }
    }
}
</style>
