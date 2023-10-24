<template>
  <v-container fluid>
    <v-form @submit.prevent lazy-validation>
      <v-row>
        <v-col cols="6">
          <v-switch
            v-model="medicalRecord.hasChronicDiseases"
            :label="$t('inputs.hasChronicDiseases.label')"
            color="red-darken-3"
          />
          <v-text-field
            v-if="medicalRecord.hasChronicDiseases"
            v-model="medicalRecord.chronicDiseases"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.chronicDiseases.label')"
            :placeholder="$t('inputs.chronicDiseases.placeholder')"
          />
          <v-switch
            v-model="medicalRecord.hasPreviousSurgeries"
            :label="$t('inputs.hasPreviousSurgeries.label')"
            color="red-darken-3"
          />
          <v-text-field
            v-if="medicalRecord.hasPreviousSurgeries"
            v-model="medicalRecord.previousSurgeries"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.previousSurgeries.label')"
            :placeholder="$t('inputs.previousSurgeries.placeholder')"
          />
        </v-col>
        <v-spacer />
        <v-col cols="6">
          <v-switch
            v-model="medicalRecord.hasBloodBorneDiseases"
            :label="$t('inputs.hasBloodBorneDiseases.label')"
            color="red-darken-3"
          />
          <v-switch
            v-model="medicalRecord.hasCommunicableDiseases"
            :label="$t('inputs.hasCommunicableDiseases.label')"
            color="red-darken-3"
          />
          <v-text-field
            v-if="medicalRecord.hasCommunicableDiseases"
            v-model="medicalRecord.communicableDiseases"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.communicableDiseases.label')"
            :placeholder="$t('inputs.communicableDiseases.placeholder')"
          />
        </v-col>
        <v-col cols="6">
          <v-switch
            v-model="medicalRecord.hasIst"
            :label="$t('inputs.hasIst.label')"
            color="red-darken-3"
          />
          <v-text-field
            v-if="medicalRecord.hasIst"
            v-model="medicalRecord.ist"
            variant="solo-filled"
            type="text"
            clearable
            :label="$t('inputs.ist.label')"
            :placeholder="$t('inputs.ist.placeholder')"
          />
          <v-switch
            v-model="medicalRecord.useIllicitDrugs"
            :label="$t('inputs.useIllicitDrugs.label')"
            color="red-darken-3"
          />
          <v-switch
            v-model="medicalRecord.useInjectingDrugs"
            :label="$t('inputs.useInjectingDrugs.label')"
            color="red-darken-3"
          />
        </v-col>
        <v-col cols="6">
          <v-switch
            v-model="medicalRecord.hasPracticeUnprotectedSex"
            :label="$t('inputs.hasPracticeUnprotectedSex.label')"
            color="red-darken-3"
          />
          <div v-if="registerState.sex === 'woman'">
            <v-switch
              v-model="medicalRecord.hadPregnancy"
              :label="$t('inputs.hadPregnancy.label')"
              color="red-darken-3"
            />
            <v-switch
              v-model="medicalRecord.recentlyBreastfed"
              :label="$t('inputs.recentlyBreastfed.label')"
              color="red-darken-3"
            />
            <v-text-field
              v-if="medicalRecord.recentlyBreastfed"
              v-model="medicalRecord.lastBreastfeeding"
              variant="solo-filled"
              type="text"
              clearable
              :label="$t('inputs.lastBreastfeeding.label')"
              :placeholder="$t('inputs.lastBreastfeeding.placeholder')"
            />
          </div>
        </v-col>
        <v-col cols="12">
          <v-textarea 
            v-model="medicalRecord.notes" 
            clearable 
            :label="$t('inputs.notes.label')"
            :placeholder="$t('inputs.notes.placeholder')"
            auto-grow
            rows="3"
          />s
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { usePatient } from '@/stores/patient'

const { registerState, medicalRecord } = usePatient()
</script>
