import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/index/index.vue'),
      children: [
        {
          path: 'film',
          component: () => import('@/views/index/film.vue'),
          children: [
            {
              path: 'now',
              name: 'newPlaying',
              component: () => import('@/views/film/nowPlaying.vue')
            },
            {
              path: 'coming',
              name: 'comingSoon',
              component: () => import('@/views/film/comingSoon.vue')
            },
            {
              path: '',
              redirect: 'now'
            }
          ]
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('@/views/index/cinema.vue')
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('@/views/index/account.vue'),
          meta: {
            requireLogin: true
          }
        },
        {
          path: '',
          redirect: '/film/now'
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
    },
    {
      path: '/search',
      name: 'search',
      props: true,
      beforeEnter: (to, from, next) => {
        console.log(to, from)
        next()
      },
      component: () => import('@/views/search/index.vue')
    }],
  // 控制滚动行为
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    if (window.localStorage.getItem('userInfo')) {
      if (to.path === '/mine/login') {
        console.log(to)
        router.push('/account')
      }
      next()
    } else {
      // console.log(to)
      next({
        path: '/mine/login'
      })
    }
  } else {
    next()
  }
})

export default router
