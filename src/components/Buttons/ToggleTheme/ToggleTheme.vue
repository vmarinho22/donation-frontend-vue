<template>
  <v-btn
    :icon="theme.global.name.value === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
    variant="text"
    @click="toggleTheme"
  />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}
</script>
