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
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
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
    }
  }
</style>
