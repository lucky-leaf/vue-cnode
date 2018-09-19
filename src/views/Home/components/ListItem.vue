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
    <p class="counter">
      <span
        class="reply-count"
        title="回复数">{{ item.reply_count }}</span>
      <span class="seperator">/</span>
      <span
        class="visit-count"
        title="点击数">{{ item.visit_count }}</span>
    </p>
    <span class="last-reply-time">
      4小时前
    </span>
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
      margin-left: 10px;
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

    .counter {
      position: relative;
      left: -70%;
      top: 20px;
      .reply-count {
        color: #409eff;
      }
      .seperator {
        margin: 0 -3px;
        font-size: 12px;
      }
      .visit-count {
        font-size: 12px;
        color: #b4b4b4;
      }
    }

    .last-reply-time {
      margin-left: auto;
    }
  }
</style>
