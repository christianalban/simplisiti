<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import ComponentsForm from "./partials/Form.vue";
import ComponentsHeader from "./partials/Header.vue";
import axios from "axios";
import { showToast } from '../../services/ToastService';

const { t } = useI18n();
const router = useRouter();
const code = ref('<div>Create your new component</div>');
const variables = ref([
    {type: 'text', name: '', default: ''},
]);
const name = ref('');

const save = () => {
    axios.post('component', {
        html: code.value,
        variables: variables.value.filter(variable => variable.name !== ''),
        name: name.value,
    })
    .then(response => {
        router.push({name: 'components.index'});
        showToast({
            title: t('components.toasts.success.title'),
            message: t('components.toasts.success.message'),
            type: 'success',
        });
    })
}

</script>

<template>
    <components-header title="components.titles.createComponent"/>
    <components-form
        v-model:code="code"
        v-model:variables="variables"
        v-model:name="name"
        @save="save"
    />
</template>

<style scoped>

</style>
