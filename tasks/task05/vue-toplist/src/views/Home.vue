// cspell:words tabbar
<template lang="pug">
.page
    .main 
        //- 路由切换
        router-view
    .footer
        van-tabbar(placeholder,route)
            van-tabbar-item(icon="fire",replace,to="/top") 排行榜
            van-tabbar-item(icon="like",replace,to="/love") 我的最爱
</template>

<style lang="sass">
.page
    display: flex
    flex-direction: column
    height: 100%
.main
    flex: 1
    height: 100%
    overflow-y: auto
</style>