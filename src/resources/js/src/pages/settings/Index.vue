<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getSettings, updateSettings } from '../../services/SettingService';
import { showToast } from '../../services/ToastService';
import { SettingMenu } from '../../types/Setting';
import SettingForm from './partials/Form.vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const settings = ref<SettingMenu[]>([]);
const router = useRouter();
const { t } = useI18n();

const update = () => {
    const items = settings.value.flatMap(({items}) => items);
    updateSettings({ items })
    .then(() => {
        router.push({name: 'dashboard'});
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

onMounted(() => {
    getSettings()
    .then((response) => {
        settings.value = response.data.data;
    });
});
</script>

<template>
    <form @submit.prevent="update" class="flex flex-col gap-4 h-full py-2">
        <h1 class="title">{{ $t('settings.titles.settingsList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <button type="submit" class="button primary ml-auto">{{ $t('buttons.save') }}</button>
        </div>
        <setting-form :settingMenu="settings" />
    </form>
</template>

<style scoped lang="scss">
</style>
