<template lang="pug">
.container
    h2 组件1
    .login(v-if="login.state == true")
        p {{info}}
        button(@click="store.loginUser(login.name)") 注销登陆
</template>

<script>
export default {
    data() {
        return {
            login: store.login,
            info: ""
        }
    },
    watch: {
        'login.state': function (val, oldVal) {
            // do something
            this.info = `Hi 你好，${this.login.name}！`
            console.log(`new: ${val}, old: ${oldVal}`)
        },
    },
};
</script>

<script setup>
import { store } from "../store"
</script>

<style scoped>
.container {
    border: 1px black solid;
}
</style>