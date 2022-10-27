// cspell:words tabbar
<template lang="pug">
.page
    .main 
        //- 路由切换
        router-view
    .footer
        van-tabbar(:fixed="false",placeholder,route,v-model="active")
            van-tabbar-item(icon="fire",replace,:to="{ name: 'TopList' }",dot) 排行榜
            van-tabbar-item(icon="like",replace,:to="{ name: 'Likes' }") 我的最爱
            //- van-tabbar-item(icon="like",replace,to="/love") 我的最爱
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>

<style lang="sass" scoped>
.page
    display: flex
    flex-direction: column
    height: 100%
.main
    flex: 1
    height: 100%
    overflow-y: auto
</style>
