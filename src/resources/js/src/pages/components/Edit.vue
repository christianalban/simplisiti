<script setup lang="ts">
import { onMounted, ref } from "vue";
import ComponentsForm from "./partials/Form.vue";
import DialogComponent from "../../components/Dialog.vue";
import { deleteComponent, getComponent, updateComponent, mapWithoutSettingsData } from "../../services/ComponentService";
import { useRoute, useRouter } from "vue-router";
import { showToast } from "../../services/ToastService";
import { useI18n } from "vue-i18n";
import { Component } from "../../types/Component";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const showDialog = ref(false);
const componentId = +route.params.component;
const component = ref<Component>({
    name: '',
    html: '',
    variables: []
});

const update = () => {
    updateComponent({
        id: componentId,
        html: component.value.html,
        variables: mapWithoutSettingsData(component.value.variables),
        name: component.value.name,
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
        withData: false,
    }).then((response) => {
        const data = response.data.data;
        // code.value = data.html;
        // name.value = data.name;
        // variables.value = data.variables.length ? data.variables : [{type: 'text', name: '', default: ''}];
        component.value = data;
    });
});

</script>

<template>
    <form class="overflow-hidden h-full flex flex-col" @submit.prevent="update">
        <div class="flex flex-col mb-4 w-full">
            <h1 class="title">{{ $t('components.titles.editComponent') }}</h1>
            <div class="flex gap-2 items-end">
                <div class="flex">
                    <router-link class="button default" :to="{ name: 'components.index' }">{{ $t('buttons.back') }}</router-link>
                </div>
                <div>
                    <button @click="showDeleteDialog" type="button" class="button danger">{{ $t('buttons.delete') }}</button>
                </div>
                <div>
                    <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
                </div>
                <div class="ml-auto flex flex-col gap-2 md:w-1/3">
                    <label class="label">{{ $t('components.labels.componentName') }}</label>
                    <input type="text" v-model="component.name" required class="input" :placeholder="$t('components.placeholders.componentName')"/>
                </div>
            </div>
        </div>
        <components-form
            v-model:code="component.html"
            v-model:variables="component.variables"
            :component="component"
        />
    </form>
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('components.dialogs.delete.title')"
        :message="$t('components.dialogs.delete.message', { name: component.name })"
        @confirm="confirmDeleteComponent"
    />
</template>

<style scoped>

</style>
