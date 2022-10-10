<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header.vue";
import Album from "./components/album.vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template lang="pug">
Header
main
  section.tabs
    // 根据请求到的areas遍历生成地区标签列表
    span.tab 中国
    span.tab.active 美国
  section.albums
    Album()
</template>

<style scoped lang="scss">
main {
  margin-top: 80px;
  padding: 80px 60px;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 10px;

  > .tab {
    cursor: pointer;
    display: inline-block;
    padding: 0 8px;
    margin: 0 20px 15px 0;
    line-height: 26px;
  }
  > .active {
    background-color: #31c27c;
    color: #fff;
  }
}
.albums {
  display: grid;
  /* grid-template-columns: repeat(5,1fr); */
  /* 自动填充 */
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  gap: 32px;
}
/*
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
