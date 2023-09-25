import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/homeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/loginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/default/defaultView.vue')
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem("token")
console.log('ssssss', isAuthenticated,to.name);

  if (!isAuthenticated && to.name != 'login') next({ name: 'login' })
  else next()

})

export default router
