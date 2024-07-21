<script setup lang="ts">
import { computed, PropType } from 'vue';
import { SpacingBorder, SpacingSteps, SpacingType } from '../../../../enginge/constants/Spacing';
import { SelectOption } from '../../../../enginge/constants/Select';
const { type } = defineProps({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String as PropType<SpacingType>,
        required: true,
    }
});

const computeSpacingOptions = (spacingBorder: SpacingBorder): SelectOption[] => {
    return SpacingSteps.map((step) => ({
        value: `sp-spacing__${type}-${spacingBorder}__${step}`,
        label: step,
    }));
};

const upSpacingOptions = computed(() => {
    return computeSpacingOptions('top');
});

const bottomSpacingOptions = computed(() => {
    return computeSpacingOptions('bottom');
});

const leftSpacingOptions = computed(() => {
    return computeSpacingOptions('left');
});

const rightSpacingOptions = computed(() => {
    return computeSpacingOptions('right');
});

</script>

<template>
    <div class="sp-spacing__container">
        <div>
            <h2>{{ title }}</h2>
        </div>
        <div class="sp-spacing__select-container">
            <div class="sp-spacing__select-item">
                <label>Arriba</label>
                <select>
                    <option value=""></option>
                    <option v-for="option in upSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="sp-spacing__select-item">
                <label>Abajo</label>
                <select>
                    <option value=""></option>
                    <option v-for="option in bottomSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="sp-spacing__select-item">
                <label>Izquierda</label>
                <select>
                    <option value=""></option>
                    <option v-for="option in leftSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="sp-spacing__select-item">
                <label>Derecha</label>
                <select>
                    <option value=""></option>
                    <option v-for="option in rightSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sp-spacing__select-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    .sp-spacing__select-item {
        display: flex;
        flex-direction: column;
    }
}
</style>
