<template>
  <div>
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
    list () {
      return this.$store.state.lists[this.tab]
    }
  }
}
</script>

<style>

</style>
