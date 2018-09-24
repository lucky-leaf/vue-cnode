<template>
  <div class="topic-list">
    <topic-item
      v-for="item in list"
      :key="item.id"
      :item="item" />
  </div>
</template>

<script>
import TopicItem from './TopicItem'

export default {
  name: 'TopicList',
  components: { TopicItem },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .topic-list {
    margin: -20px;
  }
</style>
