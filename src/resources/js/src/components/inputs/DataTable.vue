<script setup lang="ts">
import Modal from "../Modal.vue";
import ControlTypeSelector from "./ControlTypeSelector.vue";
import { ref, PropType, onMounted, watch, nextTick, computed } from "vue";
import { Variable, VariableType } from '../../types/Variable';
import { Column, DataTableValue } from '../../types/DataTable';
import { value } from '../../utils/helpers';
import { mergeReorderedItems } from '../../utils/helpers';
import VariableTypeSelector from "./VariableTypeSelector.vue";
import DialogComponent from "../Dialog.vue";
import { usePages } from "../../services/PageService";
import Draggable from 'vuedraggable';

const { pages } = usePages();

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
    },
    editable: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
    data: {
        type: Object as PropType<Column>,
    },
});

const search = ref('');

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
const rowKeys = new WeakMap<Variable[], number>();
let nextRowKey = 0;
const rowsBeforeDrag = ref<Variable[][] | null>(null);

const rowKey = (row: Variable[]): number => {
    let key = rowKeys.get(row);

    if (key === undefined) {
        key = nextRowKey++;
        rowKeys.set(row, key);
    }

    return key;
};

const rowsFiltered = computed<Variable[][]>(() => {
    if (!search.value) {
        return rows.value;
    }

    return rows.value.filter((row) => {
        return row.some((variable) => {
            if (variable.type === 'page') {
                const foundPageByUrl = pages.value.find((page) => {
                    return page.url?.toLowerCase().includes(search.value.toLowerCase()) && page.name === variable.default;
                });

                if (foundPageByUrl) {
                    return true;
                }
            }
            if (variable.default instanceof String || typeof variable.default === 'string') {
                return variable.default.toLowerCase().includes(search.value.toLowerCase());
            }
            return false;
        });
    });
});
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
    rowKey(newRow);

    populateSharedChildrenDataTableColumns();
};

const removeColumn = (index: number) => {
    columns.value.splice(index, 1);

    rows.value.forEach((row) => {
        row.splice(index, 1);
    });
};

const removeRow = (row: Variable[]) => {
    const index = rows.value.indexOf(row);

    if (index >= 0) {
        rows.value.splice(index, 1);
    }
};

const startReorderingRows = () => {
    rowsBeforeDrag.value = [...rowsFiltered.value];
};

const finishReorderingRows = () => {
    if (!rowsBeforeDrag.value) {
        return;
    }

    rows.value = mergeReorderedItems(rows.value, rowsBeforeDrag.value, rowsFiltered.value);
    rowsBeforeDrag.value = null;
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
            variable.options = columns.value[index]?.options || [];
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

const canEditRows = computed(() => {
    return props.editable && (props.data?.add_rows ?? true);
})

const canEdit = computed(() => {
    return props.editable && props.editStructure && (props.data?.editable ?? true);
})

const canReorderRows = computed(() => {
    return props.editable && (props.data?.editable ?? true);
})

const canEditCell = (index: number) => {
    return props.editable && (columns.value[index]?.editable ?? true);
};

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
    <button @click="handleShowModal" type="button" class="button secondary flex items-center justify-center gap-2 w-full h-full" :disabled="!editable">
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
            <div class="flex flex-col md:flex-row gap-2 justify-start mb-4">
                <input type="search" v-model="search" class="input ml-auto" :placeholder="$t('placeholders.search')" />
            </div>
            <table class="w-full relative">
                <thead>
                    <tr>
                        <th v-if="canReorderRows" class="sticky left-0 z-10 min-w-[3rem] p-2 bg-gray-100 top-0"></th>
                        <th :class="`min-w-[200px] p-2 bg-gray-100 sticky top-0 z-10 ${column.type}`" v-for="(column, index) of columns">
                            <div class="flex">
                                <div class="w-full form-group">
                                    <input class="input w-full" type="text" :value="column.name" @input="updateColumnName(index, column, ($event.target) as EventTarget)" :placeholder="$t('components.placeholders.dataName')" :readonly="!canEdit"/>
                                    <variable-type-selector v-if="canEdit" class="!pl-0 w-3" :modelValue="column.type" @update:modelValue="updateColumnType(index, column, $event)"/>
                                    <button v-if="columns.length > 1 && canEdit" type="button" class="button danger" @click="showDeleteDialog(index)">
                                        <fa-icon icon="minus" />
                                    </button>
                                </div>
                            </div>
                        </th>
                        <th class="sticky right-0 p-2 bg-gray-100 top-0 z-10" v-if="canEditRows">
                            <div class="flex justify-center">
                                <button v-if="columns.length >= 1 && canEdit" type="button" class="button primary" @click="addColumn">
                                    <fa-icon icon="plus" />
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <draggable
                    tag="tbody"
                    :list="rowsFiltered"
                    :item-key="rowKey"
                    handle=".row-drag-handle"
                    :disabled="!canReorderRows"
                    @start="startReorderingRows"
                    @end="finishReorderingRows"
                >
                    <template #item="{ element: variables }">
                    <tr class="group" :key="rowKey(variables)">
                        <td v-if="canReorderRows" class="sticky left-0 z-10 p-2 transition-colors bg-gray-100 group-hover:bg-gray-200">
                            <button type="button" class="button secondary row-drag-handle cursor-grab" :aria-label="$t('components.buttons.reorderRow')">
                                <fa-icon icon="grip-lines" />
                            </button>
                        </td>
                        <td class="p-2 transition-colors bg-gray-100 group-hover:bg-gray-200" v-for="(variable, variableIndex) of variables" :key="`${name}:${columns[variableIndex]?.name}:${variable.name}`">
                            <div class="h-10 flex items-center justify-center">
                                <control-type-selector v-model="variable.default" :edit-structure="canEdit" :name="variable.name" :type="variable.type" :data="variable.options" :editable="canEditCell(variableIndex)"/>
                            </div>
                        </td>
                        <td class="sticky right-0 p-2 transition-colors bg-gray-100 group-hover:bg-gray-200" v-if="canEditRows">
                            <div class="flex flex-col gap-1">
                                <button type="button" class="button danger" @click="removeRow(variables)">
                                    <fa-icon icon="minus" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    </template>
                </draggable>
                <tbody v-if="canEditRows">
                    <tr>
                        <td :colspan="columns.length + (canReorderRows ? 1 : 0)" class="p-2 transition-colors bg-gray-100 group-hover:bg-gray-200"></td>
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
