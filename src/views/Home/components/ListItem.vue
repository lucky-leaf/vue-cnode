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
    <router-link
      :to="to"
      :title="item.title"
      class="topic-title">{{ item.title }}</router-link>
    <a href="#">
      <img
        src=""
        alt="">
    </a>
  </div>
</template>

<script>
import types from '../../../mixins/types'

export default {
  name: 'ListItem',
  mixins: [types],
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    tab () {
      return this.types[this.item.tab]
    },
    to () {
      return `/topic/${this.item.id}`
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
      margin: 0 auto 0 10px;
      width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
