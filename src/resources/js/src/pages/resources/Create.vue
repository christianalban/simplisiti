<script setup lang="ts">
import { ref } from 'vue';
import ResourcesForm from './partials/Form.vue';
import Modal from '../../components/Modal.vue';
import { createResource, createResourceBatch } from '../../services/ResourceService';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps({
    showModal: {
        type: Boolean,
        required: true,
    },
    uploadType: {
        type: String as PropType<ResourceUploadType>,
        default: 'single',
    },
});

const name = ref('');
const file = ref(undefined);

const emit = defineEmits(['created', 'update:showModal']);

const save = () => {
    const saveAction = props.uploadType === 'single' ? saveSingle : saveBatch;

    saveAction()
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('resources.toasts.created'),
            type: 'success',
        });
        emit('created');
        name.value = '';
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('resources.toasts.errorCreated'),
            type: 'error',
        });
    });
}

const saveSingle = () => createResource({
    name: name.value,
    file: file.value,
});

const saveBatch = () => createResourceBatch({
    file: file.value,
});

</script>

<template>
    <modal
        :title="$t('resources.titles.createResource')"
        :showModal="showModal"
        @close="$emit('update:showModal', false)"
        @confirm="save"
    >
        <resources-form
            v-model:name="name"
            v-model:file="file"
            :fileRequired="true"
            :uploadType="uploadType"
        />
    </modal>
</template>

<style scoped>

</style>
