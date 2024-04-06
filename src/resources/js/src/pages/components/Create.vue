<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import ComponentsForm from "./partials/Form.vue";
import { showToast } from '../../services/ToastService';
import { createComponent, mapWithoutSettingsData } from '../../services/ComponentService'
import { Variable } from "../../types/Variable";

const { t } = useI18n();
const router = useRouter();
const code = ref('<div>Create your new component</div>');
const variables = ref<Variable[]>([
    {type: 'text', name: '', default: ''},
]);
const name = ref('');

const save = () => {
    createComponent({
        html: code.value,
        variables: mapWithoutSettingsData(variables.value),
        name: name.value,
    })
    .then(() => {
        router.push({name: 'components.index'});
        showToast({
            title: t('toasts.success'),
            message: t('components.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('components.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <form class="overflow-hidden h-full flex flex-col" @submit.prevent="save">
        <div class="flex flex-col gap-4 mb-4 w-full">
            <h1 class="title">{{ $t('components.titles.createComponent') }}</h1>
            <div class="flex gap-2">
                <router-link class="button default" :to="{ name: 'components.index' }">{{ $t('buttons.back') }}</router-link>
                <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
            </div>
        </div>
        <components-form
            v-model:code="code"
            v-model:variables="variables"
            v-model:name="name"
        />
    </form>
</template>

<style scoped>

</style>
