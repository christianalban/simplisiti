<script setup lang="ts">
import FloatingWindow from "../FloatingWindow.vue";
import { ref, PropType } from "vue";
import CKEditor from '@ckeditor/ckeditor5-vue';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { List } from '@ckeditor/ckeditor5-list';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { ImageInsert, Image, ImageResize, ImageToolbar, ImageStyle } from '@ckeditor/ckeditor5-image';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Font } from '@ckeditor/ckeditor5-font';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { FullPage } from '@ckeditor/ckeditor5-html-support';
import { Table, TableToolbar, TableCellProperties, TableProperties, TableColumnResize } from "@ckeditor/ckeditor5-table";
import { Alignment } from '@ckeditor/ckeditor5-alignment';
// import { InsertVideoUrl } from '../../support/CkEditor/InsertVideoUrl';

const props = defineProps({
    modelValue: {
        type: [String] as PropType<string>,
        default: '',
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
    editable: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
});

const editor = ClassicEditor;
const ckeditor = CKEditor.component
const editorData = ref(props.modelValue);
const editorConfig = {
    plugins: [
        Table,
        TableToolbar,
        TableCellProperties,
        TableProperties,
        TableColumnResize,
        Essentials,
        Bold,
        Italic,
        Link,
        Paragraph,
        List,
        Indent,
        IndentBlock,
        BlockQuote,
        MediaEmbed,
        Heading,
        Image,
        ImageInsert,
        ImageToolbar,
        ImageResize,
        ImageStyle,
        PageBreak,
        Font,
        SourceEditing,
        FullPage,
        Alignment,
        // InsertVideoUrl,
    ],
    toolbar: {
        items: [
            'sourceEditing',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            'alignment',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            'insertTable',
            '|',
            'blockQuote',
            'insertImage',
            'mediaEmbed',
            // 'insertVideo',
            '|',
            'pageBreak',
            'undo',
            'redo',
        ],
    },
    image: {
        insert: {
            integrations: [ 'url' ]
        },
        toolbar: [ 'imageTextAlternative', '|', 'imageStyle:block', 'imageStyle:inline', 'imageStyle:side', 'imageStyle:alignLeft', 'imageStyle:alignRight', 'imageStyle:alignBlockLeft', 'imageStyle:alignBlockRight', 'imageStyle:alignCenter' ],
    },
    table: {
        contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
    },
    mediaEmbed: {
        previewsInData: true
    },
};

const showModal = ref(false);

const emit = defineEmits(['update:model-value']);

const handleShowModal = () => {
    showModal.value = true;
};

const handleConfirm = () => {
    emit('update:model-value', editorData.value);
    showModal.value = false;
};

const handleCancel = () => {
    editorData.value = props.modelValue;
    showModal.value = false;
};

const onEditorReady = (editor) => {
  const stickyPanel = editor.ui.view.stickyPanel;
  
  if (stickyPanel) {
    // 1. Apagamos el estado activo para que no intente calcular
    stickyPanel.isActive = false;
    
    // 2. Desvinculamos la variable observable que dispara los cambios visuales
    stickyPanel.unbind('isSticky');
    stickyPanel.isSticky = false;
    
    // 3. Quitamos su elemento de referencia
    stickyPanel.limiterElement = null;
  }
}

</script>

<template>
    <button @click="handleShowModal" type="button" class="button secondary flex items-center justify-center gap-2 w-full">
        <span>{{ $t('components.buttons.editContent') }}</span>
    </button>
    <floating-window
        :title="$t('components.titles.editContent')"
        v-model:showModal="showModal"
        :confirmLabel="$t('buttons.confirm')"
        :resetOnClose="false"
        @confirm="handleConfirm"
        @cancel="handleCancel"
    >
        <div class="h-[82vh] w-[85vw] md:w-full flex editor-container">
            <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
                :disabled="!editable"
                @ready="onEditorReady"
            />
        </div>
    </floating-window>
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

<style>
.editor-container {
    .ck.ck-content {
        @apply min-h-full h-full;
    }
    .ck.ck-editor {
        @apply w-full h-full flex-1 flex flex-col;
    }

    .ck.ck-editor__main {
        @apply flex-1 overflow-y-auto;
    }
}
</style>
