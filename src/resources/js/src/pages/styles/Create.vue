<script setup lang="ts">
import { ref } from 'vue';
import StylesForm from './partials/Form.vue';
import { createStyle } from '../../services/StyleService';
import { useRouter } from 'vue-router';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();
const code = ref('.custom-style {\n    color: red;\n}');
const name = ref('');
const isActive = ref(true);

const save = () => {
    createStyle({
        name: name.value,
        styles: code.value,
        is_active: Boolean(isActive.value),
    })
    .then(() => {
        router.push({name: 'styles.index'});
        showToast({
            title: t('toasts.success'),
            message: t('styles.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('styles.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <form @submit.prevent="save">
        <div class="flex flex-col gap-4 mb-4 w-full">
            <h1 class="title">{{ $t('styles.titles.createStyle') }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: 'styles.index' }">{{ $t('buttons.back') }}</router-link>
                <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
            </div>
        </div>
        <styles-form
            v-model:code="code"
            v-model:name="name"
            v-model:isActive="isActive"
        />
    </form>
</template>

<style scoped>

</style>
