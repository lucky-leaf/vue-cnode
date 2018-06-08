import {
  getTopics
} from '../api'

export default {
  async GET_TOPICS ({ state, commit, dispatch }, { page, tab, limit, mdrender }) {
    commit('SET_TAB', {
      tab
    })
    const response = await getTopics({
      page,
      tab,
      limit,
      mdrender
    })
    commit('SET_LIST', {
      tab,
      data: response.data.data
    })
  }
}
