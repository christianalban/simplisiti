<script setup lang="ts">
import { computed, PropType } from 'vue';
import { SpacingBorder, SpacingConfig, spacingItems, SpacingType } from '../../../../../engine/constants/Spacing';
import { SelectOption } from '../../../../../engine/constants/Select';
const { type, spacingConfig } = defineProps({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String as PropType<SpacingType>,
        required: true,
    },
    spacingConfig: {
        type: Object as PropType<SpacingConfig>,
        default: () => ({
            top: '',
            bottom: '',
            left: '',
            right: '',
        }),
    }
});

const emit = defineEmits(['update:spacingConfig']);

const computeSpacingOptions = (spacingBorder: SpacingBorder): SelectOption[] => {
    return spacingItems((step) => `sp-style__spacing-${type}-${spacingBorder}__${step}`);
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

const updateSpacingConfig = () => {
    emit('update:spacingConfig', spacingConfig);
};

</script>

<template>
    <div class="sp-spacing__container">
        <div>
            <h2>{{ title }}</h2>
        </div>
        <div class="sp-spacing__select-container">
            <div class="sp-spacing__select-item">
                <label>Arriba</label>
                <select v-model="spacingConfig.top" @change="updateSpacingConfig">
                    <option value=""></option>
                    <option v-for="option in upSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="sp-spacing__select-item">
                <label>Abajo</label>
                <select v-model="spacingConfig.bottom" @change="updateSpacingConfig">
                    <option value=""></option>
                    <option v-for="option in bottomSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="sp-spacing__select-item">
                <label>Izquierda</label>
                <select v-model="spacingConfig.left" @change="updateSpacingConfig">
                    <option value=""></option>
                    <option v-for="option in leftSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="sp-spacing__select-item">
                <label>Derecha</label>
                <select v-model="spacingConfig.right" @change="updateSpacingConfig">
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
