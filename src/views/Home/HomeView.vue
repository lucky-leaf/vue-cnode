<template>
  <div class="home-view">
    <home-header />
    <transition
      name="el-fade-in-linear"
      mode="out-in">
      <router-view class="content" />
    </transition>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'

export default {
  components: {
    HomeHeader,
    HomeContent
  }
}
</script>

<style lang="scss" scoped>
  .home-view {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    width: 1024px;
    margin: 20px auto;
  }
</style>
