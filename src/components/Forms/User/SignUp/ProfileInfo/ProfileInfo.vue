<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-form @submit.prevent lazy-validation>
          <v-text-field
            v-model="profile.firstName"
            variant="solo-filled"
            type="text"
            clearable
            :placeholder="$t('inputs.firstName.label')"
            :label="$t('inputs.firstName.label')"
            :rules="[(v) => inputValidations.text(v, {
                required: $t('inputs.firstName.rules.required'),
                invalid: $t('inputs.firstName.rules.invalid')
              })
            ]"
            required
          />
          <v-text-field
            v-model="profile.lastName"
            variant="solo-filled"
            type="text"
            clearable
            :placeholder="$t('inputs.lastName.label')"
            :label="$t('inputs.lastName.label')"
            :rules="[(v) => inputValidations.text(v, {
                required: $t('inputs.lastName.rules.required'),
                invalid: $t('inputs.lastName.rules.invalid')
              })
            ]"
            required
          />
          <v-text-field
            v-model="profile.socialName"
            variant="solo-filled"
            type="text"
            clearable
            :placeholder="$t('inputs.socialName.label')"
            :label="$t('inputs.socialName.label')"
          />
          <v-text-field
            v-model="profile.phone"
            variant="solo-filled"
            type="tel"
            clearable
            placeholder="(00) 00000-0000"
            :label="$t('inputs.phone.label')"
            :rules="[(v) => inputValidations.text(v, {
                required: $t('inputs.phone.rules.required'),
                invalid: $t('inputs.phone.rules.invalid'),
                min: $t('inputs.phone.rules.min'),
                max: $t('inputs.phone.rules.max')
              })
            ]"
            required
            v-maska:[phoneMaskOptions]
          />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useSignUp } from '@/stores/signup'
import { inputValidations } from '@/utils/validations'
import { vMaska } from 'maska'

const { profile } = useSignUp()

const phoneMaskOptions = { mask: '(##) #####-####' }
</script>