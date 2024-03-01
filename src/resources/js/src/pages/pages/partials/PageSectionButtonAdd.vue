<script setup lang="ts">

defineEmits(['click']);

</script>

<template>
    <button class="page-sections-buttons-add" @click.stop="$emit('click')" type="button">
        <hr>
        <span>
            <fa-icon icon="square-plus" />
            {{ $t('pages.buttons.addSection') }}
        </span>
    </button>   
</template>

<style scoped lang="scss">
.page-sections-buttons-add {
    @apply w-full p-2 z-[99999] sticky;

    &:hover {
        hr {
            @apply border-gray-500;
        }

        span {
            @apply text-gray-500;
        }
    }

    hr {
        @apply absolute w-full top-1/2 left-0 border-t-2 border-gray-100 border-dashed transition-colors;
    }

    span {
        @apply bg-white z-10 relative px-2 transition-colors text-gray-300;
    }
}
</style>
