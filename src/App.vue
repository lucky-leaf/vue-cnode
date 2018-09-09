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

<style>
  html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 14px;
    background-color: #f8f8f8;
  }
</style>
