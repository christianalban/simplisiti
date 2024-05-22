<script setup lang="ts">
import Modal from "../Modal.vue";
import ControlTypeSelector from "./ControlTypeSelector.vue";
import { ref, PropType, onMounted, watch, nextTick, computed } from "vue";
import { Variable, VariableType } from '../../types/Variable';
import { Column, DataTableValue } from '../../types/DataTable';
import { value } from '../../utils/helpers';
import VariableTypeSelector from "./VariableTypeSelector.vue";
import DialogComponent from "../Dialog.vue";

const props = defineProps({
    modelValue: {
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
    editStructure: {
        type: Boolean as PropType<boolean>,
        default: true,
    }
});

interface EmptyVariableDefaults {
    type: VariableType;
    name: string;
}

const sharedChildrenDataTableColumns: Column[] = [];

const emptyVariable = ({type, name}: EmptyVariableDefaults = { type: 'text', name: ''}): Variable => {
    let defaultValue: string | number | DataTableValue | null = '';

    if (type === 'datatable') {
        defaultValue = {
            columns: [emptyColumn()],
            rows: [[emptyVariable()]]
        };
    }

    return {
        name,
        type,
        value: '',
        default: defaultValue,
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
const showDialog = ref(false);
const selectedColumnIndex = ref(0);

const showModal = ref(false);

const emit = defineEmits(['update:model-value']);

const handleShowModal = () => {
    showModal.value = true;
};

const handleConfirm = () => {
    emit('update:model-value', {
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

    populateSharedChildrenDataTableColumns();
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

const takeStructureFromFirstRow = () => {
    rows.value[0].forEach((variable, index) => {
        if (variable.type === 'datatable' && typeof variable.default === 'object') {
            sharedChildrenDataTableColumns[index] = variable.default?.columns || [emptyColumn()];
        }
    });
};

const populateSharedChildrenDataTableColumns = () => {
    rows.value.forEach((row) => {
        row.forEach((variable, index) => {
            if (variable.type === 'datatable' && variable.default && typeof variable.default === 'object') {
                variable.default.columns = sharedChildrenDataTableColumns[index];
            }
            variable.name = columns.value[index]?.name || '';
        });
    });
};

const getSelectedColumnName = computed(() => {
    return columns.value[selectedColumnIndex.value]?.name || '';
});

const showDeleteDialog = (index: number) => {
    showDialog.value = true;
    selectedColumnIndex.value = index;
}

const confirmDeleteComponent = () => {
    removeColumn(selectedColumnIndex.value);
    showDialog.value = false;
}

onMounted(() => {
    if (props.modelValue && typeof props.modelValue === 'object') {
        const value = props.modelValue as DataTableValue;
        columns.value = value.columns;
        rows.value = value.rows;

        if (rows.value.length) {
            takeStructureFromFirstRow();

            populateSharedChildrenDataTableColumns();
        }
    }
});

watch(() => props.modelValue, (value) => {
    if (value && typeof value === 'object') {
        const value = props.modelValue as DataTableValue;
        columns.value = value.columns;
        rows.value = value.rows;

        if (rows.value.length) {
            takeStructureFromFirstRow();

            populateSharedChildrenDataTableColumns();
        }
    }
});

watch(columns, (value) => {
    rows.value.forEach((row) => {
        for (let index = 0; index < value.length; index++) {
            if (!value[index]) {
                row.splice(index, 1);
            }
        }

        value.forEach((column, index) => {
            if (!row[index] || row[index].type !== column.type) {
                row[index] = emptyVariable({ type: column.type, name: column.name });
            }
        });
    });

    nextTick(() => {
        takeStructureFromFirstRow();
        populateSharedChildrenDataTableColumns();
    });

}, { deep: true });

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
        <div class="overflow-auto h-[75vh] max-w-[95vw] rounded">
            <table class="w-full relative">
                <thead>
                    <tr>
                        <th :class="`min-w-[200px] p-2 bg-gray-100 sticky top-0 z-10 ${column.type}`" v-for="(column, index) of columns">
                            <div class="flex">
                                <div class="w-full form-group">
                                    <input class="input w-full" type="text" :value="column.name" @input="updateColumnName(index, column, ($event.target) as EventTarget)" :placeholder="$t('components.placeholders.dataName')" :readonly="!editStructure"/>
                                    <variable-type-selector v-if="editStructure" class="!pl-0 w-3" :modelValue="column.type" @update:modelValue="updateColumnType(index, column, $event)"/>
                                    <button v-if="columns.length > 1 && editStructure" type="button" class="button danger" @click="showDeleteDialog(index)">
                                        <fa-icon icon="minus" />
                                    </button>
                                </div>
                            </div>
                        </th>
                        <th class="sticky right-0 p-2 bg-gray-100 top-0 z-10">
                            <div class="flex justify-center">
                                <button v-if="columns.length >= 1 && editStructure" type="button" class="button primary" @click="addColumn">
                                    <fa-icon icon="plus" />
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="group" v-for="(variables, index) of rows" :key="`${index}:${name}`">
                        <td class="p-2 transition-colors bg-gray-100 group-hover:bg-gray-200" v-for="(variable, variableIndex) of variables" :key="`${name}:${columns[variableIndex]?.name}:${variable.name}`">
                            <div class="h-10 flex">
                                <control-type-selector v-model="variable.default" :edit-structure="editStructure" :name="variable.name" :type="variable.type"/>
                            </div>
                        </td>
                        <td class="sticky right-0 p-2 transition-colors bg-gray-100 group-hover:bg-gray-200">
                            <div class="flex flex-col gap-1">
                                <button type="button" class="button danger" @click="removeRow(index)">
                                    <fa-icon icon="minus" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td :colspan="columns.length" class="p-2 transition-colors bg-gray-100 group-hover:bg-gray-200"></td>
                        <td class="sticky right-0 p-2 transition-colors bg-gray-100 group-hover:bg-gray-200">
                            <div class="flex flex-col gap-1 w-min ml-auto">
                                <button type="button" class="button secondary" @click="addRow">
                                    <fa-icon icon="plus" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </modal>
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('dialogs.delete.title')"
        :message="$t('dialogs.delete.message', { name: getSelectedColumnName })"
        @confirm="confirmDeleteComponent"
    />
</template>

<style scoped>
.resource,
.page,
.datasource,
.action,
.datatable {
    @apply w-44;
}
</style>
