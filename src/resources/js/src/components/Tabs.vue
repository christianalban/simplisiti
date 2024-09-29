<script setup lang="ts" generic="T">
import { PropType, ref } from 'vue';
import { Tab } from '../types/Tab';
import { value } from '../utils/helpers';

defineProps({
    tabs: {
        type: Array as PropType<Tab<T>[]>,
        default: [],
    },
    orientation: {
        type: String,
        default: 'horizontal',
    },
});

const activeTabIndex = ref(0);

</script>

<template>
    <div :class="`flex ${orientation}`">
        <div class="tabs-container flex overflow-y-auto rounded-lg bg-gray-100">
            <div :class="['tab', {'active': index === activeTabIndex}]" v-for="(tab, index) of tabs" :key="index" @click="activeTabIndex = index">
                <span class="before"></span>
                {{ tab.title }}
                <span class="after"></span>
            </div>
        </div>
        <div class="overflow-y-auto flex-1 mt-2 md:mt-0">
            <div v-for="(tab, index) of tabs" :class="{ 'h-full': index === activeTabIndex }">
                <div v-if="index === activeTabIndex" class="h-full">
                    <slot :item="tab"></slot>
                    <slot :item="tab" :name="tab.id || value(tab.title)"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab {
    @apply flex items-center justify-center px-4 py-2 border-transparent transition-colors cursor-pointer bg-gray-100 min-w-[300px] relative;

    &.active {
        @apply border-blue-500 bg-white;

        .before,
        .before::before,
        .after,
        .after::after {
            @apply w-4 h-4 absolute z-10 content-[''] bg-gray-100;
        }
    }

    &:hover {
        @apply border-blue-300 bg-gray-200 z-20;
    }
}

.vertical {
    @apply flex-col;

    .tabs-container {
        @apply flex-row;
    }

    .tab {
        @apply border-t-4;

        &.active {
            .before,
            .before::before,
            .after,
            .after::after {
                @apply bottom-0;
            }
            
            .before,
            .before::before {
                @apply left-0 rounded-br-lg;
            }

            .after,
            .after::after {
                @apply right-0 rounded-bl-lg;
            }

            .before {
                @apply -ml-4;
            }
            .after {
                @apply -mr-4;
            }
        }
    }
}

.horizontal {
    @apply flex-col md:flex-row;

    .tabs-container {
        @apply flex-col md:h-full;
    }

    .tab {
        @apply border-l-4;

        &.active {
            .before,
            .before::before,
            .after,
            .after::after {
                @apply right-0;
            }
            
            .before,
            .before::before {
                @apply top-0 rounded-br-lg;
            }

            .after,
            .after::after {
                @apply bottom-0 rounded-tr-lg;
            }

            .before {
                @apply -mt-4;
            }
            .after {
                @apply -mb-4;
            }
        }
    }
}

.vertical .tab,
.horizontal .tab {
    .before,
    .after {
        @apply transition-colors;
    }

    &.active {
        .before,
        .after {
            @apply rounded-none bg-white;
        }
    }

    &:hover {
        .before,
        .after {
            @apply bg-gray-200;
        }
    }
}
</style>
