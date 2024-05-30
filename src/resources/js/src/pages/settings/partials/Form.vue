<script setup lang="ts">
import { PropType } from 'vue';
import { SettingMenu } from '../../../types/Setting';

defineProps({
    settingMenu: {
        type: Object as PropType<SettingMenu[]>,
        required: true,
    },
    expanded: {
        type: Boolean,
        default: false,
    },
});

</script>

<template>
    <div class="flex flex-col gap-4 overflow-y-auto h-full">
        <div v-if="settingMenu.length" v-for="setting of settingMenu" class="flex flex-col gap-4">
            <h2 class="title" v-if="setting.label">{{ setting.label }}</h2>
            <p class="text-sm italic" v-if="setting.description">{{ setting.description }}</p>
            <div class="flex gap-4 w-full items-end flex-wrap">
                <div v-for="item of setting.items" :class="`flex flex-col gap-2 ${expanded ? 'w-full' : 'w-1/2'}`">
                    <label class="font-bold">{{ item.label }} {{ item.required ? '*' : '' }}</label>
                    <p class="text-sm italic" v-if="item.description">{{ item.description }}</p>
                    <input v-if="item.type === 'text' || item.type === 'number' " :type="item.type" class="input" v-model="item.value" :placeholder="item.label" :required="item.required"/>
                    <textarea v-else-if="item.type === 'textarea'" class="input" v-model="item.value" :placeholder="item.label" :required="item.required"/>
                    <select v-else-if="item.type === 'select'" class="input" v-model="item.value" :required="item.required">
                        <option :value="null">{{ $t('placeholders.select') }}</option>
                        <option v-for="option of item.data" :value="option.value">{{ option.label }}</option>
                    </select>
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
