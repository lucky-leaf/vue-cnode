<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick">
    <el-tab-pane
      label="全部"
      name="first">全部</el-tab-pane>
    <el-tab-pane
      label="精华"
      name="second">精华</el-tab-pane>
    <el-tab-pane
      label="分享"
      name="third">分享</el-tab-pane>
    <el-tab-pane
      label="问答"
      name="forth">问答</el-tab-pane>
    <el-tab-pane
      label="招聘"
      name="fifth">招聘</el-tab-pane>
    <el-tab-pane
      label="测试"
      name="sixth">测试</el-tab-pane>
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
    ])
  }
}
</script>

<style>

</style>
