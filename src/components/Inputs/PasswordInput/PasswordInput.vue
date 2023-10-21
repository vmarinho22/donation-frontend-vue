<template>
  <v-text-field
    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[
      (v) => {
        const parsedValue = z
          .string({
            required_error: props.labels.rules.required,
          })
          .min(8, {
            message: props.labels.rules.min,
          })
          .safeParse(v)

        if (!parsedValue.success) {
          return parsedValue.error.errors.map((item) => item.message).join('|')
        }

        return parsedValue.success
      }
    ]"
    :type="showPassword ? 'text' : 'password'"
    :label="props.labels.label"
    :hint="props.labels.hint"
    counter
    @click:append-inner="showPassword = !showPassword"
    v-bind="attrs"
  />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import  { ref } from 'vue'
import { z } from 'zod'

const props = defineProps<{
  labels: {
    label: string
    hint: string
    rules: {
      required: string
      min: string
    }
  }
}>()

const attrs = useAttrs()

const showPassword = ref(false)
</script>