<template lang="pug">
//- cspell:words: iconfont
footer
    .footer-item.active
        .icon.iconfont.icon-home 
        .des 聚划算
    .footer-item
        .icon.iconfont.icon-cart
        .des 购物车
    .footer-item
        .icon.iconfont.icon-my 
        .des 我的
</template>

<style lang="scss" scoped>
@import url('https://at.alicdn.com/t/font_3150767_f592isnsh2n.css');

footer {
    border-top: 1px solid #e7e7e7;
    display: flex;
    flex-direction: row; // 底部导航栏横向
    align-items: center;
    justify-content: space-around; // 均匀分开
    background-color: aliceblue;
    border-radius: 50px;
    overflow: hidden;
    height: 55px;
    margin: 0 10px 10px 10px;

    .footer-item {
        display: flex;
        flex-direction: column;
        align-items: center; // 图标居中

        .icon {
            font-size: 23px;
        }

        &.active {
            color: darkorange;
        }
    }
}
</style>

