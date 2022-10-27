<template lang="pug">
.container
        TopItem.item(v-for="item in lists",:item="item")
</template>

<style lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
}
</style>

<script>
import TopItem from '../components/TopItem.vue';
import * as api from '../api/api';
export default {
    components: { TopItem },
    data() {
        return {
            lists: [],
            span: 12
        }
    },
    methods: {
        async getList() {
            this.lists = await api.listTops();
        }
    },
    mounted() {
        this.getList()
    }
}
</script>