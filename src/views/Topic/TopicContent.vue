<template>
  <div
    class="topic-content"
    v-html="contentHtml" />
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'

export default {
  name: 'TopicContent',
  computed: {
    ...mapState(['topic']),
    contentHtml () {
      return marked(this.topic.content)
    }
  }
}
</script>

<style lang="scss" scoped>
  .topic-content {
    margin: -20px;
  }
</style>
