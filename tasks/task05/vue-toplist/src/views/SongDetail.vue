<template lang="pug">
van-nav-bar(title="详情",left-text="返回",left-arrow,@click-left="onClickLeft"
  @click-right="onClickRight",placeholder,fixed)
    template(#right)
        van-icon(name="like-o",size="18")
.container 
    .cover
        van-image(width="150")
    van-cell-group(inset)
        van-cell(title="歌曲",value="内容")
        van-cell(title="歌手",value="内容")
        van-cell(title="时长",value="内容")
        van-cell(title="VIP 专享")
            template(#right-icon)
                van-tag(type="success",plain,size="medium") 是
    .btn
        van-button(type="primary",block,round) 添加收藏
        //- van-button(type="danger",block,round) 取消收藏
</template>
<style lang="scss">
.container {
  > .cover {
    display: flex;
    justify-content: center;
    padding: 15px;
  }
  .btn {
    margin: 16px;
  }
}
</style>
<script>
// 引入函数组件的样式,需要手动引用样式
import { Toast } from "vant";
import "vant/es/toast/style";

export default {
  methods: {
    onClickLeft() {
      history.back();
    },
    onClickRight() {
      console.log("按钮");
      Toast("按钮");
    },
  },
};
</script>
