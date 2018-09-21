<template>
  <div class="topic-header">
    <div class="full-title">
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
    <div class="info">
      <span> 发布于 {{ relativeTime }}</span>
      <span> 作者
        <router-link
          :to="toUser"
          class="user-name">{{ topic.author.loginname }}</router-link>
      </span>
      <span> {{ topic.visit_count }} 次浏览</span>
      <el-button
        type="success"
        size="small">收藏</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import types from '../../mixins/types'

export default {
  name: 'TopicHeader',
  mixins: [types],
  computed: {
    ...mapState(['topic']),
    tab () {
      return this.types[this.topic.tab]
    },
    relativeTime () {
      return moment(this.topic.create_at).fromNow()
    },
    toUser () {
      return `/user/${this.topic.author.loginname}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .topic-header {
    .full-title {
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

    .info {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 13px;
      color: #757575;

      span {
        &::before {
          content: "•";
        }
      }

      .user-name {
        color: inherit;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      .el-button {
        margin-left: auto;
      }
    }
  }
</style>
