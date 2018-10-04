import {
  getTopics, getTopicById, checkToken, getUser
} from '../api'

export default {
  async GET_TOPICS ({ state, commit }, { page, tab, limit, mdrender }) {
    commit('SET_TAB', { tab })
    const { data } = await getTopics({
      page, tab, limit, mdrender
    })
    commit('SET_LIST', { tab, data: data.data })
  },

  async GET_TOPIC ({ state, commit }, { id, mdrender, accesstoken }) {
    const { data } = await getTopicById({
      id, mdrender, accesstoken
    })
    commit('SET_TOPIC', { data: data.data })
  },

  async CHECK_TOKEN ({ state, commit }, accessToken) {
    const { data } = await checkToken(accessToken)
    if (data.success) {
      commit('SET_ACCESSTOKEN', { accessToken })
    } else {
      commit('CHECK_FAILURE')
    }
  },

  async GET_USER ({ state, commit }, loginname) {
    const { data } = await getUser(loginname)
    if (data.success) {
      commit('SET_USER', { data: data.data })
    } else {
      commit('CHECK_FAILURE')
    }
  }
}
