<template>
  <div class="topic-created">
    <el-card
      shadow="never"
      class="box-card">
      <div
        slot="header"
        class="title">最近创建的话题</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TopicCreated'
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
