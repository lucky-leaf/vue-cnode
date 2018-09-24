<template>
  <div class="topic-created">
    <el-card
      shadow="never"
      class="box-card">
      <div
        slot="header"
        class="title">最近创建的话题</div>
      <topic-list :list="user.recent_topics"/>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopicList from './components/TopicList'

export default {
  name: 'TopicCreated',
  components: { TopicList },
  computed: mapState(['user'])
}
</script>

<style lang="scss" scoped>
  .topic-created {
    margin-top: 10px;

    .box-card {
      border-radius: 0;

      .title {
        margin: -18px -20px;
        padding: 18px 20px;
        border-left: 5px solid #50bfff;
      }
    }
  }
</style>
