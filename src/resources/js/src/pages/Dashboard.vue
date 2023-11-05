<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getComponents } from '../services/ComponentService';
import { useI18n } from 'vue-i18n';

const componentsCount = ref(0);
const { t } = useI18n();

const componentsStatusMessage = computed(() => {
    if (componentsCount.value === 0) {
        return t('status.components.warning');
    }

    return t('status.components.success', { count: componentsCount.value });
});

onMounted(() => {
    getComponents()
    .then((response) => {
        componentsCount.value = response.data.data.length;
    });
});
</script>

<template>
    <div class="grid place-items-center h-full">
        <div class="dashboard w-full bg-white p-8">
            <div class="grid grid-cols-2 rounded-lg gap-4">
                <div>
                    <h2 class="title">{{ $t('titles.dashboard') }}</h2>
                    <ul class="border border-gray-200 rounded-lg">
                        <li>
                            <router-link class="tool-link" :to="{ name: 'components.index' }">{{ $t('titles.components') }}</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="title">{{ $t('titles.status') }}</h2>
                    <ul class="">
                        <li class="tool-status">
                            <fa-icon v-if="!componentsCount" class="text-yellow-500" icon="triangle-exclamation"/>
                            <fa-icon v-if="componentsCount" class="text-green-500" icon="check"/>
                            {{ componentsStatusMessage }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dashboard {
    max-width: 1000px;
}

li {
    @apply flex;
    .tool-link {
        @apply px-4 py-2 w-full transition;
        &:hover {
            @apply bg-gray-100;
            text-decoration: underline;
        }
    }

    &.tool-status {
        @apply flex items-center gap-2;
    }
}

.title {
    @apply text-lg font-bold mb-4;
}
</style>
