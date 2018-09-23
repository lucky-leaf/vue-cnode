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
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TopicReplied'
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
      }
    }
  }
</style>
