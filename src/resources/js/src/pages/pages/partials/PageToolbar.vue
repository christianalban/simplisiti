<script setup lang="ts">
import FloatToolbar from '../../../components/FloatToolbar.vue';
import { ref } from 'vue';
import { value, inputValue } from '../../../utils/helpers';

defineProps({
    showDelete: Boolean,
    title: String,
    name: {
        type: String,
        default: '',
    },
    url: {
        type: String,
        default: '',
    },
    pageTitle: {
        type: String,
        default: '',
    },
    pageEditionMode: {
        type: String,
        default: 'adding-component',
    },
})

defineEmits(['delete', 'update:name', 'update:pageTitle', 'update:url'])

const isInvisible = ref(true);

</script>

<template>
    <float-toolbar v-model:isInvisible="isInvisible" :showLabel="$t('pages.buttons.settings')">
        <div class="toolbar-container">
            <div class="toolbar-actions">
                <router-link class="button-link" :to="{ name: 'pages.index' }">
                    <fa-icon icon="arrow-left" />
                    {{ $t('buttons.back') }}
                </router-link>
                <button v-if="showDelete" @click="$emit('delete')" type="button" class="button-link danger">{{ $t('buttons.delete') }}</button>
                <button type="submit" class="button-link">{{ $t('buttons.save') }}</button>
                <h1 class="title">
                    {{ title }}
                    <a v-if="showDelete" :href="url" target="_blank">
                        <fa-icon icon="external-link-alt" />
                    </a>
                </h1>
            </div>
            <div class="toolbar-route">
                <div class="toolbar-route-input">
                    <label class="label">{{ $t('pages.labels.pageName') }}</label>
                    <input class="input" type="text" required :value="name" @input="$emit('update:name', value($event.target))" :placeholder="$t('pages.placeholders.pageName')"/>
                </div>
                <div class="toolbar-route-input">
                    <label class="label">{{ $t('pages.labels.pageTitle') }}</label>
                    <input class="input" type="text" :value="pageTitle" @input="$emit('update:pageTitle', inputValue($event.target))" :placeholder="$t('pages.placeholders.pageTitle')"/>
                </div>
                <div class="toolbar-route-input">
                    <label class="label">{{ $t('pages.labels.pageUrl') }}</label>
                    <input class="input" type="text" :value="url" @input="$emit('update:url', value($event.target))" :placeholder="$t('pages.placeholders.pageUrl')"/>
                </div>
            </div>
        </div>
    </float-toolbar>
</template>

<style scoped lang="scss">
.toolbar-container {
    @apply p-4;

    .toolbar-actions {
        @apply flex gap-2 w-full mb-4 items-center;

        .title {
            @apply ml-auto italic;

            a {
                @apply ml-2 text-sm text-blue-500;
            }
        }

        .button-link {
            &:hover {
                @apply underline;
            }

            &.danger {
                @apply text-red-600;
            }
        }
    }

    .toolbar-route {
        @apply grid grid-cols-3 gap-4;

        .toolbar-route-input {
            @apply flex flex-col gap-1;

            .label {
                @apply font-bold pb-2;
            }

            .input {
                @apply px-2 py-1 rounded-md w-full border border-gray-300;
            }
        }
    }
}
</style>
