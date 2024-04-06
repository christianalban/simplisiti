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
const code = ref('');
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
        <div class="flex flex-col gap-4 mb-4 w-full">
            <h1 class="title">{{ $t('styles.titles.updateStyle') }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: 'styles.index' }">{{ $t('buttons.back') }}</router-link>
                <button @click="showDeleteDialog" type="button" class="button danger">{{ $t('buttons.delete') }}</button>
                <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
            </div>
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
