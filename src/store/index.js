import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 'all',
    limit: 15,
    page: 1,
    mdrender: true,
    lists: {
      all: [],
      good: [],
      share: [],
      ask: [],
      job: [],
      dev: []
    }
  },
  mutations,
  actions
})
