<script setup lang="ts">
import { Plugin } from '../../../types/Plugin';
import { useI18n } from 'vue-i18n';
import { installPlugin, uninstallPlugin } from '../../../services/PluginService';
import { ref, defineProps, defineEmits, PropType } from 'vue';

const { t } = useI18n()

const props = defineProps({
    plugin: Object as PropType<Plugin>,
})

const emit = defineEmits(['installing', 'installed', 'uninstalling', 'uninstalled', 'error'])

const pluginStatus = ref(props.plugin.status);

const install = (plugin: Plugin) => {
    emit('installing', plugin)
    pluginStatus.value = 'installing'

    installPlugin(plugin.name)
    .then(() => {
        pluginStatus.value = 'enabled'
        emit('installed', plugin)
    })
    .catch(() => {
        pluginStatus.value = 'not-installed'
        emit('error', plugin)
    })
}

const uninstall = (plugin: Plugin) => {
    emit('uninstalling', plugin)
    pluginStatus.value = 'uninstalling'

    uninstallPlugin(plugin.name)
    .then(() => {
        pluginStatus.value = 'not-installed'
        emit('uninstalled', plugin)
    })
    .catch(() => {
        pluginStatus.value = 'enabled'
        emit('error', plugin)
    })
}

const excecute = (plugin: Plugin) => {
    switch (pluginStatus.value) {
        case 'not-installed':
            install(plugin)
            break;
        case 'enabled':
            uninstall(plugin)
            break;
    }
}

const buttonsLabelsMapping = {
    'not-installed': t('plugins.buttons.install'),
    'installing': t('plugins.buttons.installing'),
    'enabled': t('plugins.buttons.uninstall'),
    'uninstalling': t('plugins.buttons.uninstalling'),
}

const buttonColorMapping = {
    'not-installed': 'primary',
    'enabled': 'danger',
}

</script>

<template>
    <div class="flex w-full justify-between items-center hover:bg-gray-100 rounded-lg transition p-4">
        <div>
            <div class="flex items-end gap-2">
                <h2 class="title">{{ plugin.name }}</h2> <span class="text-gray-500">{{ plugin.version }}</span>
            </div>
            <span class="text-gray-500 text-sm">{{ plugin.author }}</span>
            <p class="text-gray-500">{{ plugin.description }}</p>
        </div>
        <button @click="excecute(plugin)" :class="['w-28 button', buttonColorMapping[pluginStatus]]" v-text="buttonsLabelsMapping[pluginStatus]"></button>
    </div>
</template>

<style scoped>
</style>
