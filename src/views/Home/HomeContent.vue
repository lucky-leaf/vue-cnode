<template>
  <el-tabs
    v-model="activeName"
    type="border-card"
    @tab-click="handleClick">
    <el-tab-pane
      label="全部"
      name="all">全部</el-tab-pane>
    <el-tab-pane
      label="精华"
      name="good">精华</el-tab-pane>
    <el-tab-pane
      label="分享"
      name="share">分享</el-tab-pane>
    <el-tab-pane
      label="问答"
      name="ask">问答</el-tab-pane>
    <el-tab-pane
      label="招聘"
      name="job">招聘</el-tab-pane>
    <el-tab-pane
      label="测试"
      name="test">测试</el-tab-pane>
  </el-tabs>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import ListView from './components/ListView'

export default {
  name: 'HomeContent',
  components: {
    ListView
  },
  data () {
    return {
      activeName: 'second'
    }
  },
  computed: {
    ...mapState([
      'tab',
      'limit',
      'page',
      'mdrender'
    ]),
    list () {
      return this.$store.state.lists[this.tab]
    }
  },
  created () {
    this.GET_TOPICS({
      page: 1,
      tab: this.tab,
      limit: this.limit,
      mdrender: this.mdrender
    })
  },
  methods: {
    ...mapActions([
      'GET_TOPICS'
    ]),
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

</style>
