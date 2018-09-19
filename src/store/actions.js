import {
  getTopics, getTopicById, checkToken
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

  async CHECK_TOKEN ({ state, commit }, accesstoken) {
    const response = await checkToken(accesstoken)
    if (response.success) {
      commit('SET_ACCESSTOKEN', { accesstoken })
    } else {
      commit('CHECK_FAILURE')
    }
  }
}
