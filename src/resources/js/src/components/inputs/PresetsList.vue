<script setup lang="ts">
import { PropType, ref } from 'vue';
import { ResourcePreset } from '../../types/Resource';

const props = defineProps({
    presets: {
        type: Array as PropType<ResourcePreset[]>,
        required: true,
    },
    selectedPreset: {
        type: [Object, null] as PropType<ResourcePreset|null>,
        default: null,
    },
});

const emit = defineEmits(['update:presets', 'update:selectedPreset']);

const addPreset = () => {
    const newPreset = {
        breakpoint: 0,
        width: 0,
        height: 0,
        coordinates: {
            width: 0,
            height: 0,
            left: 0,
            top: 0,
        }
    };

    emit('update:presets', [...props.presets, newPreset]);
    emitSelectedPreset(newPreset);
};

const removePreset = (index: number) => {
    emit('update:presets', props.presets.filter((_, i) => i !== index));
};

const emitSelectedPreset = (preset: ResourcePreset) => {
    emit('update:selectedPreset', preset);
};

</script>

<template>
    <div class="w-full flex flex-col gap-2">
        <div class="flex flex-col max-h-[50vh] overflow-y-auto">
            <div v-if="presets.length" class="flex gap-2">
                <label class="font-bold">{{ $t('resources.labels.breakpoint') }}</label>
                <div class="w-12">&nbsp;</div>
                <div class="w-12">&nbsp;</div>
            </div>
            <div v-if="presets.length" v-for="(preset, index) of presets" class="flex gap-2 hover:bg-gray-100 p-2 transition-colors">
                <input type="text" class="input mr-auto" v-model="preset.breakpoint" :placeholder="$t('resources.labels.breakpoint')" required/>
                <button class="button primary" type="button" :title="$t('resources.labels.crop')" @click="emitSelectedPreset(preset)">
                    <fa-icon icon="crop" />
                </button>
                <button type="button" class="button danger" @click="removePreset(index)">
                    <fa-icon icon="minus" />
                </button>
            </div>
            <div v-else class="py-2 text-center">
                <p class="text-sm italic">{{ $t('resources.labels.noPresets') }}</p>
            </div>
        </div>
        <button type="button" class="w-full button primary" @click="addPreset">{{ $t('resources.buttons.addPreset') }}</button>
    </div>
</template>

<style scoped>
</style>
