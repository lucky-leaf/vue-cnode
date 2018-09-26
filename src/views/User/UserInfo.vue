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
        <div class="profile">
          <span class="score">积分: {{ user.score }}</span>
          <label>
            GITHUB:
            <a
              :href="githubUrl"
              class="github"
              target="_blank">
              {{ user.githubUsername }}
            </a>
          </label>
          <span class="created-time">注册时间: {{ relativeTime }}</span>
        </div>
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
        display: flex;

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }

        .profile {
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          margin-left: 30px;

          .score {
            display: block;
          }

          .github {
            color: inherit;

            &:hover {
              color: #409eff;
            }
          }
          .created-time {
            display: block;
          }
        }
      }
    }
  }
</style>
