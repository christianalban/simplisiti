<script setup lang="ts">
import { ref } from 'vue';
import { Section } from '../../types/Section';
import { createPage } from '../../services/PageService';
import PageToolbar from './partials/PageToolbar.vue';
import PagesForm from "./partials/Form.vue";
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
        <page-toolbar
            :title="$t('pages.titles.createPage')"
            v-model:name="name"
            v-model:url="url"
            v-model:pageTitle="title"
            :pageEditionMode="pageEditionMode"
        />
        <pages-form
            v-model:sections="sections"
            v-model:pageEditionMode="pageEditionMode"
        />
    </form>

</template>

<style scoped>

</style>
