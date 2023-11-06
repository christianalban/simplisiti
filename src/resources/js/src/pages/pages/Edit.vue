<script setup lang="ts">
import PagesForm from "./partials/Form.vue";
import DialogComponent from "../../components/Dialog.vue";
import { onMounted, ref } from 'vue';
import { Section } from '../../types/Section';
import { Component } from '../../types/Component';
import { deletePage, getPage, updatePage } from '../../services/PageService';
import { showToast } from '../../services/ToastService';
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const name = ref('');
const url = ref('');
const showDialog = ref(false);
const sections = ref<Section[]>([]);
const pageId = +route.params.page;

const update = () => {
    updatePage({
        id: pageId,
        name: name.value,
        url: url.value,
        sections: sections.value,
    })
    .then(() => {
        router.push({name: 'pages.index'});
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

const mergeComponentsContent = (components: Component[]): Component[] => {
    return components.map((component) => {
        return {
            ...component,
            variables: component.variables.map((variable) => {
                return {
                    ...variable,
                    default: component.content[variable.name],
                }
            }),
        }
    });
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
    getPage(pageId).then((response) => {
        const page = response.data.data;
        name.value = page.name;
        url.value = page.url;
        sections.value = page.sections.map((section: Section) => {
            return {
                ...section,
                components: mergeComponentsContent(section.components),
            }
        });
    });
});

</script>

<template>
    <div class="flex gap-4 mb-4 w-full">
        <router-link class="button default" :to="{ name: 'pages.index' }">{{ $t('buttons.back') }}</router-link>
        <h1 class="title">{{ $t('pages.titles.editPage') }}</h1>
        <button @click="showDeleteDialog" type="button" class="button danger ml-auto">{{ $t('buttons.delete') }}</button>
        <button @click="update" type="button" class="button primary">{{ $t('buttons.save') }}</button>
    </div>
    <pages-form
        v-model:name="name"
        v-model:url="url"
        v-model:sections="sections"
    />
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('pages.dialogs.delete.title')"
        :message="$t('pages.dialogs.delete.message', { name: name })"
        @confirm="confirmDeleteComponent"
    />
</template>

<style scoped>

</style>
