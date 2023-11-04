<script setup lang="ts">
import { ref } from "vue";
import ComponentsForm from "./partials/Form.vue";

const code = ref('<div>Create your new component</div>');

</script>

<template>
    <div>
        <components-form v-model:code="code"/>
    </div>
</template>

<style scoped>

</style>
