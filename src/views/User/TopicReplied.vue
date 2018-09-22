<template>
  <div class="topic-replied">
    <el-card
      shadow="never"
      class="box-card">
      最近回复的话题
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
    }
  }
</style>
