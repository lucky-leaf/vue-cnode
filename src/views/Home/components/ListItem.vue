<template>
  <div class="item">
    <a href="#">
      <img
        :src="item.author.avatar_url"
        class="avatar"
        alt="avatar">
    </a>
    <el-tag
      size="small"
      type="success">{{ item.tab }}</el-tag>
    <span :title="item.title">{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;

    .avatar {
      width: 30px;
      height: 30px;
    }
  }
</style>
