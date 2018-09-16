<template>
  <el-pagination
    :page-size="limit"
    :total="total"
    background
    layout="prev, pager, next"
    @current-change="handleChange"/>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ThePagination',
  props: {
    'pageCount': {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState(['tab', 'limit', 'mdrender']),
    total () {
      return this.limit * this.pageCount
    }
  },
  methods: {
    ...mapActions(['GET_TOPICS']),
    handleChange (currentPage) {
      this.GET_TOPICS({
        page: currentPage,
        tab: this.tab,
        limit: this.limit,
        mdrender: this.mdrender
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-pagination {
    margin-top: 20px;
  }
</style>
