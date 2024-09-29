<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getSettings, updateSettings } from '../../services/SettingService';
import { showToast } from '../../services/ToastService';
import { SettingMenu } from '../../types/Setting';
import SettingForm from './partials/Form.vue';
import { useI18n } from 'vue-i18n';
import Tabs from '../../components/Tabs.vue';
import { Tab } from '../../types/Tab';

const settings = ref<SettingMenu[]>([]);
const { t } = useI18n();

const update = () => {
    const items = settings.value.flatMap(({items}) => items);
    updateSettings({ items })
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('settings.toasts.successUpdated'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('settings.toasts.errorUpdated'),
            type: 'error',
        });
    });
}

const tabs = computed<Tab<SettingMenu[]>[]>(():Tab<SettingMenu[]>[] => {
    return settings.value.map((setting) => ({
        title: setting.label,
        item: [setting],
    }));
});

onMounted(() => {
    getSettings()
    .then((response) => {
        settings.value = response.data.data;
    });
});
</script>

<template>
    <form @submit.prevent="update" class="flex flex-col gap-4 h-full py-2">
        <div class="flex flex-col md:flex-row w-full justify-between">
            <h1 class="title">{{ $t('settings.titles.settingsList') }}</h1>
            <div class="flex gap-2 mt-2 md:mt-4">
                <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
                <button type="submit" class="button primary ml-auto">{{ $t('buttons.save') }}</button>
            </div>
        </div>
        <div class="overflow-hidden flex-1">
            <tabs class="h-full" :tabs="tabs">
                <template #default="props">
                    <div class="px-4">
                        <setting-form :settingMenu="props.item.item" />
                    </div>
                </template>
            </tabs>
        </div>
    </form>
</template>

<style scoped lang="scss">
</style>
