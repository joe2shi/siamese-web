import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'
import SignInLayout from '../views/auth/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignInLayout',
    component: SignInLayout,
    redirect: '/signin',
    children: [
      {
        path: 'signin',
        name: 'SignIn',
        meta: {
          title: 'SignIn'
        },
        component: () => import('../views/auth/SignIn.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard'
        },
        component: () => import('../views/dashboard/Index.vue')
      },
      {
        path: 'album',
        name: 'Album',
        meta: {
          title: 'Album'
        },
        component: () => import('../views/album/Index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `Siamese / ${to.meta.title}`
  }
  next()
})

export default router
