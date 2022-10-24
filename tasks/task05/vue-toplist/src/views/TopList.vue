<template lang="pug">
van-row(gutter="20")
    van-col(span="8")
        TopItem
    van-col(span="8")
        TopItem
</template>

<script>
import TopItem from '../components/TopItem.vue';
export default {
    components: { TopItem }
}
</script>