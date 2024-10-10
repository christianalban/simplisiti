<script setup lang="ts">
import Toast from "./components/Toast.vue";
import './style.css'
import './custom.css'
</script>

<template>
    <div class="w-full relative">
        <router-view />
    </div>
    <toast position="bottom-right"/>
</template>
