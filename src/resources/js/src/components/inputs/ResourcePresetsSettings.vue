<script setup lang="ts">
import { PropType, ref } from 'vue';
import { ResourcePreset } from '../../types/Resource';
import { Cropper, CropperResult, TransformParams } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import PresetsList from './PresetsList.vue';
import PresetSettings from './PresetSettings.vue';

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    settings: {
        type: Array as PropType<ResourcePreset[]>,
        required: true,
    },
});

const emit = defineEmits(['update:settings']);

const selectedPreset = ref<ResourcePreset | null>(null);
const presetsList = ref<ResourcePreset[]>(props.settings);
const cropperElement = ref<any>(null);

const change = ({ coordinates }: CropperResult) => {
    if (!selectedPreset.value) {
        return;
    }
    selectedPreset.value.coordinates = coordinates;
    emit('update:settings', presetsList.value);
};

const defaultSize = ({ imageSize, visibleArea }: TransformParams) => {
    return {
        width: selectedPreset.value?.coordinates.width || (visibleArea || imageSize).width,
        height: selectedPreset.value?.coordinates.height || (visibleArea || imageSize).height,
    };
}

const defaultPosition = () => {
    return {
        left: selectedPreset.value?.coordinates.left || 0,
        top: selectedPreset.value?.coordinates.top || 0
    };
}

const setCoordinates = (coordinates: ResourcePreset['coordinates']) => {
    if (!selectedPreset.value) {
        return;
    }

    cropperElement.value.setCoordinates(coordinates);
    emit('update:settings', presetsList.value);
};

</script>

<template>
    <div class="flex gap-4">
        <div class="w-1/2">
            <img v-if="!selectedPreset" :src="url" class="w-full" />
            <cropper v-else
                ref="cropperElement"
                class="cropper"
                :debounce="100"
                :src="url"
                :default-position="defaultPosition"
                :default-size="defaultSize"
                @change="change"
            />
        </div>
        <div class="w-1/2">
            <presets-list
                v-if="!selectedPreset"
                v-model:presets="presetsList"
                v-model:selectedPreset="selectedPreset"
            />
            <preset-settings
                v-else
                v-model:preset="selectedPreset"
                @setCoordinates="setCoordinates"
            />
        </div>
    </div>
</template>

<style scoped>
</style>
