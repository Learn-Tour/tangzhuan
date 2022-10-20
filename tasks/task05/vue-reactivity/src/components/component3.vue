<template lang="pug">
.container
    h2 组件3
    p(v-if="store.login.state" key="box1") 欢迎你 {{ store.login.name }}
</template>

<script>
import { store } from "../store"
export default {
    data(){
        return {
            store
        }
    }
}
</script>

<style scoped>
.container {
    border: 1px black solid;
}
</style>