import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Users from '@/components/Users.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/users',
    name: 'users',
    component: Users
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '*',
    redirect: '/users'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//    if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (window.localStorage.getItem('token') == null) 
//       next('/login')
//     else 
//       next()
//   } else {
//     next()
//   } 
// })

// router.beforeEach((to, from, next) => {
//    if (to.matched.some(record => record.meta.islogged)) {
//     if (window.localStorage.getItem('token') != null) 
//       next('/dashboard')
//     else 
//       next()
//   } else {
//     next()
//   } 
// })

export default router
