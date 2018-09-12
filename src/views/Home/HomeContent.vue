<template>
  <el-tabs
    v-model="activeName"
    type="border-card"
    @tab-click="handleClick">
    <el-tab-pane
      label="全部"
      name="all">
      <list-view/>
    </el-tab-pane>
    <el-tab-pane
      label="精华"
      name="good">
      <list-view/>
    </el-tab-pane>
    <el-tab-pane
      label="分享"
      name="share">
      <list-view/>
    </el-tab-pane>
    <el-tab-pane
      label="问答"
      name="ask">
      <list-view/>
    </el-tab-pane>
    <el-tab-pane
      label="招聘"
      name="job">
      <list-view/>
    </el-tab-pane>
    <el-tab-pane
      label="测试"
      name="test">
      <list-view/>
    </el-tab-pane>
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
      activeName: 'all'
    }
  },
  computed: {
    ...mapState([
      'tab',
      'limit',
      'page',
      'mdrender'
    ])
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
      this.GET_TOPICS({
        page: 1,
        tab: tab.name,
        limit: this.limit,
        mdrender: this.mdrender
      })
    }
  }
}
</script>

<style>

</style>
