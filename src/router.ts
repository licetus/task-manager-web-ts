import Vue from 'vue'
import Router from 'vue-router'
import ViewWelcome from './views/welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: ViewWelcome,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue'),
    },
  ],
})
