<template>
  <v-container fluid class="linear-stepper">
    <v-row class="stepper-dots" align="center" justify="space-between" style="margin-bottom: 8px">
      <div class="container" v-for="(step, index) in steps" :key="step.title">
        <p class="item" :class="currentStep === index && 'selected'" @click="setStep(index)">
          {{ index + 1 }}
        </p>
        <p>{{ step.title }}</p>
      </div>
    </v-row>
    <v-row align="center" justify="center" no-gutters>
      <component :is="component" v-bind="steps[currentStep].props" />
    </v-row>
    <v-row align="center" justify="end" no-gutters>
      <v-btn variant="text" :disabled="currentStep === 0" @click="back">
        {{ $t('buttons.back') }}
      </v-btn>
      <v-btn :color="Colors.bloodRed[500]" @click="advance">
        {{ currentStep === steps.length - 1 ? $t('buttons.finish') : $t('buttons.advance') }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Component } from 'vue'
import { Colors } from '@/constants/colors'

type LinearStepperProps = {
  title: string
  component: Component,
  props?: Record<string, unknown>
}

const { steps, onFinish } = defineProps<{
  steps: LinearStepperProps[];
  onFinish: () => void;
}>()

const currentStep = ref(0)

const component = computed<Component>(() => steps[currentStep.value].component)

function setStep(index: number) {
  currentStep.value = index
}

function advance() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value += 1
  } else if (currentStep.value === steps.length - 1) {
    onFinish();
  }
}

function back() {
  if (currentStep.value > 0) {
    currentStep.value -= 1
  }
}
</script>

<style lang="scss" src="./LinearStepper.scss" scoped />
