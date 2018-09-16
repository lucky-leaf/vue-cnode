<template>
  <div class="list">
    <list-item
      v-for="item in list"
      :key="item.id"
      :item="item"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from './ListItem'

export default {
  name: 'ListView',
  components: {
    ListItem
  },
  computed: {
    ...mapState(['tab']),
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
