<script setup lang="ts">
import Modal from "../Modal.vue";
import { ref, computed, PropType } from "vue";
import { useResources } from "../../services/ResourceService";
import { DataTableValue } from "../../types/DataTable";

const props = defineProps({
    modelValue: {
        type: [Number, String, Object, undefined] as PropType<number | string | DataTableValue | undefined>,
        required: true,
    },
});

const showModal = ref(false);

const { resources } = useResources();

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

</script>

<template>
    <button @click="handleShowModal" type="button" class="button secondary flex gap-2 w-full">
        <span>{{ selectedResource ? $t('components.buttons.changeResource') : $t('components.buttons.selectResource') }}</span>
        <div class="w-4 flex items-center justify-center">
            <img v-if="selectedResource" :src="selectedResource.url" :alt="selectedResource.name" class="w-full"/>
        </div>
    </button>
    <modal
        :title="$t('components.titles.selectResource')"
        v-model:showModal="showModal"
        :showCancel="false"
        :confirmLabel="$t('buttons.close')"
    >
        <div class="grid grid-cols-3 gap-2">
            <button type="button" @click="handleSelectResource(resource.id as number)" v-for="resource of resources" class="button primary flex flex-col gap-2 justify-center items-center">
                <img :src="resource.url" :alt="resource.name" class="h-8 object-cover"/>
                <span>{{ resource.name }}</span>
            </button>
        </div>
    </modal>
</template>

<style scoped>
</style>
