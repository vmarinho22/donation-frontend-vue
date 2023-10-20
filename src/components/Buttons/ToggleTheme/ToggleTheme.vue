<template>
    <v-btn variant="text" @click="toggleTheme">
      <div v-if="theme.global.name.value === 'light'">
        <v-icon>mdi-weather-night</v-icon>
      </div>
      <div v-else>
        <v-icon>mdi-weather-sunny</v-icon>
      </div>
    </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme();

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>