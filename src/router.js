import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/index/index.vue'),
      children: [
        {
          path: 'film',
          component: () => import('@/views/index/film.vue')
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('@/views/index/cinema.vue')
        },
        {
          path: '',
          redirect: '/film'
        }
      ]
    },
    {
      path: '/mine',
      component: () => import('@/views/index/mine/index.vue'),
      children: [{
        path: 'signup',
        name: 'signup',
        component: () => import('@/views/index/mine/signup.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/index/mine/login.vue')
      },
      {
        path: '',
        redirect: 'login'
      }]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/views/city/index.vue')
    }
  ],
  // 控制滚动行为
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
