<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ModalsContainer } from 'vue-final-modal'
import { useTheme } from 'vuetify'
import { onBeforeMount } from 'vue';

const theme = useTheme()

onBeforeMount(() => {
  theme.global.name.value = localStorage.getItem('theme') || 'light'
})

</script>

<template>
  <RouterView />
  <ModalsContainer />
</template>
