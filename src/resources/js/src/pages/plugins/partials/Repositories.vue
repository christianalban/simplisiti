<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Modal from '../../../components/Modal.vue'
import { Repository } from '../../../types/Plugin';
import { getRepositories, updateRepositories } from '../../../services/PluginService';
import { showToast } from '../../../services/ToastService';

const repositories = ref<Repository[]>([])
const { t } = useI18n()

defineProps({
    title: String,
    showModal: Boolean,
})

const emit = defineEmits(['close'])

const addRepository = () => {
    repositories.value.push({
        url: '',
    })
}

const removeRepository = (index: number) => {
    repositories.value.splice(index, 1)
}

const save = () => {
    updateRepositories(repositories.value)
    .then(() => {
        emit('close')
        showToast({
            title: t('toasts.success'),
            message: t('plugins.toasts.repositoriesUpdated'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('plugins.toasts.errorRepositoriesUpdated'),
            type: 'error',
        });
    })
}

onMounted(() => {
    getRepositories()
    .then((response) => {
        repositories.value = response.data.data
    })
})

</script>

<template>
    <modal
        :title="$t('plugins.titles.repositories')"
        :showModal="showModal"
        :confirmLabel="$t('buttons.save')"
        @close="$emit('close')"
        @confirm="save"
    >
        <div class="w-96 flex flex-col gap-2">
            <ul class="w-full flex flex-col gap-2">
                <li v-for="(repository, index) of repositories" class="form-group">
                    <input type="text" class="input w-full" v-model="repository.url" />
                    <button class="button danger" @click.prevent="removeRepository(index)">
                        <fa-icon icon="trash" />
                    </button>
                </li>
            </ul>
            <div>
                <button class="button primary flex gap-2 items-center" @click.prevent="addRepository">
                    <fa-icon icon="plus" />
                    <span>{{ $t('plugins.buttons.addRepository') }}</span>
                </button>
            </div>
        </div>
    </modal>
</template>

<style scoped>
</style>
