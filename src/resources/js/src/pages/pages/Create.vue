<script setup lang="ts">
import PagesForm from "./partials/Form.vue";
import { ref } from 'vue';
import { Section } from '../../types/Section';
import { createPage } from '../../services/PageService';
import { showToast } from '../../services/ToastService';
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const name = ref('');
const url = ref('');
const title = ref('');
const sections = ref<Section[]>([]);
const router = useRouter();
const { t } = useI18n();

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
    <div class="flex gap-4 mb-4 w-full">
        <router-link class="button default" :to="{ name: 'pages.index' }">{{ $t('buttons.back') }}</router-link>
        <h1 class="title">{{ $t('pages.titles.createPage') }}</h1>
        <button @click="save" type="button" class="button primary ml-auto">{{ $t('buttons.save') }}</button>
    </div>
    <pages-form
        v-model:name="name"
        v-model:url="url"
        v-model:sections="sections"
        v-model:title="title"
    />

</template>

<style scoped>

</style>
