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
    //  一级路由
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/index/mine.vue')
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
