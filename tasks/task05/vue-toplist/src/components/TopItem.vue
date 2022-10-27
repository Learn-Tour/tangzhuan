<template lang="pug">
router-link.item(v-bind:to="'/detail/' + item.id")
    van-image(lazy-load :src="item.cover")
    .text.van-ellipsis {{ item.title }}
    .text.van-ellipsis {{ item.singer}}
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {
                cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002CcJgN0Xz8Co_3.jpg",
                title: "标题",
                singer: "作者"
            }
        }
    }
}
</script>

<style lang="sass">
.text 
    color: #1d2129
    font-size: 15px
</style>