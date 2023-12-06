<template>
  <doctor-template>
    <router-view></router-view>
  </doctor-template>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useDoctor } from '@/stores/doctor'
import { useUser } from '@/stores/user'
import DoctorTemplate from '@/templates/Logged/Doctor/DoctorTemplate.vue'

const { user } = useUser()
const { doctor, fetchAndUpdateDoctor } = useDoctor()

onBeforeMount(async () => {
  if (doctor.id === '') {
    await fetchAndUpdateDoctor(user.id)
  }
})
</script>
