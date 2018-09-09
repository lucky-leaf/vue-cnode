<template>
  <div>
    <home-header />
    <home-content class="content"/>
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
  .content {
    width: 1024px;
    margin: 20px auto 0;
  }
</style>
