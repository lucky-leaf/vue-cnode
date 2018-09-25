import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    tab: 'all',
    limit: 40,
    mdrender: false,
    topic: {
      author: {},
      content: ''
    },
    lists: {
      all: [],
      good: [],
      share: [],
      ask: [],
      job: [],
      dev: []
    },
    user: {}
  },
  mutations,
  actions
})
