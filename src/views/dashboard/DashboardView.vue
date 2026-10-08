<template>
  <AppLayout>
    <v-container>
      <h1 class="text-h4 mb-4">Dashboard</h1>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-subtitle-1">Dispositivos</div>
              <div class="text-h4">{{ devicesCount }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-subtitle-1">Dispositivos Online</div>
              <div class="text-h4 text-success">{{ devicesOnline }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-subtitle-1">Dispositivos Offline</div>
              <div class="text-h4 text-error">{{ devicesOffline }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-subtitle-1">Alertas Activas</div>
              <div class="text-h4 text-warning">{{ activeAlerts }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-card-text>
              <div class="text-subtitle-1">Sensores Activos</div>
              <div class="text-h4">{{ sensorsActive }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="mt-6">
        <v-card-title>Últimas lecturas de telemetría</v-card-title>
        <v-card-text>
          <div class="text-body-2 text-grey">Preparado para mostrar datos desde /api/telemetry</div>
        </v-card-text>
      </v-card>
      <v-card class="mt-6">
        <v-card-title>Estado general del sistema</v-card-title>
        <v-card-text>
          <div class="text-body-2 text-grey">Sin datos aún - se integrará con API según disponibilidad</div>
        </v-card-text>
      </v-card>
    </v-container>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '../../components/layout/AppLayout.vue'

const devicesCount = ref(0)
const devicesOnline = ref(0)
const devicesOffline = ref(0)
const activeAlerts = ref(0)
const sensorsActive = ref(0)
</script>