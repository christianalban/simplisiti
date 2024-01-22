<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Accordion from '../../../components/Accordion.vue'
import { computed, ref } from 'vue';
import { SyncStatus } from '../../../types/Plugin';
import { syncRepositories } from '../../../services/PluginService';

const isSyncing = ref(false)
const syncStatus = ref<SyncStatus>('no-synced');
const { t } = useI18n()
const codeLogs = ref(null)

defineProps({
    consoleLogs: {
        type: Array as () => string[],
        required: true,
    },
})

const emit = defineEmits(['synced', 'addLog', 'clearLogs'])

const syncStatusMessage = computed<string>(() => {
    switch (syncStatus.value) {
        case 'no-synced':
            return t('plugins.statusSync.sync');
        case 'synced':
            return t('plugins.statusSync.success');
        case 'syncing':
            return t('plugins.statusSync.syncing');
        case 'error':
            return t('plugins.statusSync.error');
    }
})

const addLog = (log: string) => {
    emit('addLog', log)
}

const scrollToEnd = () => {
    if (codeLogs.value) {
        const codeElement = codeLogs.value as HTMLElement
        codeElement.scrollTop = codeElement.scrollHeight + 100;
    }
}

const sync = () => {
    isSyncing.value = true
    syncStatus.value = 'syncing'
    addLog(syncStatusMessage.value)
    scrollToEnd()

    syncRepositories()
    .then((response) => {
        response.data.data.forEach((log: string) => {
            addLog(log)
        })
        syncStatus.value = 'synced'
        emit('synced')
    })
    .catch(() => {
        syncStatus.value = 'error'
    })
    .finally(() => {
        isSyncing.value = false
        addLog(syncStatusMessage.value)
        scrollToEnd()
    });
}

const clearLogs = () => {
    emit('clearLogs')
}

</script>

<template>
    <div class="px-4 py-2 flex bg-blue-200 rounded-lg">
        <accordion class="w-full">
            <template v-slot:title>
                <div class="inline w-full">
                    <button @click.prevent="sync" class="button secondary small">
                        <fa-icon v-if="isSyncing" class="animate-spin" icon="arrows-rotate" />
                        <fa-icon v-else icon="arrow-rotate-right" />
                    </button>
                    <button @click.prevent="clearLogs" class="ml-2 button default small">
                        <fa-icon icon="trash" />
                    </button>
                    <span class="ml-2 font-bold">{{ syncStatusMessage }}</span>
                </div>
            </template>
            <div class="flex w-full">
                <code ref="codeLogs" class="overflow-x-auto w-full h-60 bg-blue-100 mt-2 px-4 py-2 rounded-lg text-xs whitespace-pre-line" v-text="consoleLogs?.join('\n')"></code>
            </div>
        </accordion>
    </div>
</template>

<style scoped>
</style>
