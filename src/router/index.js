import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '../views/Home/HomeContent'
import TopicView from '../views/Topic/TopicView'
import LoginView from '../views/Login/LoginView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeContent
    },
    {
      path: '/topic/:id',
      component: TopicView,
      props: true
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})
