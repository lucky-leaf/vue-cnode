<template>
  <div class="tile is-ancestor is-marginless">
    <div class="tile is-parent is-8">
      <div class="tile is-child box is-radiusless is-paddingless">
        <div class="tabs is-marginless">
          <ul>
            <li><a>全部</a></li>
            <li><a>精华</a></li>
            <li><a>分享</a></li>
            <li><a>问答</a></li>
            <li><a>招聘</a></li>
            <li><a>测试</a></li>
          </ul>
        </div>
        <list-view :list="list"/>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child">
        <user-info />
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import ListView from './components/ListView'
import UserInfo from './components/UserInfo'

export default {
  name: 'HomeContent',
  components: {
    ListView,
    UserInfo
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
  mounted () {
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
