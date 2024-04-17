<script setup lang="ts">
import { ref } from 'vue';
import { Section } from '../../types/Section';
import { createPage } from '../../services/PageService';
import FlowsForm from "./partials/Form.vue";
import { showToast } from '../../services/ToastService';
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { PageEditionMode } from '../../types/Page';

const name = ref('');
const url = ref('');
const title = ref('');
const sections = ref<Section[]>([]);
const router = useRouter();
const { t } = useI18n();
const pageEditionMode = ref<PageEditionMode>('adding-component');

const save = () => {
    createPage({
        name: name.value,
        url: url.value,
        sections: sections.value,
        title: title.value,
    })
    .then(() => {
        router.push({name: 'pages.index'});
        showToast({
            title: t('toasts.success'),
            message: t('pages.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('pages.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <form @submit.prevent="save">
        <div class="flex flex-col gap-4 mb-4 w-full">
            <h1 class="title">{{ $t('flows.titles.createFlow') }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: 'styles.index' }">{{ $t('buttons.back') }}</router-link>
                <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
            </div>
        </div>
        <flows-form
            v-model:sections="sections"
            v-model:pageEditionMode="pageEditionMode"
        />
    </form>

</template>

<style scoped>

</style>
