<script setup lang="ts">
import { PropType } from 'vue';
import { Variable } from '../../types/Variable';
import { SettingMenu } from '../../types/Setting';
import SettingForm from '../../pages/settings/partials/Form.vue';
// import ResourcePresetsSettings from '../../components/inputs/ResourcePresetsSettings.vue';
// import { ResourcePreset } from '../../types/Resource';

// const props = defineProps({
defineProps({
    variable: {
        type: [Object, null] as PropType<Variable | null>,
        required: true,
    },
    settings: {
        // type: Object as PropType<SettingMenu[]|ResourcePreset[]>,
        type: Object as PropType<SettingMenu[]>,
        required: true,
    },
});

const emit = defineEmits(['update:settings']);

// const emitResourceSettings = (settings: SettingMenu[]|ResourcePreset[]) => {
// const emitResourceSettings = (settings: SettingMenu[]) => {
//     if (props.variable) {
//         props.variable.settings = settings;
//         props.variable.applied_settings = settings;
//     }
//     emit('update:settings', settings);
// };
</script>

<template>
    <setting-form v-if="variable?.type === 'datasource'" :settingMenu="settings as SettingMenu[]" />
    <!--
    <resource-presets-settings v-else-if="variable?.type === 'resource'" :url="variable.value as string" :settings="settings as ResourcePreset[]" @update:settings="emitResourceSettings"/>
    -->
</template>

<style scoped>
</style>
