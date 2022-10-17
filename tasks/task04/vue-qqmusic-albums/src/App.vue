<script lang="jsx">
import Header from "./components/header.vue";
import Album from "./components/album.vue";
import * as api from "./service/api";

export default {
  components: {
    Header,
    Album,
  },
  data() {
    return {
      albums: [],
      areas:[],
      current: 0,
    };
  },
  methods: {
    async listAreas() {
      const items = await api.get_areas();
      // console.log(items)
      this.areas = items
    },
    async listAlbums(e) {
      // 根据当前tab请求专辑列表
      console.log("当前选择",e)
      this.current = e;
      this.albums = await api.get_albums(e)
    },
    deleteAlbum(item) {
      // 通过索引 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
      const index = this.albums.indexOf(item)
      if(index != -1)
        this.albums.splice(index,1)
    }
  },
  // 生命周期
  mounted() {
    this.listAreas();
    this.listAlbums(1);
  },
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template lang="pug">
Header
main
  section.tabs
    // 根据请求到的areas遍历生成地区标签列表
    span(v-for="area in areas",:class="['tab', { active: area.id === current }]",@click="listAlbums(area.id)") {{ area.name }}
  section.albums
    Album(v-for="album in albums" :album="album" :key="album.id" @click="deleteAlbum(album)")
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
