<template>
  <div class="topic-created">
    <el-card
      shadow="never"
      class="box-card">
      最近创建的话题
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
    }
  }
</style>
