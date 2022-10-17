<template lang="pug">
div
    .container 
        .main 
            Item(v-for="item in items",:key="item.itemId",:item="item")
    Footer
</template>

<script>
import Footer from './components/Footer.vue';
import Item from './components/item.vue';
import * as api from './service/api'

export default {
    components: { Footer, Item },
    data() {
        return {
            items: []
        }
    },
    methods: {
        async listTaobao() {
            const list = await api.getLists();
            this.items = list;
        }
    },
    mounted() {
        this.listTaobao()
    }
}

</script>

<style lang="scss" scoped>
.container {
    // 大容器纵向排列
    display: flex;
    flex-direction: column;
    gap: 7px; // 导航栏能有间隔
    height: 100%; // 充满页面

    >.main {
        flex: 1;
        overflow: auto; // 内容溢出出现滚动条
        padding: 5px 13px;
    }
}
</style>
