import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/pages/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/pages/register.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
})

export default router
