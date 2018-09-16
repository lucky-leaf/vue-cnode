<template>
  <el-pagination
    :page-size="limit"
    :total="total"
    background
    layout="prev, pager, next"/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ThePagination',
  props: {
    'pageCount': {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState(['limit']),
    total () {
      return this.limit * this.pageCount
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-pagination {
    margin-top: 20px;
  }
</style>
