<script setup lang="ts">
import { ref } from 'vue';
import ScriptsForm from './partials/Form.vue';
import { createScript } from '../../services/ScriptService';
import { useRouter } from 'vue-router';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { value } from '../../utils/helpers';

const { t } = useI18n();
const router = useRouter();
const code = ref('alert("Hello World")');
const name = ref('');
const isActive = ref(true);

const save = () => {
    createScript({
        name: name.value,
        scripts: code.value,
        is_active: Boolean(isActive.value),
    })
    .then(() => {
        router.push({name: 'scripts.index'});
        showToast({
            title: t('toasts.success'),
            message: t('scripts.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('scripts.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <form @submit.prevent="save" class="overflow-hidden h-full flex flex-col">
        <div class="flex justify-between items-end">
            <div class="flex flex-col gap-4 mb-4 w-full">
                <h1 class="title">{{ $t('scripts.titles.createScript') }}</h1>
                <div class="flex gap-2">
                    <router-link class="button default" :to="{ name: 'scripts.index' }">{{ $t('buttons.back') }}</router-link>
                    <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="flex flex-col gap-2">
                    <label class="label">{{ $t('scripts.labels.scriptName') }}</label>
                    <input type="text" :value="name" required @input="name = value($event.target)" class="input" :placeholder="$t('scripts.placeholders.scriptName')"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="label whitespace-nowrap">{{ $t('scripts.labels.scriptIsActive') }}</label>
                    <div>
                        <input type="checkbox" v-model="isActive" class="checkbox" :placeholder="$t('scripts.placeholders.scriptIsActive')"/>
                    </div>
                </div>
            </div>
        </div>
        <scripts-form
            v-model:code="code"
        />
    </form>
</template>

<style scoped>

</style>
