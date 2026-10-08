<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app permanent>
      <v-list>
        <v-list-item :title="user?.fullName || user?.email || 'Usuario'" :subtitle="user?.roleName || 'Usuario'">
          <template v-slot:prepend>
            <v-avatar color="primary">
              <v-icon icon="mdi-account"></v-icon>
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" to="/dashboard" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-devices" title="Dispositivos" to="/devices" value="devices"></v-list-item>
        <v-list-item prepend-icon="mdi-thermometer" title="Sensores" to="/sensors" value="sensors"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-line" title="Telemetría" to="/telemetry" value="telemetry"></v-list-item>
        <v-list-item prepend-icon="mdi-bell" title="Alertas" to="/alerts" value="alerts"></v-list-item>
        <v-list-item prepend-icon="mdi-robot" title="Automatización" to="/automation" value="automation"></v-list-item>
        <v-list-item prepend-icon="mdi-account-cog" title="Perfil" to="/profile" value="profile"></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>
        <v-list>
          <v-list-item prepend-icon="mdi-logout" title="Cerrar sesión" @click="handleLogout"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SIGMA-TI</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const drawer = ref(true)

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}
</script>