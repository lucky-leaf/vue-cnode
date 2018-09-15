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
    <span :title="item.title">{{ item.title }}</span>
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
    align-items: center;

    .avatar {
      width: 30px;
      height: 30px;
    }
  }
</style>
