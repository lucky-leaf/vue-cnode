<template>
  <div class="reply-list">
    <reply-item
      v-for="(item, index) in list"
      :key="item.id"
      :item="item"
      :floor="index + 1" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReplyItem from './ReplyItem'

export default {
  name: 'ReplyList',
  components: { ReplyItem },
  computed: {
    ...mapState(['topic']),
    list () {
      return this.topic.replies
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
