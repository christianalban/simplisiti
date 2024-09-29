<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { deleteResource, deleteResourceBatch, getResources } from '../../services/ResourceService';
import { Resource } from '../../types/Resource';
import CreateResource from './Create.vue';
import EditResource from './Edit.vue';
import DialogComponent from '../../components/Dialog.vue';
import ResourcePreview from '../../components/preview/ResourcePreview.vue';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { ResourceUploadType } from '../../types/Resource';
import { compareStrings } from '../../utils/helpers';

const resources = ref<Resource[]>([]);
const showCreateModal = ref(false);
const showEditModal = ref(false);
const showDeleteDialog = ref(false);
const showDeleteBatchDialog = ref(false);
const selectedResource = ref<Resource|null>(null);
const { t } = useI18n();
const uploadType = ref<ResourceUploadType>('single');

const selectedResourcesIds = ref<number[]>([]);

const filter = ref<string>('');

const filteredResources = computed(() => {
    return resources.value.filter((resource) => {
        if (!resource.name) {
            return true;
        }

        return compareStrings(resource.name, filter.value);
    });
});

const emit = defineEmits(['update:modelValue']);

const handleShowCreateModal = () => {
    uploadType.value = 'single';
    showCreateModal.value = true;
}

const handleShowCreateBatchModal = () => {
    uploadType.value = 'batch';
    showCreateModal.value = true;
}

const handleShowEditModal = () => {
    showEditModal.value = true;
}

const handleShowDeleteDialog = (resource: Resource) => {
    selectedResource.value = resource;
    showDeleteDialog.value = true;
}

const handleShowDeleteBatchDialog = () => {
    showDeleteBatchDialog.value = true;
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

const copyLink = (resource: Resource) => {
    if (!resource.url) {
        return;
    }
    navigator.clipboard.writeText(resource.url)
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('resources.toasts.urlCopied'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('resources.toasts.urlErrorCopied'),
            type: 'error',
        });
    });
}

const confirmDeleteBatchResource = () => {
    if (selectedResourcesIds.value.length === 0) {
        return;
    }

    deleteResourceBatch(selectedResourcesIds.value)
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('resources.toasts.deleted'),
            type: 'success',
        });
        fetchResources();
        selectedResourcesIds.value = [];
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('resources.toasts.errorDeleted'),
            type: 'error',
        });
    })
}

const updateFilter = (event: Event) => {
    const element = event.target as HTMLInputElement;

    emit('update:modelValue', element.value);
}

onMounted(() => {
    fetchResources();
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="flex flex-col gap-2">
                <h1 class="title">{{ $t('resources.titles.resourcesList') }}</h1>
                <div class="flex gap-2">
                    <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
                    <button type="button" class="button primary" @click="handleShowCreateModal">{{ $t('resources.buttons.create') }}</button>
                    <button type="button" class="button primary" @click="handleShowCreateBatchModal">{{ $t('resources.buttons.createBatch') }}</button>
                    <button type="button" v-if="selectedResourcesIds.length" @click="handleShowDeleteBatchDialog" class="button danger">{{ $t('buttons.delete') }}</button>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="filter" class="title">{{ $t('placeholders.search') }}</label>
                <input v-model="filter" @input="$emit('update:modelValue', updateFilter)" type="search" id="filter" class="input" :placeholder="$t('placeholders.search')" />
            </div>
        </div>
        <ul class="grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-y-auto">
            <li v-for="resource of filteredResources" class="flex">
                <div type="button" class="rounded border-2 transition-colors border-blue-200 hover:border-blue-500 w-full flex flex-col items-center justify-between overflow-hidden aspect-square">
                    <div class="w-full flex-1 overflow-hidden">
                        <resource-preview :url="resource.url" />
                    </div>
                    <div class="flex gap-2 w-full h-10 justify-between bg-blue-100 p-2 text-xl md:text-base text-blue-900">
                        <label class="font-semibold flex gap-2 flex-1 text-ellipsis overflow-hidden">
                            <input type="checkbox" class="form-checkbox" :value="resource?.id" v-model="selectedResourcesIds"/>
                            {{ resource.name }}
                        </label>
                        <button @click="copyLink(resource)">
                            <fa-icon icon="link"/>
                        </button>
                        <button @click="setSelectedResource(resource)">
                            <fa-icon icon="edit"/>
                        </button>
                        <button @click="handleShowDeleteDialog(resource)">
                            <fa-icon icon="trash" />
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <create-resource
        v-model:showModal="showCreateModal"
        @created="fetchResources"
        :uploadType="uploadType"
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
    <dialog-component
        v-model:showDialog="showDeleteBatchDialog"
        :title="$t('resources.dialogs.delete.title')"
        :message="$t('resources.dialogs.delete.batchMessage')"
        @confirm="confirmDeleteBatchResource"
    />
</template>

<style scoped lang="scss">
</style>
