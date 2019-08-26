import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/signup.vue'
import Signin from './views/signin'
import dashboard from './views/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/signin',
      name:'signin',
      component:Signin
    },
    {
   path:'/signup',
   name:'signup',
   component:Signup
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:dashboard
       },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
