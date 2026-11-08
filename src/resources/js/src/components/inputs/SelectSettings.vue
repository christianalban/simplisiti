<script setup lang="ts">
import { PropType, ref } from 'vue';
import { Variable } from '../../types/Variable';
import { SelectOption } from '../../types/SelectInput';
import { value } from '../../utils/helpers.ts';

const props = defineProps({
    variable: {
        type: [Object, null] as PropType<Variable | null>,
        required: true,
    },
});

const emit = defineEmits(['update:settings']);

const options = ref(props.variable?.options);

if (!Array.isArray(options.value)) {
    options.value = [{ label: '', value: '' }];
}

const handleInput = (event: Event, option: SelectOption) => {
    const target = event.target as HTMLInputElement;
    option.value = value(target.value);
    emit('update:settings', options.value);
};

const handleLabelInput = (event: Event, option: SelectOption) => {
    const target = event.target as HTMLInputElement;
    option.label = target.value;
    emit('update:settings', options.value);
};

const addOption = () => {
    options.value.push({ label: '', value: '' });
    emit('update:settings', options.value);
};

const removeOption = (index: number) => {
    if (index === 0) {
        return;
    }

    options.value.splice(index, 1);
    emit('update:settings', options.value);
};

</script>

<template>
    <table class="table-auto">
        <thead>
            <tr>
                <th class="text-left">{{ $t('settings.titles.selectOption') }}</th>
                <th class="text-left">{{ $t('settings.titles.selectValue') }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(option, index) in options" :key="index">
                <td>
                    <input
                        type="text"
                        class="input w-20"
                        :value="option.label"
                        @input="handleLabelInput($event, option)"
                        :placeholder="$t('settings.placeholders.selectOption')"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        class="input w-20"
                        :value="option.value"
                        @input="handleInput($event, option)"
                        :placeholder="$t('settings.placeholders.selectValue')"
                    />
                </td>
                <td>
                    <button
                        class="button danger"
                        type="button"
                        @click="removeOption(index)"
                    >
                        <fa-icon icon="trash" />
                    </button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">
                    <button
                        class="button primary w-full"
                        type="button"
                        @click="addOption"
                    >
                        {{ $t('settings.buttons.addSelectOption') }}
                    </button>
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<style scoped>
</style>
