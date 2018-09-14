<template>
  <div>
    <a href="#">
      <img
        class="avatar"
        :src="item.author.avatar_url"
        alt="avatar">
    </a>
    <el-tag>{{ item.tab }}</el-tag>
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

</style>
