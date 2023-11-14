<script setup lang="ts">
import { ref } from 'vue';
import ResourcesForm from './partials/Form.vue';
import Modal from '../../components/Modal.vue';
import { createResource } from '../../services/ResourceService';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
defineProps({
    showModal: {
        type: Boolean,
        required: true,
    }
});

const name = ref('');
const file = ref(undefined);

const emit = defineEmits(['created', 'update:showModal']);

const save = () => {
    createResource({
        name: name.value,
        file: file.value,
    })
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
    })
}

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
        />
    </modal>
</template>

<style scoped>

</style>
