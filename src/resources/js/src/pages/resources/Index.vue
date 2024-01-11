<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { deleteResource, getResources } from '../../services/ResourceService';
import { Resource } from '../../types/Resource';
import CreateResource from './Create.vue';
import EditResource from './Edit.vue';
import DialogComponent from '../../components/Dialog.vue';
import ResourcePreview from '../../components/preview/ResourcePreview.vue';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
const resources = ref<Resource[]>([]);
const showCreateModal = ref(false);
const showEditModal = ref(false);
const showDeleteDialog = ref(false);
const selectedResource = ref<Resource|null>(null);
const { t } = useI18n();

const handleShowCreateModal = () => {
    showCreateModal.value = true;
}

const handleShowEditModal = () => {
    showEditModal.value = true;
}

const handleShowDeleteDialog = (resource: Resource) => {
    selectedResource.value = resource;
    showDeleteDialog.value = true;
}

const fetchResources = () => {
    getResources()
    .then((response) => {
        resources.value = response.data.data;
    });
}

const setSelectedResource = (resource: Resource) => {
    selectedResource.value = resource;
    handleShowEditModal();
}

const confirmDeleteResource = () => {
    if (!selectedResource.value || !selectedResource.value.id) {
        return;
    }

    deleteResource(selectedResource.value.id)
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('resources.toasts.deleted'),
            type: 'success',
        });
        fetchResources();
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('resources.toasts.errorDeleted'),
            type: 'error',
        });
    })
}

onMounted(() => {
    fetchResources();
});
</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <h1 class="title">{{ $t('resources.titles.resourcesList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <button type="button" class="button primary" @click="handleShowCreateModal">{{ $t('resources.buttons.create') }}</button>
        </div>
        <ul class="grid grid-cols-5 gap-4">
            <li v-for="resource of resources" class="flex">
                <div type="button" class="button primary w-full flex flex-col items-center justify-between">
                    <resource-preview :url="resource.url" />
                    <div class="flex w-full justify-between mt-4">
                        <span class="font-semibold">{{ resource.name }}</span>
                        <div class="flex gap-2">
                            <button @click="setSelectedResource(resource)">
                                <fa-icon icon="edit"/>
                            </button>
                            <button @click="handleShowDeleteDialog(resource)">
                                <fa-icon icon="trash" />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <create-resource
        v-model:showModal="showCreateModal"
        @created="fetchResources"
    />
    <edit-resource
        v-model:showModal="showEditModal"
        v-model:selectedResource="selectedResource"
        @updated="fetchResources"
    />
    <dialog-component
        v-model:showDialog="showDeleteDialog"
        :title="$t('resources.dialogs.delete.title')"
        :message="$t('resources.dialogs.delete.message', { name: selectedResource?.name || '' })"
        @confirm="confirmDeleteResource"
    />
</template>

<style scoped lang="scss">
</style>
