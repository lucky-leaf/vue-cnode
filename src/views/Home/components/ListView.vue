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
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>

</style>
