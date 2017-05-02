import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/dashboard/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
