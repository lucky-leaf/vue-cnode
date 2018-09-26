<template>
  <div class="reply-item">
    <router-link
      :to="toUser"
      class="avatar">
      <img
        :src="item.author.avatar_url"
        class="img"
        alt="avatar">
    </router-link>
    <div class="reply-info">
      <router-link
        :to="toUser"
        class="user">
        {{ item.author.loginname }}
      </router-link>
      <div
        class="reply-content"
        v-html="replyHtml" />
      <div class="info">
        <span class="floor">#{{ floor }}</span>
        <span class="time">{{ relativeTime }}</span>
        <span class="like">喜欢</span>
        <span class="reply-btn">回复</span>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import moment from 'moment'

export default {
  name: 'ReplyItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    floor: {
      type: Number,
      default: 0
    }
  },
  computed: {
    replyHtml () {
      return marked(this.item.content)
    },
    toUser () {
      return `/user/${this.item.author.loginname}`
    },
    relativeTime () {
      return moment(this.item.create_at).fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>
  .reply-item {
    display: flex;
    border-bottom: 1px solid #f0f0f0;

    .avatar {
      margin: 24px 0 0 20px;

      .img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }

    .reply-info {
      margin-left: 20px;
      padding: 22px 0 14px;

      .user {
        line-height: 18px;
        color: #6d757a;
        text-decoration: none;

        &:hover {
          color: #409eff;
        }
      }

      .info {
        color: #99a2aa;
        font-size: 12px;
        line-height: 26px;

        .floor,
        .time,
        .like {
          margin-right: 20px;
        }
      }
    }
  }
</style>
