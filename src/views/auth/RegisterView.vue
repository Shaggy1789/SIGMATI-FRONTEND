<template>
  <v-container class="d-flex align-center justify-center" style="min-height: 100vh">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6">
          <v-card-title class="text-h5 text-center mb-4">Registro - SIGMA-TI</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleRegister">
              <v-text-field
                v-model="fullName"
                label="Nombre completo"
                required
                prepend-inner-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Contraseña"
                type="password"
                required
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <v-btn type="submit" color="primary" block class="mt-4" :loading="loading">
                Registrarse
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn variant="text" to="/login">¿Ya tienes cuenta? Inicia sesión</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const fullName = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

const handleRegister = async () => {
  loading.value = true
  try {
    const response = await authStore.register({
      email: email.value,
      password: password.value,
      fullName: fullName.value
    })
    if (response.success) {
      router.push('/dashboard')
    }
  } catch (error) {
    console.error('Register error:', error)
  } finally {
    loading.value = false
  }
}
</script>