<template>
  <v-form @submit.prevent lazy-validation>
    <v-row>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.hasChronicDiseases"
          :label="$t('inputs.hasChronicDiseases.label')"
          color="red-darken-3"
        />
        <v-text-field
          v-if="registerMedicalRecord.hasChronicDiseases"
          v-model="registerMedicalRecord.chronicDiseases"
          variant="solo-filled"
          type="text"
          clearable
          :label="$t('inputs.chronicDiseases.label')"
          :placeholder="$t('inputs.chronicDiseases.placeholder')"
        />
      </v-col>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.hasPreviousSurgeries"
          :label="$t('inputs.hasPreviousSurgeries.label')"
          color="red-darken-3"
        />
        <v-text-field
          v-if="registerMedicalRecord.hasPreviousSurgeries"
          v-model="registerMedicalRecord.previousSurgeries"
          variant="solo-filled"
          type="text"
          clearable
          :label="$t('inputs.previousSurgeries.label')"
          :placeholder="$t('inputs.previousSurgeries.placeholder')"
        />
      </v-col>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.hasBloodBorneDiseases"
          :label="$t('inputs.hasBloodBorneDiseases.label')"
          color="red-darken-3"
        />
      </v-col>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.hasCommunicableDiseases"
          :label="$t('inputs.hasCommunicableDiseases.label')"
          color="red-darken-3"
        />
        <v-text-field
          v-if="registerMedicalRecord.hasCommunicableDiseases"
          v-model="registerMedicalRecord.communicableDiseases"
          variant="solo-filled"
          type="text"
          clearable
          :label="$t('inputs.communicableDiseases.label')"
          :placeholder="$t('inputs.communicableDiseases.placeholder')"
        />
      </v-col>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.hasIst"
          :label="$t('inputs.hasIst.label')"
          color="red-darken-3"
        />
        <v-text-field
          v-if="registerMedicalRecord.hasIst"
          v-model="registerMedicalRecord.ist"
          variant="solo-filled"
          type="text"
          clearable
          :label="$t('inputs.ist.label')"
          :placeholder="$t('inputs.ist.placeholder')"
        />
      </v-col>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.useIllicitDrugs"
          :label="$t('inputs.useIllicitDrugs.label')"
          color="red-darken-3"
        />
        <v-switch
          v-model="registerMedicalRecord.useInjectingDrugs"
          :label="$t('inputs.useInjectingDrugs.label')"
          color="red-darken-3"
        />
      </v-col>
      <v-col lg="3" cols="12">
        <v-switch
          v-model="registerMedicalRecord.hasPracticeUnprotectedSex"
          :label="$t('inputs.hasPracticeUnprotectedSex.label')"
          color="red-darken-3"
        />
      </v-col>
      <v-col md="3" cols="12" v-if="registerState.sex === 'woman'">
        <v-switch
          v-model="registerMedicalRecord.hadPregnancy"
          :label="$t('inputs.hadPregnancy.label')"
          color="red-darken-3"
        />
        <v-switch
          v-model="registerMedicalRecord.recentlyBreastfed"
          :label="$t('inputs.recentlyBreastfed.label')"
          color="red-darken-3"
        />
        <v-text-field
          v-if="registerMedicalRecord.recentlyBreastfed"
          v-model="registerMedicalRecord.lastBreastfeeding"
          variant="solo-filled"
          type="text"
          clearable
          :label="$t('inputs.lastBreastfeeding.label')"
          :placeholder="$t('inputs.lastBreastfeeding.placeholder')"
        />
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="registerMedicalRecord.notes"
          clearable
          :label="$t('inputs.notes.label')"
          :placeholder="$t('inputs.notes.placeholder')"
          auto-grow
          rows="3"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { usePatient } from '@/stores/patient'

const { registerState, registerMedicalRecord } = usePatient()
</script>
