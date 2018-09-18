<template>
  <div class="topic-header">
    <el-tag
      v-if="topic.top"
      :hit="true"
      size="small"
      type="danger">置顶</el-tag>
    <el-tag
      v-if="topic.good"
      :hit="true"
      size="small"
      type="warning">精华</el-tag>
    <el-tag
      v-if="topic.tab"
      :hit="true"
      size="small"
      type="success">{{ topic.tab }}</el-tag>
    <h1 class="title">{{ topic.title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TopicHeader',
  computed: {
    ...mapState(['topic'])
  }
}
</script>

<style lang="scss" scoped>
  .topic-header {
    .title {
      font-size: 22px;
      margin: 10px 0;
    }
  }
</style>
