<template>
  <div>
    <a href="#"><img
      src=""
      alt=""></a>
    <el-tag>问答</el-tag>
    <span>content</span>
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
