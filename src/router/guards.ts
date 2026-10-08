import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '../stores/auth'

export const authGuard = async (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const authStore = useAuthStore()
  const requiresAuth = to.meta.requiresAuth === true

  if (requiresAuth) {
    if (!authStore.isAuthenticated) {
      return next({ name: 'login', query: { redirect: to.fullPath } })
    }

    if (!authStore.user) {
      try {
        await authStore.fetchUser()
        return next()
      } catch {
        return next({ name: 'login' })
      }
    }
    return next()
  }

  if (authStore.isAuthenticated && (to.name === 'login' || to.name === 'register')) {
    return next({ name: 'dashboard' })
  }

  return next()
}