import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: () => import('../views/SignupPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () => import('../views/TicketManagement.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
