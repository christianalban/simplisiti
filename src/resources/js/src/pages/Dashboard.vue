<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getComponents } from '../services/ComponentService';

const componentsCount = ref(0);
const toolLinks = [
    {
        name: 'components.index',
        title: 'titles.components',
    },
    {
        name: 'pages.index',
        title: 'titles.pages',
    },
];

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
                        <li v-for="{ name, title } of toolLinks" :key="name">
                            <router-link class="tool-link" :to="{ name  }">{{ $t(title) }}</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="title">{{ $t('titles.status') }}</h2>
                    <ul class="">
                        <li class="tool-status">
                            <fa-icon v-if="!componentsCount" class="text-yellow-500" icon="triangle-exclamation"/>
                            <fa-icon v-if="componentsCount" class="text-green-500" icon="check"/>
                            {{ $t('status.components', componentsCount) }}
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
