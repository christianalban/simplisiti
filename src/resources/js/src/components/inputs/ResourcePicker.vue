<script setup lang="ts">
import Modal from "../Modal.vue";
import { ref, computed } from "vue";
import { useResources } from "../../services/ResourceService";
import ResourcePreview from '../../components/preview/ResourcePreview.vue';

const props = defineProps({
    modelValue: {
        required: true,
    },
});

const showModal = ref(false);

const search = ref('');

const isLoading = ref(false);

const { resources, loadResources, resourceFromId } = useResources();

const filteredResources = computed(() => {
    return resources.value.filter((resource) => {
        return resource.name.toLowerCase().includes(search.value.toLowerCase());
    });
});

const selectedResource = computed(() => {
    if (props.modelValue === undefined || props.modelValue === null) {
        return undefined;
    }
    return resourceFromId(+props.modelValue);
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
    isLoading.value = true;
    loadResources().finally(() => {
        isLoading.value = false;
    });
};

</script>

<template>
    <button @click="handleShowModal" type="button" class="button secondary flex gap-2 w-full flex-col justify-start !p-1 relative items-center">
        <div class="w-full flex items-center justify-center max-h-full">
            <resource-preview :url="selectedResource?.url" />
        </div>
        <span class="absolute top-1/4 bg-teal-500 rounded-lg text-white text-xs p-1 bg-opacity-50">{{ selectedResource ? $t('components.buttons.changeResource') : $t('components.buttons.selectResource') }}</span>
    </button>
    <modal
        :title="$t('components.titles.selectResource')"
        v-model:showModal="showModal"
        :showCancel="false"
        :confirmLabel="$t('buttons.close')"
    >
        <div class="flex justify-between mb-4">
            <button type="button" @click="refreshResources" class="button secondary">
                <fa-icon icon="sync" :class="{'animate-spin': isLoading}"/>
                {{ $t('resources.buttons.refresh') }}
            </button>
            <input type="search" v-model="search" class="input" :placeholder="$t('placeholders.search')" />
        </div>
        <div class="grid grid-cols-3 gap-2 overflow-y-auto max-h-[70vh]">
            <button type="button" @click="handleSelectResource(resource.id as number)" v-for="resource of filteredResources" class="button primary flex flex-col gap-2 justify-center items-center">
                <resource-preview :url="resource.url" />
                <span>{{ resource.name }}</span>
            </button>
        </div>
    </modal>
</template>

<style scoped>
</style>
