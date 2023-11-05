<script setup lang="ts">
import Toast from "./components/Toast.vue";
</script>

<template>
    <div class="container py-8">
        <router-view />
    </div>
    <toast position="bottom-right"/>
</template>

<style scoped>
.container {
    max-width: 1366px;
    margin: 0 auto;
}
</style>
<style lang="scss">
.button {
    @apply px-4 py-2 rounded-lg transition;

    &.primary {
        @apply bg-blue-100 text-blue-900;

        &:hover {
            @apply bg-blue-200;
        }
    }

    &.danger {
        @apply bg-red-100 text-red-900;

        &:hover {
            @apply bg-red-200;
        }
    }

    &.default {
        @apply bg-gray-100 text-gray-900;

        &:hover {
            @apply bg-gray-200;
        }
    }
}

.input {
    @apply rounded-lg overflow-hidden px-4 py-2 border border-gray-300 bg-white;
    &:focus {
        @apply z-10;
    }
}

.title {
    @apply text-2xl font-bold;
}

.form-group {
    .input,
    .button {
        @apply rounded-none;
    }

    .input:first-child {
        @apply rounded-l-lg;
    }

    .input:last-child {
        @apply rounded-r-lg;
    }

    .button:first-child {
        @apply rounded-l-lg;
    }

    .button:last-child {
        @apply rounded-r-lg;
    }
}
</style>
