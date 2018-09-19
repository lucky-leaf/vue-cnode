<template>
  <div id="app">
    <home-view />
  </div>
</template>

<script>
import HomeView from './views/Home/HomeView'

export default {
  components: {
    HomeView
  }
}
</script>

<style lang="scss">
  html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 14px;
    color: #303133;
    background-color: #f8f8f8;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
