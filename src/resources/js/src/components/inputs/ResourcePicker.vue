<script setup lang="ts">
import Modal from "../Modal.vue";
import { ref, computed, PropType } from "vue";
import { useResources } from "../../services/ResourceService";
import { DataTableValue } from "../../types/DataTable";
import ResourcePreview from '../../components/preview/ResourcePreview.vue';

const props = defineProps({
    modelValue: {
        type: [Number, String, Object, undefined] as PropType<number | string | DataTableValue | undefined>,
        required: true,
    },
});

const showModal = ref(false);

const { resources, loadResources } = useResources();

const selectedResource = computed(() => {
    return resources.value.find((resource) => resource.id === props.modelValue);
});

const emit = defineEmits(['update:modelValue']);

const handleShowModal = () => {
    showModal.value = true;
};

const handleSelectResource = (resourceId: number) => {
    emit('update:modelValue', resourceId);
    showModal.value = false;
};

const refreshResources = () => {
    loadResources();
};

</script>

<template>
    <button @click="handleShowModal" type="button" class="button secondary picker-button-container">
        <div class="picker-button-preview">
            <resource-preview :url="selectedResource?.url" />
        </div>
        <span class="picker-button-placeholder">{{ selectedResource ? $t('components.buttons.changeResource') : $t('components.buttons.selectResource') }}</span>
    </button>
    <modal
        :title="$t('components.titles.selectResource')"
        v-model:showModal="showModal"
        :showCancel="false"
        :confirmLabel="$t('buttons.close')"
    >
        <div>
            <button type="button" @click="refreshResources" class="button secondary picker-refresh-button">
                <fa-icon icon="arrow-rotate-right" />
                {{ $t('components.buttons.refresh') }}
            </button>
        </div>
        <div class="grid grid-cols-3 gap-2">
            <button type="button" @click="handleSelectResource(resource.id as number)" v-for="resource of resources" class="button primary flex flex-col gap-2 justify-center items-center">
                <resource-preview :url="resource.url" />
                <span>{{ resource.name }}</span>
            </button>
        </div>
    </modal>
</template>

<style scoped>
.picker-button-container {
    @apply flex gap-2 w-full flex-col justify-start !p-1 relative items-center;

    .picker-button-preview {
        @apply w-full flex items-center justify-center max-h-full;
    }

    .picker-button-placeholder {
        @apply absolute top-1/4 bg-teal-500 rounded-lg text-white text-xs p-1 bg-opacity-50;
    }
}

.picker-refresh-button {
    @apply mb-4;
}
</style>
