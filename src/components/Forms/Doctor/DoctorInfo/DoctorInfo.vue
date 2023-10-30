<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-form @submit.prevent lazy-validation>
          <v-text-field
            v-model="doctorRef.registrationNumber"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.registrationNumber.label')"
            :placeholder="$t('inputs.registrationNumber.placeholder')"
            :hint="$t('inputs.registrationNumber.hint')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.registrationNumber.rules.required'),
                  invalid: $t('inputs.registrationNumber.rules.invalid')
                })
            ]"
            required
          />
          <v-text-field
            v-model="doctorRef.specialty"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.specialty.label')"
            :placeholder="$t('inputs.specialty.placeholder')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.specialty.rules.required'),
                  invalid: $t('inputs.specialty.rules.invalid')
                })
            ]"
            required
          />
          <v-text-field
            v-model="doctorRef.emergencyTelContact"
            variant="solo-filled"
            type="tel"
            clearable
            placeholder="(00) 00000-0000"
            :label="$t('inputs.emergencyTelContact.label')"
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
import { inputValidations } from '@/utils/validations'
import type { Ref } from 'vue'
import { toRef } from 'vue'
import { vMaska } from 'maska'

const props = defineProps<{
  doctor: Ref<{
    specialty: string
    registrationNumber: string
    emergencyTelContact: string
  }>
}>()

const doctorRef = toRef(props, 'doctor')
const phoneMaskOptions = { mask: '(##) #####-####' }
</script>
