<script setup lang="ts" generic="T">
import { PropType, ref } from 'vue';
import { Tab } from '../types/Tab';
import { value } from '../utils/helpers';
import { getStorage, putStorage } from '../services/LocalStorageService';

const props = defineProps({
    tabs: {
        type: Array as PropType<Tab<T>[]>,
        default: [],
    },
    orientation: {
        type: String,
        default: 'horizontal',
    },
    collapsible: {
        type: Boolean,
        default: false,
    },
    collapseStorageKey: {
        type: String,
        default: 'tabs-collapsed',
    },
});

const activeTabIndex = ref(0);
const storedCollapsed = getStorage(props.collapseStorageKey, false);
const isCollapsed = ref(props.collapsible && (storedCollapsed === true || storedCollapsed === 'true'));

const toggleCollapsed = () => {
    if (!props.collapsible) {
        return;
    }

    isCollapsed.value = !isCollapsed.value;
    putStorage(props.collapseStorageKey, String(isCollapsed.value));
};

</script>

<template>
    <div :class="['tabs', orientation, 'min-w-0', {'collapsible': collapsible, 'collapsed': isCollapsed}]">
        <div class="tabs-sidebar">
            <div class="tabs-container flex overflow-y-auto rounded-lg bg-gray-100">
                <div :class="['tab', {'active': index === activeTabIndex}]" v-for="(tab, index) of tabs" :key="index" @click="activeTabIndex = index">
                    <span class="before"></span>
                    <fa-icon v-if="tab.icon" :icon="tab.icon" />
                    {{ tab.title }}
                    <span class="after"></span>
                </div>
            </div>
            <button
                v-if="collapsible"
                type="button"
                class="collapse-toggle"
                :aria-expanded="!isCollapsed"
                :aria-label="isCollapsed ? 'Expand tabs sidebar' : 'Collapse tabs sidebar'"
                :title="isCollapsed ? 'Expand tabs sidebar' : 'Collapse tabs sidebar'"
                @click="toggleCollapsed"
            >
                <fa-icon icon="arrow-left" :class="{ 'rotate-180': isCollapsed }" />
            </button>
        </div>
        <div class="overflow-y-auto flex-1 min-w-0 min-h-0 mt-2 md:mt-0">
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
.tabs {
    @apply flex;
}

.tabs-sidebar {
    @apply relative !h-full;
}

.collapse-toggle {
    @apply absolute right-0 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-gray-700 text-white shadow transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.collapse-toggle .fa-icon {
    @apply transition-transform;
}

.tab {
    @apply flex items-center justify-center gap-2 px-4 py-2 border-transparent transition-colors cursor-pointer bg-gray-100 min-w-[300px] relative;

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

    .tabs-sidebar {
        @apply w-full shrink-0 md:w-[300px] md:transition-[width] md:duration-300;
    }

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

.horizontal.collapsible {
    .tabs-sidebar {
        @apply transition-[height] duration-300 md:transition-[width] md:duration-300;
    }

    .tabs-container {
        @apply min-w-0 overflow-x-hidden transition-[opacity] duration-200 md:transition-[width,opacity] md:duration-300;
    }
}

.horizontal.collapsible.collapsed {
    .tabs-sidebar {
        @apply h-10 md:w-5;
    }

    .tabs-container {
        @apply pointer-events-none h-0 overflow-hidden opacity-0 md:w-0 md:min-w-0;
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
