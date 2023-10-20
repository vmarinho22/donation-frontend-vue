<template>
  <v-text-field
    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[
      (v) => {
        const parsedValue = z
          .string({
            required_error: $t('inputs.password.rules.required')
          })
          .min(8, {
            message: $t('inputs.password.rules.min'),
          })
          .safeParse(v)

        if (!parsedValue.success) {
          console.log(parsedValue.error.errors)
          return parsedValue.error.errors.map((item) => item.message).join('|')
        }

        return parsedValue.success
      }
    ]"
    :type="showPassword ? 'text' : 'password'"
    :label="$t('inputs.password.label')"
    :hint="$t('inputs.password.hint')"
    counter
    @click:append-inner="showPassword = !showPassword"
  />
</template>

<script setup lang="ts">
import  { ref } from 'vue'
import { z } from 'zod'

const showPassword = ref(false)
</script>