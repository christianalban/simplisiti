<script setup lang="ts">
import { onMounted, ref } from "vue";
import ComponentsForm from "./partials/Form.vue";
import DialogComponent from "../../components/Dialog.vue";
import { deleteComponent, getComponent, updateComponent } from "../../services/ComponentService";
import { useRoute, useRouter } from "vue-router";
import { Variable } from "../../types/Variable";
import { showToast } from "../../services/ToastService";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const code = ref('');
const name = ref('');
const showDialog = ref(false);
const variables = ref<Variable[]>([]);
const componentId = +route.params.component;

const update = () => {
    updateComponent({
        id: componentId,
        html: code.value,
        variables: variables.value.filter(variable => variable.name !== ''),
        name: name.value,
    })
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('components.toasts.updated'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('components.toasts.errorUpdated'),
            type: 'error',
        });
    })
}

const showDeleteDialog = () => {
    showDialog.value = true;
}

const confirmDeleteComponent = () => {
    deleteComponent(componentId)
    .then(() => {
        router.push({name: 'components.index'});
        showToast({
            title: t('toasts.success'),
            message: t('components.toasts.deleted'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('components.toasts.errorDeleted'),
            type: 'error',
        });
    })
}

onMounted(() => {
    getComponent(componentId, { 
        withData: true,
    }).then((response) => {
        const data = response.data.data;
        code.value = data.html;
        name.value = data.name;
        variables.value = data.variables.length ? data.variables : [{type: 'text', name: '', default: ''}];
    });
});

</script>

<template>
    <form @submit.prevent="update">
        <div class="flex gap-4 mb-4 w-full">
            <router-link class="button default" :to="{ name: 'components.index' }">{{ $t('buttons.back') }}</router-link>
            <h1 class="title">{{ $t('components.titles.editComponent') }}</h1>
            <button @click="showDeleteDialog" type="button" class="button danger ml-auto">{{ $t('buttons.delete') }}</button>
            <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
        </div>
        <components-form
            v-model:code="code"
            v-model:name="name"
            v-model:variables="variables"
        />
    </form>
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('components.dialogs.delete.title')"
        :message="$t('components.dialogs.delete.message', { name: name })"
        @confirm="confirmDeleteComponent"
    />
</template>

<style scoped>

</style>
