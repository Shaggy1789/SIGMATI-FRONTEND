<template>
  <AppLayout>
    <v-container>
      <h1 class="text-h4 mb-4">Perfil</h1>
      <v-card>
        <v-card-title>Información del usuario</v-card-title>
        <v-card-text v-if="user">
          <div><strong>Email:</strong> {{ user.email }}</div>
          <div><strong>Nombre:</strong> {{ user.fullName || '-' }}</div>
          <div><strong>Rol:</strong> {{ user.roleName || '-' }}</div>
          <div><strong>Activo:</strong> {{ user.isActive ? 'Sí' : 'No' }}</div>
        </v-card-text>
      </v-card>
    </v-container>
  </AppLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppLayout from '../../components/layout/AppLayout.vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>