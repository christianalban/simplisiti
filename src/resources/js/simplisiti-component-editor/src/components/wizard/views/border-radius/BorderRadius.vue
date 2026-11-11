<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import { BorderRadiusConfig, BorderRadiusCorner, borderRadiusItems } from '../../../../engine/constants/BorderRadius';
import { Spacings } from '../../../../engine/constants/Spacing';
import { propagateClassGroup } from '../../../../engine/helpers/HtmlAlias';

const props = defineProps({
    spClassList: {
        type: Array as PropType<string[]>,
        default: [],
    },
});

const emit = defineEmits(['update:spClassList']);

const borderRadiusConfig = ref<BorderRadiusConfig>({
    'top-left': undefined,
    'top-right': undefined,
    'bottom-right': undefined,
    'bottom-left': undefined,
});

const corners: { key: BorderRadiusCorner; label: string }[] = [
    { key: 'top-left', label: 'Superior izquierda' },
    { key: 'top-right', label: 'Superior derecha' },
    { key: 'bottom-right', label: 'Inferior derecha' },
    { key: 'bottom-left', label: 'Inferior izquierda' },
];

const propagateGroup = <T>(corner: BorderRadiusCorner) => {
    return propagateClassGroup<T>(`sp-style__border-radius-${corner}__`, props.spClassList);
};

const propagateClassList = () => {
    for (const corner of corners) {
        borderRadiusConfig.value[corner.key] = propagateGroup<Spacings>(corner.key);
    }
};

const notify = () => {
    emit('update:spClassList', corners
        .map(({ key }) => borderRadiusConfig.value[key])
        .filter((item): item is Spacings => Boolean(item)));
};

onMounted(() => {
    propagateClassList();
    notify();
});
</script>

<template>
    <div class="space-y-3">
        <div>
            <h2 class="text-sm font-semibold text-gray-800">Redondeado</h2>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div
                v-for="corner of corners"
                :key="corner.key"
                class="flex flex-col gap-1"
            >
                <label class="text-xs font-semibold text-gray-700">{{ corner.label }}</label>
                <select
                    v-model="borderRadiusConfig[corner.key]"
                    class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    @change="notify"
                >
                    <option value=""></option>
                    <option
                        v-for="option in borderRadiusItems(corner.key)"
                        :key="option.value"
                        :value="option.value"
                    >
                        {{ option.label }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
