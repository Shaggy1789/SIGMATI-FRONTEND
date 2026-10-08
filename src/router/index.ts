import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guards'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/devices',
      name: 'devices',
      component: () => import('../views/devices/DevicesView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/sensors',
      name: 'sensors',
      component: () => import('../views/sensors/SensorsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/telemetry',
      name: 'telemetry',
      component: () => import('../views/telemetry/TelemetryView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('../views/alerts/AlertsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/automation',
      name: 'automation',
      component: () => import('../views/automation/AutomationView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/ProfileView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard'
    }
  ]
})

router.beforeEach(authGuard)

export default router