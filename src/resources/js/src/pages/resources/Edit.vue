<script setup lang="ts">
import { PropType, ref, toRefs, watch } from 'vue';
import ResourcesForm from './partials/Form.vue';
import Modal from '../../components/Modal.vue';
import { updateResource } from '../../services/ResourceService';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { Resource } from '../../types/Resource';

const { t } = useI18n();
const props = defineProps({
    selectedResource: {
        type: [Object, null] as PropType<Resource|null>,
        required: true,
    },
    showModal: {
        type: Boolean,
        required: true,
    },
});

const name = ref('');
const file = ref(undefined);

const emit = defineEmits(['updated', 'update:selectedResource', 'update:showModal']);

const update = () => {
    if (!selectedResource.value) {
        return;
    }
    updateResource({
        id: selectedResource.value.id,
        name: name.value,
        file: file.value,
    })
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('resources.toasts.created'),
            type: 'success',
        });
        emit('updated');
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

const { selectedResource } = toRefs(props);

const handleCloseModal = () => {
    emit('update:selectedResource', null);
    emit('update:showModal', false)
}

watch(selectedResource, (selectedResource) => {
    name.value = selectedResource?.name || '';
});

</script>

<template>
    <modal
        :title="$t('resources.titles.updateResource')"
        :showModal="showModal"
        @close="handleCloseModal"
        @confirm="update"
    >
        <resources-form
            v-model:name="name"
            v-model:file="file"
        />
    </modal>
</template>

<style scoped>

</style>
