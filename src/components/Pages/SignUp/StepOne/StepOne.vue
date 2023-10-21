<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-form @submit.prevent lazy-validation>
          <v-text-field
            v-model="user.email"
            variant="solo-filled"
            type="email"
            clearable
            placeholder="email@email.com"
            :label="$t('inputs.email.label')"
            :rules="[
              (v) => !!v || $t('inputs.email.rules.required'),
              (v) => z.string().email().safeParse(v).success || $t('inputs.email.rules.invalid')
            ]"
            required
          />
          <password-input
            v-model="user.password"
            :labels="{
              label: $t('inputs.password.label'),
              hint: $t('inputs.password.hint'),
              rules: {
                required: $t('inputs.password.rules.required'),
                min: $t('inputs.password.rules.min')
              }
            }"
            required
          />
          <password-input
            v-model="user.confirmPassword"
            :labels="{
              label: $t('inputs.confirmPassword.label'),
              hint: $t('inputs.confirmPassword.hint'),
              rules: {
                required: $t('inputs.password.rules.required'),
                min: $t('inputs.password.rules.min')
              }
            }"
            required
          />
          <v-text-field
            v-model="user.cpf"
            variant="solo-filled"
            type="text"
            clearable
            placeholder="000.000.000-00"
            :label="$t('inputs.cpf.label')"
            :hint="$t('inputs.cpf.hint')"
            :rules="[
              (v) => {
                const parsedValue = z
                  .string({
                    required_error: $t('inputs.cpf.rules.required'),
                    invalid_type_error: $t('inputs.cpf.rules.invalid')
                  })
                  .min(11, {
                    message: $t('inputs.cpf.rules.min')
                  })
                  .max(14, {
                    message: $t('inputs.cpf.rules.max')
                  })
                  .safeParse(v)

                if (!parsedValue.success) {
                  return parsedValue.error.errors.map((item) => item.message).join('|')
                }

                return parsedValue.success
              }
            ]"
            required
            v-maska:[cpfMaskOptions]
          />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import PasswordInput from '@/components/Inputs/PasswordInput/PasswordInput.vue'
import { z } from 'zod'
import { useSignUp } from '@/stores/signup'
import { vMaska } from 'maska'

const { user } = useSignUp()

const cpfMaskOptions = { mask: '###.###.###-##' }
</script>
