<template>
  <el-tabs
    v-model="activeName"
    :stretch="true"
    type="border-card"
    @tab-click="handleClick">

    <el-tab-pane
      label="全部"
      name="all">
      <topic-list class="topic-list" />
      <the-pagination :page-count="89"/>
    </el-tab-pane>

    <el-tab-pane
      label="精华"
      name="good">
      <topic-list class="topic-list" />
      <the-pagination :page-count="17"/>
    </el-tab-pane>

    <el-tab-pane
      label="分享"
      name="share">
      <topic-list class="topic-list" />
      <the-pagination :page-count="36"/>
    </el-tab-pane>

    <el-tab-pane
      label="问答"
      name="ask">
      <topic-list class="topic-list" />
      <the-pagination :page-count="53"/>
    </el-tab-pane>

    <el-tab-pane
      label="招聘"
      name="job">
      <topic-list class="topic-list" />
      <the-pagination :page-count="13"/>
    </el-tab-pane>

    <el-tab-pane
      label="测试"
      name="dev">
      <topic-list class="topic-list" />
      <the-pagination :page-count="67"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TopicList from './components/TopicList'
import ThePagination from './components/ThePagination'

export default {
  name: 'HomeContent',
  components: { TopicList, ThePagination },
  computed: {
    ...mapState(['tab', 'limit', 'page', 'mdrender']),
    activeName: {
      get () { return this.tab },
      set (newValue) {}
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
    ...mapActions(['GET_TOPICS']),
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

<style lang="scss">
  .topic-list {
    margin: -15px -15px 0 -15px;
  }
</style>
