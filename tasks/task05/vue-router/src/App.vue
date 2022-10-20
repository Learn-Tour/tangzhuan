<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template lang="pug">
div
    h1 Hello Router!
    nav
        router-link(to="/") Page1 
        router-link(to="/2") Page2
    router-view 
</template>

<style scoped></style>
