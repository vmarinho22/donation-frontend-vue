<template>
  <div class="editable-input">
    <p v-if="componentState === ComponentStateEnum.TEXT">{{ showValue }}</p>
    <div v-else>
      <slot></slot>
    </div>
    <v-btn
      variant="text"
      :icon="componentState === ComponentStateEnum.TEXT ? 'mdi-pencil-outline' : 'mdi-close'"
      size="small"
      @click="toggleState"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

enum ComponentStateEnum {
  TEXT = 'text',
  EDITABLE = 'editable'
}

type ComponentState = ComponentStateEnum.TEXT | ComponentStateEnum.EDITABLE

const { showValue, defaultState = ComponentStateEnum.TEXT } = defineProps<{
  showValue: string | number
  defaultState?: ComponentState
}>()

const componentState = ref<string>(defaultState)

function toggleState() {
  componentState.value =
    componentState.value === ComponentStateEnum.TEXT
      ? ComponentStateEnum.EDITABLE
      : ComponentStateEnum.TEXT
}
</script>

<style scoped lang="scss" src="./EditableInput.scss" />
