<script setup lang="ts">
import { PropType, computed } from 'vue';
import { DownloadFileOptions } from '../../types/Plugin';
import { sanitizeUrl, getPathFromPluginName } from '../../utils/helpers';
import { baseURL } from '../../axios';

const props = defineProps({
    data: {
        type: Object as PropType<DownloadFileOptions>,
    },
    plugin: {
        type: String,
    },
});

const linkUrl = computed(() => {
return `${baseURL}/${getPathFromPluginName(props.plugin as string)}${sanitizeUrl(props.data?.url ?? '#')}`;
});

</script>

<template>
    <a class="button secondary flex gap-2 w-full justify-center !p-1 relative items-center" :href="linkUrl" target="_download">
        <fa-icon :icon="['fas', 'download']" class="text-xl"/>
        <span>{{ $t('placeholders.download') }}</span>
    </a>
</template>

<style scoped>
</style>
