<script setup lang="ts">
import { ref } from 'vue';
import ScriptsForm from './partials/Form.vue';
import { createScript } from '../../services/ScriptService';
import { useRouter } from 'vue-router';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();
const code = ref('alert("Hello World")');
const name = ref('');
const isActive = ref(true);

const save = () => {
    createScript({
        name: name.value,
        scripts: code.value,
        is_active: Boolean(isActive.value),
    })
    .then(() => {
        router.push({name: 'scripts.index'});
        showToast({
            title: t('toasts.success'),
            message: t('scripts.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('scripts.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <form @submit.prevent="save">
        <div class="flex gap-4 mb-4 w-full">
            <router-link class="button default" :to="{ name: 'scripts.index' }">{{ $t('buttons.back') }}</router-link>
            <h1 class="title">{{ $t('scripts.titles.createScript') }}</h1>
            <button type="submit" class="button primary ml-auto">{{ $t('buttons.save') }}</button>
        </div>
        <scripts-form
            v-model:code="code"
            v-model:name="name"
            v-model:isActive="isActive"
        />
    </form>
</template>

<style scoped>

</style>
