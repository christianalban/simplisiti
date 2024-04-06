<script setup lang="ts">
import { PropType, computed, ref } from 'vue';
import { FloatToolbarPosition } from '../types/FloatToolbar';
import { isMobileScreen } from '../utils/helpers.ts';

const props = defineProps({
    position: {
        type: String as PropType<FloatToolbarPosition>,
        default: 'top',
    },
    isInvisible: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    showLabel: {
        type: String as PropType<string>,
    },
    hiddeLabel: {
        type: String as PropType<string>,
    },
    canResize: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
});

const resizedWidth = ref(500);

defineEmits(['update:isInvisible']);

const isMobile = ref(isMobileScreen());

const positionClass = computed(() => {
    return `position-${props.position}-0`;
});

const flexDirectionClass = computed(() => {
    switch (props.position) {
        case 'left':
            return 'position-left';
        case 'right':
            return 'position-right';
        case 'top':
            return 'position-top';
        case 'bottom':
            return 'position-bottom';
    }
});

const startResize = (event: MouseEvent) => {
    const initialX = event.clientX;
    const initialWidth = resizedWidth.value;

    const handleMouseMove = (event: MouseEvent) => {
        const newWidth = props.position === 'left'
            ? initialWidth + (event.clientX - initialX)
            : initialWidth - (event.clientX - initialX);
        resizedWidth.value = newWidth < 200 ? 200 : newWidth;
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
};

const floatWidth = computed(() => {
    if (isMobile.value) {
        return '100%';
    }

    if (props.canResize && !props.isInvisible) {
        return `${resizedWidth.value}px`;
    }

    return `${ ['left', 'right'].includes(props.position) ? 'initial' : '100%'}`
});

</script>

<template>
    <div :style="{width: floatWidth}" :class="['float-toolbar', flexDirectionClass, positionClass, {
        'float-toolbar-top': position === 'top',
        'float-toolbar-right': ['left', 'right'].includes(position),
    }]">
        <div :class="['float-toolbar-container', { 'float-toolbar-container-vertical': ['top', 'bottom'].includes(position) }]">
            <div :class="['float-toolbar-accordion', {
                'float-toolbar-accordion-contracted': isInvisible,
                'float-toolbar-accordion-contracted-vertical': isInvisible && ['top', 'bottom'].includes(position),
                'float-toolbar-accordion-contracted-horizontal ': isInvisible && ['left', 'right'].includes(position),
            }]">
                <div :class="['float-toolbar-content', {
                    'rounded-top': position === 'top',
                    'rounded-bottom': position === 'bottom',
                    'rounded-left': position === 'left',
                    'rounded-right': position === 'right'
                }]">
                    <slot></slot>
                </div>
            </div>
            <div :class="['float-toolbar-buttons', {
                'float-toolbar-buttons-vertical': ['top', 'bottom'].includes(position),
                'float-toolbar-buttons-horizontal': ['left', 'right'].includes(position),
                left: position === 'left',
                right: position === 'right',
                bottom: position === 'bottom',
                top: position === 'top',
            }]">
                <button
                    :class="['float-toolbar-button', {
                        'vertical-mode': ['left', 'right'].includes(position),
                    }]"
                    type="button"
                    @click="$emit('update:isInvisible', !isInvisible)"
                >
                    <fa-icon :icon="isInvisible ? 'eye' : 'eye-slash'" />
                    {{ isInvisible ? showLabel || $t('buttons.show') : hiddeLabel || $t('buttons.hide') }}
                </button>
            </div>
        </div>
        <div
            v-if="canResize"
            class="border-l-2 border-l-gray-200 hover:border-l-blue-500 transition-colors h-full hover:cursor-col-resize"
            @mousedown.prevent.stop="startResize"
        ></div>
    </div>
</template>

<style scoped lang="scss">
.vertical-mode {
    writing-mode: vertical-lr;
    width: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.float-toolbar {
    @apply z-[100] fixed flex w-full md:max-w-[95vw];

    &.position-left {
        flex-direction: row;
        .float-toolbar-buttons {
            .float-toolbar-button {
                border-radius: 0 0.25rem 0.25rem 0;
            }
        }
    }

    &.position-right {
        flex-direction: row-reverse;
        .float-toolbar-buttons {
            .float-toolbar-button {
                border-radius: 0.25rem 0 0 0.25rem;
            }
        }
    }

    &.position-top {
        flex-direction: column;
        .float-toolbar-buttons {
            .float-toolbar-button {
                border-radius: 0 0 0.25rem 0.25rem;
            }
        }
    }

    &.position-bottom {
        flex-direction: column-reverse;
        .float-toolbar-buttons {
            .float-toolbar-button {
                border-radius: 0.25rem 0.25rem 0 0;
            }
        }
    }

    &.position-left-0 {
        left: 0;
    }

    &.position-right-0 {
        right: 0;
    }

    &.position-top-0 {
        top: 0;
    }

    &.position-bottom-0 {
        bottom: 0;
    }

    &.float-toolbar-top {
        width: 100%;
        max-width: 1366px;
    }

    &.float-toolbar-right {
        height: 100%;
    }

    .float-toolbar-container {
        @apply flex justify-center w-full;

        &.float-toolbar-container-vertical {
            @apply flex-col;
        }

        .float-toolbar-accordion {
            @apply w-full md:h-full;

            &.float-toolbar-accordion-contracted {
                @apply overflow-hidden;
            }

            &.float-toolbar-accordion-contracted-vertical {
                height: 0;
            }

            &.float-toolbar-accordion-contracted-horizontal {
                width: 0;
            }

            .float-toolbar-content {

                width: 100%;
                height: 100%;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                background-color: #f5f5f5;

                &.rounded-top {
                    border-radius: 0 0 0.5rem 0.5rem;
                }

                &.rounded-bottom {
                    border-radius: 0.5rem 0.5rem 0 0;
                }

                &.rounded-left {
                    border-radius: 0.5rem 0 0 0.5rem;
                }

                &.rounded-right {
                    border-radius: 0 0.5rem 0.5rem 0;
                }
            }
        }

        .float-toolbar-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;

            &.float-toolbar-buttons-vertical {
                width: 100%;
                .float-toolbar-button {
                    padding: 0.15rem 0.5rem;
                }

                &.bottom .float-toolbar-button {
                    top: -25px;
                }
            }

            &.float-toolbar-buttons-horizontal {
                flex-direction: column-reverse;
                padding-top: 1rem;

                .float-toolbar-button {
                    padding: 0.5rem 0.5rem;
                }

                &.right .float-toolbar-button {
                    left: -28px;
                }
            }

            .float-toolbar-button {
                @apply absolute bg-blue-100 text-sm gap-1;
            }
        }
    }
}
</style>
