<template>
  <VueFinalModal class="simple-modal">
    <v-card
      class="simple-modal-content-container mx-auto"
    >
      <v-card-title>
        {{ title }}
      </v-card-title>
      
      <v-card-subtitle v-if="subtitle" style="white-space: inherit;">
        <p>{{ subtitle }}</p>
      </v-card-subtitle>


      <v-card-text class="simple-modal-content">
        <slot />
      </v-card-text>

      <v-card-actions v-if="hasButton">
        <v-spacer />
        <v-btn
          @click="emit('confirm')"
        >
          {{ buttonLabel }}
        </v-btn>
        </v-card-actions>

    </v-card>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title: string
  subtitle?: string,
  hasButton?: boolean,
  buttonLabel?: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<style lang="scss" src="./SimpleModal.scss" />
