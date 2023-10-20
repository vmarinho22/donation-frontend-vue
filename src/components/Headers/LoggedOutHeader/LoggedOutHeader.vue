<template>
  <v-toolbar density="compact" title="Donation System" color="transparent" style="margin-bottom: 16px;">
    <toggle-theme />
    <v-btn prepend-icon="mdi-account-key" variant="text" @click="goToLogin"> {{ $t('buttons.signin') }} </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts">
import ToggleTheme from '@/components/Buttons/ToggleTheme/ToggleTheme.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToLogin() {
  router.push('/login')
}
</script>
