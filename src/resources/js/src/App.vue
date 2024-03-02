<script setup lang="ts">
import Toast from "./components/Toast.vue";
import './style.css'
import './custom.css'
</script>

<template>
    <div class="container">
        <router-view />
    </div>
    <toast position="bottom-right"/>
</template>

<style scoped>
.container {
    max-width: 1366px;
    margin: 0 auto;
    position: relative;
}
</style>
<style lang="scss">

</style>
