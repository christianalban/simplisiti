<script setup lang="ts">
import SpacingSelect from './SpacingSelect.vue';
</script>

<template>
    <div  class="sp-spacing__container">
        <spacing-select
            title="Margen"
            type="margin"
        />
        <hr class="sp-spacing__separator">
        <spacing-select
            title="Padding"
            type="padding"
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
