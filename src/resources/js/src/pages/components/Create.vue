<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import ComponentsForm from "./partials/Form.vue";
import { showToast } from '../../services/ToastService';
import { createComponent } from '../../services/ComponentService'
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
        variables: variables.value.filter(variable => variable.name !== ''),
        name: name.value,
    })
    .then(() => {
        router.push({name: 'components.index'});
        showToast({
            title: t('components.toasts.success'),
            message: t('components.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('components.toasts.error'),
            message: t('components.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <div class="flex gap-4 mb-4 w-full">
        <router-link class="button default" :to="{ name: 'components.index' }">{{ $t('buttons.back') }}</router-link>
        <h1 class="title">{{ $t('components.titles.createComponent') }}</h1>
        <button @click="save" type="button" class="button primary ml-auto">{{ $t('buttons.save') }}</button>
    </div>
    <components-form
        v-model:code="code"
        v-model:variables="variables"
        v-model:name="name"
        @save="save"
    />
</template>

<style scoped>

</style>
