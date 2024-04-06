<script setup lang="ts">
import { PropType } from 'vue';
import { SettingMenu } from '../../../types/Setting';

const props = defineProps({
    settingMenu: {
        type: Object as PropType<SettingMenu[]>,
        required: true,
    },
});

</script>

<template>
    <div class="flex flex-col gap-4 overflow-y-auto h-full">
        <div v-for="setting of props.settingMenu" class="flex flex-col gap-4">
            <h2 class="title">{{ setting.label }}</h2>
            <p class="text-sm italic" v-if="setting.description">{{ setting.description }}</p>
            <div class="grid gap-4 md:grid-cols-2">
                <div v-for="item of setting.items" class="flex flex-col gap-2">
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
    </div>
</template>

<style scoped>

</style>
