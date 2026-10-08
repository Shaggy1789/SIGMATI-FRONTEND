export interface UserDto {
  id: number
  email: string
  fullName?: string | null
  roleName?: string | null
  isActive?: boolean
  createdAt?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  fullName?: string
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  tokenType: string
  expiresIn: number
  user: UserDto
}

export interface TokenResponse {
  accessToken: string
  refreshToken: string
  tokenType: string
  expiresIn: number
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface LogoutRequest {
  refreshToken: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message?: string | null
  data?: T | null
  errors?: Record<string, string[]> | null
}