<script setup lang="ts">
import { onMounted, ref } from 'vue';
import StylesForm from './partials/Form.vue';
import DialogComponent from '../../components/Dialog.vue';
import { useRoute, useRouter } from 'vue-router';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { deleteStyle, getStyle, updateStyle } from '../../services/StyleService';

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const code = ref('.custom-style {\n    color: red;\n}');
const name = ref('');
const showDialog = ref(false);
const isActive = ref(false);
const styleId = +route.params.style;

const update = () => {
    updateStyle({
        id: styleId,
        name: name.value,
        styles: code.value,
        is_active: Boolean(isActive.value),
    })
    .then(() => {
        router.push({name: 'styles.index'});
        showToast({
            title: t('toasts.success'),
            message: t('styles.toasts.updated'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('styles.toasts.errorUpdated'),
            type: 'error',
        });
    })
}

const showDeleteDialog = () => {
    showDialog.value = true;
}

const confirmDeleteStyle = () => {
    deleteStyle(styleId)
    .then(() => {
        router.push({name: 'styles.index'});
        showToast({
            title: t('toasts.success'),
            message: t('styles.toasts.deleted'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('styles.toasts.errorDeleted'),
            type: 'error',
        });
    })
}

onMounted(() => {
    getStyle(styleId)
    .then(({data}) => {
        const style = data.data;
        code.value = style.styles;
        name.value = style.name;
        isActive.value = style.is_active;
    })
})

</script>

<template>
    <form @submit.prevent="update">
        <div class="flex gap-4 mb-4 w-full">
            <router-link class="button default" :to="{ name: 'styles.index' }">{{ $t('buttons.back') }}</router-link>
            <h1 class="title">{{ $t('styles.titles.updateStyle') }}</h1>
            <button @click="showDeleteDialog" type="button" class="button danger ml-auto">{{ $t('buttons.delete') }}</button>
            <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
        </div>
        <styles-form
            v-model:code="code"
            v-model:name="name"
            v-model:isActive="isActive"
        />
    </form>
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('styles.dialogs.delete.title')"
        :message="$t('styles.dialogs.delete.message', { name: name })"
        @confirm="confirmDeleteStyle"
    />
</template>

<style scoped>

</style>
