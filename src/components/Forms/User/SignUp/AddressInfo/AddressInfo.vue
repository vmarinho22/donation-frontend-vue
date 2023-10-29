<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-form @submit.prevent lazy-validation>
          <v-text-field
            v-model="address.postalCode"
            variant="solo-filled"
            type="text"
            clearable
            :hint="$t('inputs.postalCode.hint')"
            :label="$t('inputs.postalCode.label')"
            :rules="[
              (v) =>
                inputValidations.textWithMinAndMax(v, 9, 9, {
                  required: $t('inputs.postalCode.rules.required'),
                  invalid: $t('inputs.postalCode.rules.invalid'),
                  min: $t('inputs.postalCode.rules.min'),
                  max: $t('inputs.postalCode.rules.max')
                })
            ]"
            required
            v-maska:[postalCodeMaskOptions]
          />
          <br />
          <v-text-field
            v-model="address.street"
            variant="solo-filled"
            type="text"
            clearable
            :placeholder="$t('inputs.street.label')"
            :label="$t('inputs.street.label')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.street.rules.required'),
                  invalid: $t('inputs.street.rules.invalid')
                })
            ]"
            required
            :loading="loadingPostalCode"
          />
          <v-switch
            v-model="address.hasNumber"
            :label="$t('inputs.hasNumber.label')"
            color="red-darken-3"
          />
          <v-text-field
            v-if="address.hasNumber"
            v-model="address.number"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.number.label')"
            :placeholder="$t('inputs.number.placeholder')"
          />
          <v-text-field
            v-model="address.complement"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.complement.label')"
            :placeholder="$t('inputs.complement.placeholder')"
          />
          <v-text-field
            v-model="address.district"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.district.label')"
            :placeholder="$t('inputs.district.placeholder')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.district.rules.required'),
                  invalid: $t('inputs.district.rules.invalid')
                })
            ]"
            required
            :loading="loadingPostalCode"
          />
          <v-text-field
            v-model="address.city"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.city.label')"
            :placeholder="$t('inputs.city.placeholder')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.city.rules.required'),
                  invalid: $t('inputs.city.rules.invalid')
                })
            ]"
            required
            :loading="loadingPostalCode"
          />
          <v-text-field
            v-model="address.state"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.state.label')"
            :placeholder="$t('inputs.state.placeholder')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.state.rules.required'),
                  invalid: $t('inputs.state.rules.invalid')
                })
            ]"
            required
            :loading="loadingPostalCode"
          />
          <v-text-field
            v-model="address.state"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.state.label')"
            :placeholder="$t('inputs.state.placeholder')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.state.rules.required'),
                  invalid: $t('inputs.state.rules.invalid')
                })
            ]"
            required
            :loading="loadingPostalCode"
          />
          <v-text-field
            v-model="address.uf"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.uf.label')"
            :placeholder="$t('inputs.uf.placeholder')"
            :rules="[
              (v) =>
                inputValidations.text(v, {
                  required: $t('inputs.uf.rules.required'),
                  invalid: $t('inputs.uf.rules.invalid')
                })
            ]"
            required
            :loading="loadingPostalCode"
            v-maska:[ufMaskOptions]
          />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useSignUp } from '@/stores/signup'
import { inputValidations } from '@/utils/validations'
import { vMaska } from 'maska'
import axios from 'axios'
import env from '@/utils/env'

import type { IBGEAddressApiReturnResult } from '@/types/address'

type IBGEAddressApiReturn = {
  meta: unknown
  result: IBGEAddressApiReturnResult
}

const { address, updateAddress } = useSignUp()

const postalCodeMaskOptions = { mask: '#####-###' }
const ufMaskOptions = { mask: '@@' }

const loadingPostalCode = ref(false)

watch(address, async (newValue) => {
  if (
    newValue.postalCode.length === 9 &&
    !loadingPostalCode.value
  ) {
    loadingPostalCode.value = true
    const parsedPostalCode = Number(newValue.postalCode.replace('-', ''))

    const response = await axios
      .get<IBGEAddressApiReturn>(`https://brasilaberto.com/api/v1/zipcode/${parsedPostalCode}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.cep.key}`
        }
      })
      .then((response) => response.data?.result)

    updateAddress('street', response?.street)
    updateAddress('district', response?.district)
    updateAddress('city', response?.city)
    updateAddress('state', response?.state)
    updateAddress('uf', response?.stateShortname)
    updateAddress('country', 'Brasil')

    loadingPostalCode.value = false
  }
})
</script>
