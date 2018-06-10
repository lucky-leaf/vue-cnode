import {
  getTopics, getTopicById
} from '../api'

export default {
  async GET_TOPICS ({ state, commit }, { page, tab, limit, mdrender }) {
    commit('SET_TAB', {
      tab
    })
    const { data } = await getTopics({
      page, tab, limit, mdrender
    })
    commit('SET_LIST', {
      tab,
      data: data.data
    })
  },
  async GET_TOPIC ({ state, commit }, { id, mdrender, accesstoken }) {
    const { data } = await getTopicById({
      id, mdrender, accesstoken
    })
    commit('SET_TOPIC', {
      data: data.data
    })
  }
}
