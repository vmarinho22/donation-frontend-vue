<template>
  <v-container fluid>
    <v-form @submit.prevent lazy-validation>
      <v-row no-gutters>
        <v-col>
          <div style="display: flex; justify-content: center; align-items: center;" v-if="loadingBloods">
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
          <div v-else>
            <v-text-field
              v-model="registerState.birthDate"
              variant="solo-filled"
              type="date"
              clearable
              :label="$t('inputs.birthDate.label')"
              required
            />
            <v-select
              v-model="registerState.sex"
              :label="$t('inputs.sex.label')"
              :items="sexOptions"
              item-title="state"
              item-value="value"
              clearable
              required
            />
            <v-text-field
              v-model="registerState.gender"
              variant="solo-filled"
              type="text"
              clearable
              :label="$t('inputs.gender.label')"
            />
            <v-text-field
              v-model="registerState.weight"
              variant="solo-filled"
              type="number"
              clearable
              :label="$t('inputs.weight.label')"
              :placeholder="$t('inputs.weight.placeholder')"
              :rules="[
                (v) =>
                  inputValidations.text(v, {
                    required: $t('inputs.weight.rules.required'),
                    invalid: $t('inputs.weight.rules.invalid')
                  })
              ]"
              required
            />
            <v-text-field
              v-model="registerState.height"
              variant="solo-filled"
              type="number"
              clearable
              :label="$t('inputs.height.label')"
              :placeholder="$t('inputs.height.placeholder')"
              :hint="$t('inputs.height.hint')"
              :rules="[
                (v) =>
                  inputValidations.text(v, {
                    required: $t('inputs.height.rules.required'),
                    invalid: $t('inputs.height.rules.invalid')
                  })
              ]"
              required
            />
            <v-select
              v-model="registerState.bloodId"
              :label="$t('inputs.blood.label')"
              :items="(bloods as Blood[])"
              item-title="type"
              item-value="id"
              clearable
              required
            />
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { inputValidations } from '@/utils/validations'
import { usePatient } from '@/stores/patient'
import { useI18n } from 'vue-i18n'
import api from '@/utils/api';
import type { Blood } from '@/types/blood';
import { useToast } from 'vue-toast-notification'

const { registerState } = usePatient()
const { t } = useI18n()
const toast = useToast()


const sexOptions = [
  { state: t('inputs.sex.items[0]'), value: 'man' },
  { state: t('inputs.sex.items[1]'), value: 'woman' },
  { state: t('inputs.sex.items[2]'), value: 'other' }
]

const loadingBloods = ref(true)
const bloods = ref<Blood[] | null>(null)

onBeforeMount(async () => {
  try {
    bloods.value = (await api.get<Blood[]>('/bloods')).data
    loadingBloods.value = false
  } catch (error) {
    console.error(error)
    toast.error(t('genericMessages.errors.generic'))
  }
})

</script>
