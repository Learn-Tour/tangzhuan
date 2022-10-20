<template lang="pug">
div
    h1 状态管理 - 使用 Reactivity API
    .login 
        input(type="text",placeholder="输入用户名",v-model="loginInfo.name",v-if="loginInfo.state==false")
        button(v-on:click='login') {{loginText}}
    com1
    com2
    com3
</template>

<script>
import com1 from './components/component1.vue'
import com2 from './components/component2.vue'
import com3 from './components/component3.vue'
import {store} from './store.js'
export default {
    data() {
        return {
            loginText: "登陆系统",
            loginInfo: store.login
        }
    },
    components: {
        com1,
        com2,
        com3
    },
    methods: {
        login(){
            if(this.loginInfo.name == "")
                this.loginInfo.name = '路人甲'
            store.loginUser(this.loginInfo.name)
            if(store.login.state == false)
                this.loginText='登陆系统'
            else this.loginText='注销登陆'
        }
    }
}
</script>

<style scoped>
.login {    
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
}
</style>

<style lang="scss">
.container{
    height: 170px;
    .login{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
    }
}
</style>
