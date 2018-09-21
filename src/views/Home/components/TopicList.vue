<template>
  <div class="topic-list">
    <topic-item
      v-for="item in list"
      :key="item.id"
      :item="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopicItem from './TopicItem'

export default {
  name: 'TopicList',
  components: { TopicItem },
  computed: {
    ...mapState(['tab']),
    list () {
      return this.$store.state.lists[this.tab]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
