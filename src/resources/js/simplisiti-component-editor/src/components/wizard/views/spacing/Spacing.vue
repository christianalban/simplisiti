<script setup lang="ts">
import { PropType, onMounted, ref } from 'vue';
import SpacingSelect from './partials/SpacingSelect.vue';
import { SpacingConfig, SpacingConfigType, Spacings } from '../../../../enginge/constants/Spacing';
import { propagateClassGroup } from '../../../../enginge/helpers/HtmlAlias';

const props = defineProps({
    spClassList: {
        type: Array as PropType<string[]>,
        default: [],
    },
});

const emit = defineEmits(['update']);

const marginConfig = ref<SpacingConfig>({
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
});

const paddingConfig = ref<SpacingConfig>({
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
});

const propagateGroup = <T>(group: string) => {
    return propagateClassGroup<T>(group, props.spClassList);
}

const propagateClassList = () => {
    marginConfig.value.top = propagateGroup<Spacings>('sp-style__spacing-margin-top__');
    marginConfig.value.bottom = propagateGroup<Spacings>('sp-style__spacing-margin-bottom__');
    marginConfig.value.left = propagateGroup<Spacings>('sp-style__spacing-margin-left__');
    marginConfig.value.right = propagateGroup<Spacings>('sp-style__spacing-margin-right__');

    paddingConfig.value.top = propagateGroup<Spacings>('sp-style__spacing-padding-top__');
    paddingConfig.value.bottom = propagateGroup<Spacings>('sp-style__spacing-padding-bottom__');
    paddingConfig.value.left = propagateGroup<Spacings>('sp-style__spacing-padding-left__');
    paddingConfig.value.right = propagateGroup<Spacings>('sp-style__spacing-padding-right__');
}

const notify = () => {
    console.log(marginConfig);
    const cleanedClassList = [
        marginConfig.value.top,
        marginConfig.value.bottom,
        marginConfig.value.left,
        marginConfig.value.right,

        paddingConfig.value.top,
        paddingConfig.value.bottom,
        paddingConfig.value.left,
        paddingConfig.value.right,
    ].filter(item => item);

    emit('update', cleanedClassList);
}

onMounted(() => {
    propagateClassList();
});

</script>

<template>
    <div  class="sp-spacing__container">
        <spacing-select
            title="Margen"
            type="margin"
            v-model:spacingConfig="marginConfig"
            @update:spacingConfig="notify"
        />
        <hr class="sp-spacing__separator">
        <spacing-select
            title="Padding"
            type="padding"
            v-model:spacingConfig="paddingConfig"
            @update:spacingConfig="notify"
        />
    </div>
</template>

<style scoped>
.sp-spacing__separator {
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid #ccc;
}
</style>
