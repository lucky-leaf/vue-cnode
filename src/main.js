import Vue from 'vue'
import App from './App'
import 'bulma/css/bulma.css'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
