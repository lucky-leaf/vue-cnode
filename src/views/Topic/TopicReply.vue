<template>
  <div class="topic-reply">
    <div class="count">
      {{ topic.reply_count }} 回复
    </div>
    <reply-list />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReplyList from './components/ReplyList'

export default {
  name: 'TopicReply',
  components: { ReplyList },
  computed: mapState(['topic'])
}
</script>

<style lang="scss" scoped>
  .topic-reply {
    .count {
      font-size: 18px;
    }
  }
</style>
