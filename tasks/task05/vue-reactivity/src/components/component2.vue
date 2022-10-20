<template lang="pug">
.container
    h2 组件2
    .login
        p 我卡卡，你好呀 {{login.name}}～
        button(@click="store.loginUser(login.name)",v-if="login.state") 注销登陆
</template>

<script>
import { store } from "../store"

export default {
    data() {
        return {
            login: store.login,
            store
        }
    },
};
</script>

<style scoped>
.container {
    border: 1px black solid;
}
</style>