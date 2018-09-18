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
      type="success">{{ tab }}</el-tag>
    <h1 class="title">{{ topic.title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import types from '../../mixins/types'

export default {
  name: 'TopicHeader',
  mixins: [types],
  computed: {
    ...mapState(['topic']),
    tab () {
      return this.types[this.topic.tab]
    }
  }
}
</script>

<style lang="scss" scoped>
  .topic-header {
    display: flex;
    align-items: center;

    .el-tag {
      & + .el-tag {
        margin-left: 10px;
      }
    }

    .title {
      font-size: 22px;
      margin: 0 0 0 10px;
    }
  }
</style>
