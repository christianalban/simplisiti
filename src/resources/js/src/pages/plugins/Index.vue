<script setup lang="ts">
import Sync from './partials/Sync.vue'
import Wizzard from './partials/Wizzard.vue'
import RepositoriesModal from './partials/Repositories.vue'
import { onMounted, ref } from 'vue';
import { getPackages } from '../../services/PluginService';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { Plugin } from '../../types/Plugin';

const { t } = useI18n()
const showRepositoriesModal = ref(false)
const packagesList = ref([])
const consoleLogs = ref<string[]>([])

const getPackagesList = () => {
    getPackages()
    .then((response) => {
        packagesList.value = response.data.data
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('plugins.toasts.errorGetPackages'),
            type: 'error',
        });
    })
}

onMounted(() => {
    getPackagesList()
})

const installingPackageLog = ({ name }: Plugin) => {
    consoleLogs.value.push(t('plugins.labels.installingPackage', { name }))
}

const installedPackageLog = ({ name }: Plugin) => {
    consoleLogs.value.push(t('plugins.labels.installedPackage', { name }))
}

const uninstallingPackageLog = ({ name }: Plugin) => {
    consoleLogs.value.push(t('plugins.labels.uninstallingPackage', { name }))
}

const uninstalledPackageLog = ({ name }: Plugin) => {
    consoleLogs.value.push(t('plugins.labels.uninstalledPackage', { name }))
}

const errorPackageLog = ({ name }: Plugin) => {
    consoleLogs.value.push(t('plugins.labels.errorInstallingPackage', { name }))
}

</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2 overflow-hidden">
        <h1 class="title">{{ $t('plugins.titles.index') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <button class="button primary ml-auto" @click="showRepositoriesModal = true">{{ $t('plugins.buttons.repositories') }}</button>
        </div>
        <div class="grid grid-cols-1 gap-4">
            <sync
                :consoleLogs="consoleLogs"
                @synced="getPackagesList"
                @addLog="consoleLogs.push($event)"
                @clearLogs="consoleLogs = []"
            ></sync>
            <wizzard
                :plugins="packagesList"
                @installing="installingPackageLog($event)"
                @installed="installedPackageLog($event)"
                @uninstalling="uninstallingPackageLog($event)"
                @uninstalled="uninstalledPackageLog($event)"
                @error="errorPackageLog($event)"
            ></wizzard>
        </div>
    </div>
    <repositories-modal
        :showModal="showRepositoriesModal"
        @close="showRepositoriesModal = false"
    ></repositories-modal>
</template>

<style scoped lang="scss">
</style>
