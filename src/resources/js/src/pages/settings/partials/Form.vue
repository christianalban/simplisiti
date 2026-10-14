<script setup lang="ts">
import { PropType } from 'vue';
import { SettingMenu } from '../../../types/Setting';
import ControlTypeSelector from "../../../components/inputs/ControlTypeSelector.vue";

defineProps({
    settingMenu: {
        type: Object as PropType<SettingMenu[]>,
        required: true,
    }
});

</script>

<template>
    <div class="flex flex-col gap-4 overflow-y-auto h-full">
        <div v-if="settingMenu.length" v-for="setting of settingMenu" class="flex flex-col gap-4">
            <h2 class="title" v-if="setting.label">{{ setting.label }}</h2>
            <p class="text-sm italic" v-if="setting.description">{{ setting.description }}</p>
            <div class="flex gap-4 w-full items-end flex-wrap">
                <div v-for="item of setting.items" class="flex flex-col gap-2 w-full">
                    <label class="font-bold">{{ item.label }} {{ item.required ? '*' : '' }}</label>
                    <p class="text-sm italic" v-if="item.description">{{ item.description }}</p>
                    <control-type-selector class="flex-1" v-model="item.value" :name="item.label" :type="item.type" :data="item.options"/>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-center">{{ $t('settings.placeholders.noSettings') }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
