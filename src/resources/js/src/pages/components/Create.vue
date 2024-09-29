<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import ComponentsForm from "./partials/Form.vue";
import { showToast } from '../../services/ToastService';
import { createComponent, mapWithoutSettingsData } from '../../services/ComponentService'
import { Variable } from "../../types/Variable";
import { value } from '../../utils/helpers';

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

const setName = (event: Event) => {
    name.value = value(event.target)
}

</script>

<template>
    <form class="overflow-hidden h-full flex flex-col" @submit.prevent="save">
        <div class="flex flex-col mb-4 w-full">
            <h1 class="title">{{ $t('components.titles.createComponent') }}</h1>
            <div class="flex flex-col md:flex-row gap-2 items-end">
                <div class="flex w-full gap-2">
                    <div class="flex">
                        <router-link class="button default" :to="{ name: 'components.index' }">{{ $t('buttons.back') }}</router-link>
                    </div>
                    <div>
                        <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
                    </div>
                </div>
                <div class="ml-auto flex flex-col gap-2 md:w-1/3">
                    <label class="label">{{ $t('components.labels.componentName') }}</label>
                    <input type="text" :value="name" @input="setName" required class="input" :placeholder="$t('components.placeholders.componentName')"/>
                </div>
            </div>
        </div>
        <components-form
            v-model:code="code"
            v-model:variables="variables"
        />
    </form>
</template>

<style scoped>

</style>
