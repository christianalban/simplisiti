<script setup lang="ts">
import { ref } from 'vue';
import StylesForm from './partials/Form.vue';
import { createStyle } from '../../services/StyleService';
import { useRouter } from 'vue-router';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';
import { value } from '../../utils/helpers';

const { t } = useI18n();
const router = useRouter();
const code = ref('.custom-style {\n    color: red;\n}');
const name = ref('');
const isActive = ref(true);

const save = () => {
    createStyle({
        name: name.value,
        styles: code.value,
        is_active: Boolean(isActive.value),
    })
    .then(() => {
        router.push({name: 'styles.index'});
        showToast({
            title: t('toasts.success'),
            message: t('styles.toasts.created'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('styles.toasts.errorCreated'),
            type: 'error',
        });
    })
}

</script>

<template>
    <form @submit.prevent="save" class="overflow-hidden h-full flex flex-col">
        <div class="flex flex-col md:flex-row justify-between items-end">
            <div class="flex flex-col gap-4 mb-4">
                <h1 class="title">{{ $t('styles.titles.createStyle') }}</h1>
                <div class="flex gap-2">
                    <router-link class="button default" :to="{ name: 'styles.index' }">{{ $t('buttons.back') }}</router-link>
                    <button type="submit" class="button primary">{{ $t('buttons.save') }}</button>
                </div>
            </div>
            <div class="flex gap-4 w-full md:w-auto">
                <div class="flex flex-col gap-2">
                    <label class="label">{{ $t('styles.labels.styleName') }}</label>
                    <input type="text" :value="name" required @input="name = value($event.target)" class="input" :placeholder="$t('styles.placeholders.styleName')"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="label whitespace-nowrap">{{ $t('styles.labels.styleIsActive') }}</label>
                    <div>
                        <input type="checkbox" v-model="isActive" class="checkbox" :placeholder="$t('styles.placeholders.styleIsActive')"/>
                    </div>
                </div>
            </div>
        </div>
        <styles-form
            v-model:code="code"
        />
    </form>
</template>

<style scoped>

</style>
