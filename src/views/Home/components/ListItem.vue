<template>
  <div class="item">
    <a href="#">
      <img
        :src="item.author.avatar_url"
        class="avatar"
        alt="avatar">
    </a>
    <el-tag
      v-if="item.top"
      :hit="true"
      size="small"
      type="danger">置顶</el-tag>
    <el-tag
      v-if="item.good"
      :hit="true"
      size="small"
      type="warning">精华</el-tag>
    <el-tag
      v-if="item.tab"
      :hit="true"
      size="small"
      type="success">{{ tab }}</el-tag>
    <span
      :title="item.title"
      class="topic-title">{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      types: {
        'share': '分享',
        'ask': '问答',
        'dev': '测试',
        'job': '招聘'
      }
    }
  },
  computed: {
    tab () {
      return this.types[this.item.tab]
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    border-top: 1px solid #f0f0f0;
    padding: 10px;
    align-items: center;

    &:hover {
      background-color: #f0f0f0;
    }

    .avatar {
      width: 30px;
      height: 30px;
    }

    .el-tag {
      margin-left: 10px;
    }

    .topic-title {
      margin-left: 10px;
    }
  }
</style>
