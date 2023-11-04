<script setup lang="ts">
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
                            <fa-icon class="text-yellow-500" icon="triangle-exclamation"/>
                            {{ $t('status.components.warning') }}
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
