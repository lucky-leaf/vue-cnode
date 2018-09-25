<template>
  <div class="topic-replied">
    <el-card
      shadow="never"
      class="box-card">
      <div
        slot="header"
        class="title">
        最近回复的话题
      </div>
      <topic-list :list="user.recent_replies"/>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopicList from './components/TopicList'

export default {
  name: 'TopicReplied',
  components: { TopicList },
  computed: mapState(['user'])
}
</script>

<style lang="scss" scoped>
  .topic-replied {
    margin-top: 10px;

    .box-card {
      border-radius: 0;

      .title {
        margin: -18px -20px;
        padding: 18px 20px;
        border-left: 5px solid #50bfff;
        background-color: #ecf8ff;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
</style>
