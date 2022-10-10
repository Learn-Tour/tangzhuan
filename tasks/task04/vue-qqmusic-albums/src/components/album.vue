<template lang="pug">
.album
  img(:src="album.img" alt)
  .name {{ album.name }}
  .info
    .author {{ album.author }}
    .time {{ album.time }}
</template>

<script lang="ts">
export default {
  props: {
    album: {
      type: Object,
      default: {
        name : "空",
        author: "空",
        time: "</>"
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.album {
  display: flex;
  flex-direction: column;
  padding: 6px;
  background-color: #f7f9fa;
  border: 1px solid #f7f9fa;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border-color: #ff915e;
    -webkit-box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
    -moz-box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
    box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
  }

  > img {
    width: 100%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    & :hover {
      /* filter: blur(1.5rem); */
      opacity: 0.7;
      & ::after {
        content: "删除";
      }
    }
  }
  > .name {
    font-weight: 700;
    font-size: 15px;
  }
  > .info {
    color: #999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
