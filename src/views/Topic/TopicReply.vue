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
    margin: -20px;

    .count {
      padding: 10px;
      font-size: 18px;
      line-height: 24px;
      border-bottom: 1px solid #f0f0f0;
    }
  }
</style>
