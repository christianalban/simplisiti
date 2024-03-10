<script setup lang="ts">
import Modal from "../Modal.vue";
import ControlTypeSelector from "./ControlTypeSelector.vue";
import { ref, PropType, onMounted } from "vue";
import { Variable, VariableType } from '../../types/Variable';
import { Column, DataTableValue } from '../../types/DataTable';
import { value } from '../../utils/helpers';
import VariableTypeSelector from "./VariableTypeSelector.vue";

const props = defineProps({
    modelValue: {
        type: [Object, String, Number, undefined] as PropType<DataTableValue | string | number | undefined>,
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
});

interface EmptyVariableDefaults {
    type: VariableType;
    name: string;
}


const emptyVariable = ({type, name}: EmptyVariableDefaults = { type: 'text', name: ''}) => {
    return {
        name,
        type,
        value: '',
        default: '',
    };
}
const emptyColumn = (type: VariableType = 'text') => {
    return {
        name: '',
        type,
    };
}

const columns = ref<Column[]>([emptyColumn()]);
const rows = ref<Variable[][]>([[emptyVariable()]]);

const showModal = ref(false);

const emit = defineEmits(['update:modelValue']);

const handleShowModal = () => {
    showModal.value = true;
};

const handleConfirm = () => {
    emit('update:modelValue', {
        columns: columns.value,
        rows: rows.value,
    });
    showModal.value = false;
};

const updateColumnType = (index: number, data: Column, type: VariableType) => {
    data.type = type;

    rows.value.forEach((row) => {
        row[index].type = data.type;
    });
};

const updateColumnName = (index: number, data: Column, dataValue: EventTarget) => {
    data.name = value(dataValue);

    rows.value.forEach((row) => {
        row[index].name = data.name;
    });
};

const addColumn = () => {
    columns.value.push(emptyColumn());
    
    rows.value.forEach((row) => {
        row.push(emptyVariable());
    });
};

const addRow = () => {
    const newRow: Variable[] = [];

    columns.value.forEach(({type, name}) => {
        newRow.push(emptyVariable({ type, name }));
    });

    rows.value.push(newRow);
};

const removeColumn = (index: number) => {
    columns.value.splice(index, 1);

    rows.value.forEach((row) => {
        row.splice(index, 1);
    });
};

const removeRow = (index: number) => {
    rows.value.splice(index, 1);
};

onMounted(() => {
    if (props.modelValue && typeof props.modelValue === 'object') {
        columns.value = props.modelValue.columns;
        rows.value = props.modelValue.rows;
    }
});

</script>

<template>
    <button @click="handleShowModal" type="button" class="button secondary flex items-center justify-center gap-2 w-full">
        <span>{{ $t('components.buttons.fillData') }}</span>
    </button>
    <modal
        :title="$t('components.titles.fillData')"
        v-model:showModal="showModal"
        :showCancel="false"
        :confirmLabel="$t('buttons.close')"
        :resetOnClose="false"
        @confirm="handleConfirm"
    >
        <table>
            <thead>
                <tr>
                    <th v-for="(column, index) of columns">
                        <div class="w-52 flex">
                            <div class="w-full form-group">
                                <input class="input" type="text" :value="column.name" @input="updateColumnName(index, column, ($event.target) as EventTarget)" :placeholder="$t('components.placeholders.dataName')"/>
                                <variable-type-selector class="w-5" :modelValue="column.type" @update:modelValue="updateColumnType(index, column, $event)"/>
                                <button v-if="columns.length > 1" type="button" class="button danger" @click="removeColumn(index)">
                                    <fa-icon icon="minus" />
                                </button>
                                <button v-if="index == columns.length - 1" type="button" class="button primary" @click="addColumn">
                                    <fa-icon icon="plus" />
                                </button>
                            </div>
                        </div>
                    </th>
                    <th>
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(variables, index) of rows" :key="`${index}:${name}`">
                    <td v-for="(variable, variableIndex) of variables" :key="`${name}:${columns[variableIndex].name}:${variable.name}`">
                        <div class="w-52 flex">
                            <control-type-selector v-model="variable.default" :name="variable.name" :type="variable.type"/>
                        </div>
                    </td>
                    <td>
                        <button v-if="rows.length > 1" type="button" class="button danger" @click="removeRow(index)">
                            <fa-icon icon="minus" />
                        </button>
                        <button v-if="index == rows.length - 1" type="button" class="button secondary" @click="addRow">
                            <fa-icon icon="plus" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </modal>
</template>

<style scoped>
</style>
