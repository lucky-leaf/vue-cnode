<template>
  <div class="topic-item">
    <router-link
      :to="toUser"
      :title="item.author.loginname">
      <img
        :src="item.author.avatar_url"
        class="avatar"
        alt="avatar">
    </router-link>
    <router-link
      :to="toTopic"
      :title="item.title"
      class="topic-title">
      {{ item.title }}
    </router-link>
    <span class="last-reply-time">
      {{ relativeTime }}
    </span>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'TopicItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    toUser () {
      return `/user/${this.item.author.loginname}`
    },
    toTopic () {
      return `/topic/${this.item.id}`
    },
    relativeTime () {
      return moment(this.item.last_reply_at).fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>
  .topic-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #f0f0f0;
    }

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .topic-title {
      margin-left: 10px;
      width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #409eff;
      }
    }

    .last-reply-time {
      margin-left: auto;
      font-size: 12px;
      color: #b4b4b4;
    }
  }
</style>
