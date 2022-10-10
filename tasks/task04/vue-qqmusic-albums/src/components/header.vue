<template lang="pug">
header
  nav
    img(src="https://learn.91tangzhuan.com/frontend-basics/lesson-03/imgs/logo.png" alt="QQ音乐" srcset)
</template>

<style lang="scss" scoped>
header {
  background-color: white;
  box-shadow: -1px 17px 65px -27px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: -1px 17px 65px -27px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 17px 65px -27px rgba(0, 0, 0, 0.5);

  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;

  > nav {
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 30px;
  }
}
</style>
