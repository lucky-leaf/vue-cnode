import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'github-markdown-css/github-markdown.css'
import locale from './mixins/locale'

import App from './App'
import store from './store'
import router from './router'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: [locale],
  store,
  router,
  render: h => h(App)
})
