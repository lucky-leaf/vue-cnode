<template>
  <div class="user-info">
    <el-card
      shadow="never"
      class="box-card">
      <div
        slot="header"
        class="title">
        用户信息
      </div>
      <div class="user-profile">
        <img
          :src="user.avatar_url"
          class="avatar"
          alt="avatar">
        <span class="score">{{ user.score }}积分</span>
        <a
          :href="githubUrl"
          target="_blank">@{{ user.githubUsername }}</a>
        <span class="created-time">注册时间{{ relativeTime }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'UserInfo',
  computed: {
    ...mapState(['user']),
    relativeTime () {
      return moment(this.user.create_at).fromNow()
    },
    githubUrl () {
      return `https://github.com/${this.user.githubUsername}`
    }
  }

}
</script>

<style lang="scss" scoped>
  .user-info {
    .box-card {
      border-radius: 0;

      .title {
        margin: -18px -20px;
        padding: 18px 20px;
        border-left: 5px solid #50bfff;
        font-size: 16px;
        font-weight: 700;
      }

      .user-profile {
        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
