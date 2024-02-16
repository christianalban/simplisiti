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
                <h1 class="title">{{ title }}</h1>
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
    padding: 1rem;

    .toolbar-actions {
        display: flex;
        gap: 1rem;
        width: 100%;
        margin-bottom: 1rem;
        align-items: center;

        .title {
            margin-left: auto;
            font-style: italic;
        }

        .button-link {
            &:hover {
                text-decoration: underline;
            }

            &.danger {
                color: #e53e3e;
            }
        }
    }

    .toolbar-route {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        .toolbar-route-input {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            .label {
                font-weight: bold;
                padding-bottom: 0.5rem;
            }

            .input {
                padding: 0.25rem 0.5rem;
                border: 1px solid #d1d5db;
                border-radius: 0.25rem;
                width: 100%;
            }
        }
    }
}
</style>
