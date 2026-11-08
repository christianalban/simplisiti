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
    editable: {
        type: Boolean,
        default: true,
    },
});

const linkUrl = computed(() => {
    let prefix = '';
    if (props.plugin) {
        prefix = `${baseURL}/${getPathFromPluginName(props.plugin as string)}`;
    }
    return `${baseURL}/${prefix}${sanitizeUrl(props.data?.url ?? '#')}`;
});

const handleClick = (event: MouseEvent) => {
    if (!props.editable) {
        event.preventDefault();
    }
};

</script>

<template>
    <a class="button secondary flex gap-2 w-full justify-center !p-1 relative items-center" :href="linkUrl" target="_download" :aria-disabled="!editable" @click="handleClick">
        <fa-icon :icon="['fas', 'download']" class="text-xl"/>
        <span>{{ $t('placeholders.download') }}</span>
    </a>
</template>

<style scoped>
</style>
