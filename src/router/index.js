import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard',
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
    document.title = `${to.meta.title} | Siamese`
  }
  next()
})

export default router
