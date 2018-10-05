export default {
  SET_TAB (state, { tab }) {
    state.tab = tab
  },
  SET_LIST (state, { tab, data }) {
    state.lists[tab] = data
  },
  SET_TOPIC (state, { data }) {
    state.topic = data
  },
  SET_ACCESSTOKEN (state, { accessToken }) {
    state.accessToken = accessToken
  },
  SET_USER (state, { data }) {
    state.user = data
  },
  CHECK_FAILURE (state) {
    console.log('please input correct token')
  }
}
