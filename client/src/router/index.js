import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Status from '@/components/Status'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
