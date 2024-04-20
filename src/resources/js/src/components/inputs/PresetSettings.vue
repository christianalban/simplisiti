<script setup lang="ts">
import { PropType } from 'vue';
import { ResourcePreset } from '../../types/Resource';

const props = defineProps({
    preset: {
        type: Object as PropType<ResourcePreset>,
        required: true,
    },
});

const emit = defineEmits(['update:preset', 'setCoordinates']);

const back = () => {
    emit('update:preset', null);
};

const emitCoordinates = () => {
    emit('setCoordinates', props.preset.coordinates);
};

</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex gap-2">
            <button class="button default" @click="back">
                <fa-icon icon="arrow-left" />
            </button>
            <input type="number" class="input" v-model="preset.breakpoint" :placeholder="$t('resources.labels.breakpoint')" required/>
        </div>
        <hr>
        <h2 class="title">{{ $t('resources.labels.coordinates') }}</h2>
        <div class="grid grid-cols-2 gap-2">
            <div class="form-input">
                <label class="font-bold">{{ $t('resources.labels.top') }}</label>
                <input type="number" class="input" v-model="preset.coordinates.top" :placeholder="$t('resources.labels.top')" required @change="emitCoordinates"/>
            </div>
            <div class="form-input">
                <label class="font-bold">{{ $t('resources.labels.left') }}</label>
                <input type="number" class="input" v-model="preset.coordinates.left" :placeholder="$t('resources.labels.left')" required @change="emitCoordinates"/>
            </div>
            <div class="form-input">
                <label class="font-bold">{{ $t('resources.labels.width') }}</label>
                <input type="number" class="input" v-model="preset.coordinates.width" :placeholder="$t('resources.labels.width')" required @change="emitCoordinates"/>
            </div>
            <div class="form-input">
                <label class="font-bold">{{ $t('resources.labels.height') }}</label>
                <input type="number" class="input" v-model="preset.coordinates.height" :placeholder="$t('resources.labels.height')" required @change="emitCoordinates"/>
            </div>
        </div>
        <hr>
        <h2 class="title">{{ $t('resources.labels.size') }}</h2>
        <div class="grid grid-cols-2 w-full gap-2">
            <div class="form-input">
                <label class="font-bold">{{ $t('resources.labels.width') }}</label>
                <input type="number" class="input" v-model="preset.width" :placeholder="$t('resources.labels.width')" required/>
            </div>
            <div class="form-input">
                <label class="font-bold">{{ $t('resources.labels.height') }}</label>
                <input type="number" class="input" v-model="preset.height" :placeholder="$t('resources.labels.height')" required/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-input {
    @apply flex flex-col gap-2
}
</style>
