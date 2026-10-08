import api from './api'
import type { ApiResponse, AuthResponse, LoginRequest, LogoutRequest, RefreshTokenRequest, RegisterRequest, TokenResponse, UserDto } from '../types/auth'

export const authService = {
  register: async (data: RegisterRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await api.post('/api/auth/register', data)
    return response.data
  },

  login: async (data: LoginRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await api.post('/api/auth/login', data)
    return response.data
  },

  refresh: async (data: RefreshTokenRequest): Promise<ApiResponse<TokenResponse>> => {
    const response = await api.post('/api/auth/refresh', data)
    return response.data
  },

  logout: async (data: LogoutRequest): Promise<ApiResponse<boolean>> => {
    const response = await api.post('/api/auth/logout', data)
    return response.data
  },

  me: async (): Promise<ApiResponse<UserDto>> => {
    const response = await api.get('/api/auth/me')
    return response.data
  }
}

export default authService