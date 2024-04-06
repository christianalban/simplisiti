<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScriptsForm from './partials/Form.vue';
import DialogComponent from '../../components/Dialog.vue';
import { useRoute, useRouter } from 'vue-router';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { deleteScript, getScript, updateScript } from '../../services/ScriptService';

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const code = ref('');
const name = ref('');
const showDialog = ref(false);
const isActive = ref(false);
const scriptId = +route.params.script;

const update = () => {
    updateScript({
        id: scriptId,
        name: name.value,
        scripts: code.value,
        is_active: Boolean(isActive.value),
    })
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('scripts.toasts.updated'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('scripts.toasts.errorUpdated'),
            type: 'error',
        });
    })
}

const showDeleteDialog = () => {
    showDialog.value = true;
}

const confirmDeleteScript = () => {
    deleteScript(scriptId)
    .then(() => {
        router.push({name: 'scripts.index'});
        showToast({
            title: t('toasts.success'),
            message: t('scripts.toasts.deleted'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('scripts.toasts.errorDeleted'),
            type: 'error',
        });
    })
}

onMounted(() => {
    getScript(scriptId)
    .then(({data}) => {
        const script = data.data;
        code.value = script.scripts;
        name.value = script.name;
        isActive.value = script.is_active;
    })
})

</script>

<template>
    <form @submit.prevent="update">
        <div class="flex flex-col gap-4 mb-4 w-full">
            <h1 class="title">{{ $t('scripts.titles.updateScript') }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: 'scripts.index' }">{{ $t('buttons.back') }}</router-link>
                <button @click="showDeleteDialog" type="button" class="button danger">{{ $t('buttons.delete') }}</button>
                <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
            </div>
        </div>
        <scripts-form
            v-model:code="code"
            v-model:name="name"
            v-model:isActive="isActive"
        />
    </form>
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('scripts.dialogs.delete.title')"
        :message="$t('scripts.dialogs.delete.message', { name: name })"
        @confirm="confirmDeleteScript"
    />
</template>

<style scoped>

</style>
