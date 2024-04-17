<script setup lang="ts">
import PagesForm from "./partials/Form.vue";
import DialogComponent from "../../components/Dialog.vue";
import { onMounted, ref } from 'vue';
import { Section } from '../../types/Section';
import PageToolbar from './partials/PageToolbar.vue';
import { deletePage, getPage, updatePage } from '../../services/PageService';
import { showToast } from '../../services/ToastService';
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const name = ref('');
const url = ref('');
const title = ref('');
const showDialog = ref(false);
const sections = ref<Section[]>([]);
const pageId = +route.params.page;

const update = () => {
    updatePage({
        id: pageId,
        name: name.value,
        url: url.value,
        title: title.value,
        sections: sections.value,
    })
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('pages.toasts.updated'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('pages.toasts.errorUpdated'),
            type: 'error',
        });
    })
}

const showDeleteDialog = () => {
    showDialog.value = true;
}

const confirmDeleteComponent = () => {
    deletePage(pageId)
    .then(() => {
        router.push({name: 'pages.index'});
        showToast({
            title: t('toasts.success'),
            message: t('pages.toasts.deleted'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('pages.toasts.errorDeleted'),
            type: 'error',
        });
    })
}

onMounted(() => {
    getPage(pageId, {
        withData: true,
    }).then((response) => {
        const page = response.data.data;
        name.value = page.name;
        url.value = page.url;
        title.value = page.title;
        sections.value = page.sections;
    });
});

</script>

<template>
    <form @submit.prevent="update">
        <page-toolbar
            :title="$t('pages.titles.editPage')"
            :showDelete="true"
            @delete="showDeleteDialog"
            v-model:name="name"
            v-model:url="url"
            v-model:pageTitle="title"
        />
        <pages-form
            v-model:sections="sections"
        />
    </form>
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('pages.dialogs.delete.title')"
        :message="$t('pages.dialogs.delete.message', { name: name })"
        @confirm="confirmDeleteComponent"
    />
</template>

<style scoped>

</style>
