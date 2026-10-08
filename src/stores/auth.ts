import { defineStore } from 'pinia'
import { ref } from 'vue'
import authService from '../services/auth.service'
import type { AuthResponse, LoginRequest, RegisterRequest, UserDto } from '../types/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserDto | null>(null)
  const accessToken = ref<string | null>(localStorage.getItem('accessToken'))
  const refreshToken = ref<string | null>(localStorage.getItem('refreshToken'))
  const isAuthenticated = ref<boolean>(!!accessToken.value)

  const setAuth = (auth: AuthResponse) => {
    accessToken.value = auth.accessToken
    refreshToken.value = auth.refreshToken
    user.value = auth.user
    isAuthenticated.value = true
    localStorage.setItem('accessToken', auth.accessToken)
    localStorage.setItem('refreshToken', auth.refreshToken)
  }

  const clearAuth = () => {
    accessToken.value = null
    refreshToken.value = null
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  const login = async (credentials: LoginRequest) => {
    const response = await authService.login(credentials)
    if (response.success && response.data) {
      setAuth(response.data)
    }
    return response
  }

  const register = async (data: RegisterRequest) => {
    const response = await authService.register(data)
    if (response.success && response.data) {
      setAuth(response.data)
    }
    return response
  }

  const logout = async () => {
    try {
      if (refreshToken.value) {
        await authService.logout({ refreshToken: refreshToken.value })
      }
    } finally {
      clearAuth()
    }
  }

  const fetchUser = async () => {
    try {
      const response = await authService.me()
      if (response.success && response.data) {
        user.value = response.data
        isAuthenticated.value = true
      }
    } catch (error) {
      clearAuth()
      throw error
    }
  }

  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    setAuth,
    clearAuth,
    login,
    register,
    logout,
    fetchUser
  }
})