<template>
  <div class="list">
    <list-item
      v-for="item in list"
      :key="item.id"
      :item="item"/>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'ListView',
  components: {
    ListItem
  },
  computed: {
    tab () {
      return this.$store.state.tab
    },
    list () {
      return this.$store.state.lists[this.tab]
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    height: 2168px;
  }
</style>
