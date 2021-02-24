import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
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
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo, { duration: 1000 })
  }
})

export default router
