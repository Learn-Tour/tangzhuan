<template lang="pug">
van-row(gutter="20")
    van-col(:span="span",v-for="item in lists")
        TopItem(:item="item")
</template>

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