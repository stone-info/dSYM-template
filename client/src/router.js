import Vue    from 'vue'
import Router from 'vue-router'
import Index  from './views/Index'
import Home   from './views/Home'

Vue.use(Router)

let router = new Router({
  mode  : 'history',
  base  : process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: Home},
    {path: '/index', name: 'index', component: Index},
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
