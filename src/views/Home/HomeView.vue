<template>
  <div>
    <home-header />
    <div class="container">
      <router-view />
    </div>
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

<style>

</style>
