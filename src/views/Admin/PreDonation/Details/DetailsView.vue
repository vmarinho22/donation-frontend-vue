<template>
  <h2>
    {{ $t('pages.admin.preDonation.details.title') }}
  </h2>
  <p>{{ $t('pages.admin.preDonation.details.subtitle') }}</p>
  <br />
  <div v-if="loading">
    <v-progress-circular indeterminate />
  </div>
  <div v-else>
    <v-card
      :title="
        patientProfile?.socialName
          ? patientProfile.socialName
          : `${patientProfile?.firstName} ${patientProfile?.lastName}`
      "
      :subtitle="`${$t('pages.admin.preDonation.patient')} ID: ${patientProfile?.id}`"
      :prepend-avatar="patientProfile?.photoUrl"
    />
    <br />
    <v-row>
      <v-col cols="12">
        <v-btn
          :prepend-icon="editableMode ? 'mdi-content-save' : 'mdi-pencil-outline'"
          :color="Colors.bloodRed[500]"
          @click="changeEditableMode"
        >
          {{ $t(editableMode ? 'buttons.save' : 'buttons.edit') }}
        </v-btn>
      </v-col>
      <v-col cols="12">
        <small>Cód</small>
        <br />
        <v-chip label>
          {{ preDonationDetails?.id }}
        </v-chip>
      </v-col>
      <v-col>
        <small>{{ $t('pages.patient.home.donations.type.title') }}</small>
        <br />
        <v-chip label>
          {{ $t(`pages.patient.home.donations.type.${preDonationDetails?.type}`) }}
        </v-chip>
      </v-col>
      <v-col>
        <small>{{ $t('pages.patient.home.donations.status.title') }}</small>
        <br />
        <v-select
          v-if="editableMode"
          v-model="preDonationDetails.status"
          :label="$t('inputs.preDonation.status.label')"
          :items="statusOptions"
          item-title="label"
          item-value="status"
        />
        <v-chip v-else label>
          {{ $t(`pages.patient.home.donations.status.${preDonationDetails?.status}`) }}
        </v-chip>
      </v-col>
      <v-col>
        <small>{{ $t('pages.patient.home.donations.table.approval.title') }}</small>
        <br />
        <v-switch
          v-if="editableMode"
          v-model="preDonationDetails.approved"
          :label="$t(`pages.patient.home.donations.table.approval.${preDonationDetails?.approved}`)"
          :color="Colors.bloodRed[500]"
        />
        <v-chip v-else label>
          {{
            preDonationDetails?.status === PreDonationStatus.FINISHED
              ? $t(`pages.patient.home.donations.table.approval.${preDonationDetails?.approved}`)
              : $t(`pages.patient.home.donations.table.approval.review`)
          }}
        </v-chip>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.isEligibility') }}</small>
        <p>
          {{
            preDonationDetails?.status === PreDonationStatus.FINISHED
              ? $t(`pages.patient.preDonation.details.${preDonationDetails?.isEligibility}`)
              : $t(`pages.patient.preDonation.details.underAnalysis`)
          }}
        </p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.performedNecessaryTests') }}</small>
        <v-switch
          v-if="editableMode"
          v-model="preDonationDetails.performedNecessaryTests"
          :label="
            $t(`pages.patient.preDonation.details.${preDonationDetails?.performedNecessaryTests}`)
          "
          :color="Colors.bloodRed[500]"
        />
        <p v-else>
          {{
            $t(`pages.patient.preDonation.details.${preDonationDetails?.performedNecessaryTests}`)
          }}
        </p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.testNotes') }}</small>
        <v-textarea
          v-if="editableMode"
          v-model="preDonationDetails.testNotes"
          auto-grow
          rows="3"
          shaped
          counter="250"
          maxlength="250"
          variant="solo-filled"
        />
        <p v-else>{{ preDonationDetails?.testNotes ?? '*' }}</p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.fullTestLink') }}</small>
        <br />
        <v-text-field
          v-if="editableMode"
          v-model="preDonationDetails.fullTestLink"
          variant="solo-filled"
          type="url"
          clearable
        />
        <a v-else :href="preDonationDetails?.fullTestLink ?? '#'" target="_blank">{{
          $t('pages.patient.preDonation.details.fullTestLinkLabel')
        }}</a>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.doctor') }}</small>
        <div v-if="editableMode">
          <v-select
            v-model="preDonationDetails.doctorId"
            :items="doctors"
            item-title="name"
            item-value="doctorId"
            :label="$t('inputs.responsibleDoctor')"
          />
        </div>
        <div v-else>
          <p v-if="preDonationDetails?.doctorName">
            {{ preDonationDetails?.doctorName }} {{ preDonationDetails?.doctorRegistrationNumber }}
          </p>
          <p v-else>{{ $t('pages.patient.preDonation.details.hasNoDoctor') }}</p>
        </div>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.createdAt') }}</small>
        <p>{{ new Date(preDonationDetails?.createdAt ?? Date.now()).toLocaleString() }}</p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.updatedAt') }}</small>
        <p>{{ new Date(preDonationDetails?.updatedAt ?? Date.now()).toLocaleString() }}</p>
      </v-col>
      <v-col v-if="editableMode" cols="12">
        <v-btn prepend-icon="mdi-content-save" :color="Colors.bloodRed[500]" @click="saveChanges">
          {{ $t('buttons.save') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { PreDonationStatus, type PreDonation } from '@/types/donations'
import api from '@/utils/api'
import { useI18n } from 'vue-i18n'
import { Colors } from '@/constants/colors'
import type { Doctor } from '@/types/doctors'
import type { Patient } from '@/types/patient'
import type { Profile } from '@/types/profiles'
import { useToast } from 'vue-toast-notification'

const route = useRoute()
const { t } = useI18n()

const preDonationDetails = ref<PreDonation>({
  id: '',
  type: 'blood',
  status: 'starting',
  approved: false,
  isEligibility: false,
  performedNecessaryTests: false,
  testNotes: '',
  fullTestLink: '',
  doctorName: '',
  doctorRegistrationNumber: '',
  createdAt: '',
  updatedAt: '',
  doctorId: '',
  patientId: ''
})
const patientProfile = ref<Profile>()
const loading = ref<boolean>(true)
const editableMode = ref<boolean>(false)
const doctors = ref<
  {
    doctorId: string
    name: string
  }[]
>([])
const toast = useToast()

const statusOptions = [
  {
    label: t('inputs.preDonation.status.items.starting'),
    status: PreDonationStatus.STARTING
  },
  {
    label: t('inputs.preDonation.status.items.inProgress'),
    status: PreDonationStatus.IN_PROGRESS
  },
  {
    label: t('inputs.preDonation.status.items.finished'),
    status: PreDonationStatus.FINISHED
  }
]

onBeforeMount(async () => {
  try {
    const id = route.params.id

    preDonationDetails.value = await api
      .get<PreDonation>(`/donation-pre-ratings/${id}`)
      .then((res) => res.data)

    const [doctorsResponse, patientResponse] = await Promise.all([
      api.get<Doctor[]>('/doctors').then((res) => res.data),
      api.get<Patient>(`/patients/${preDonationDetails.value.patientId}`).then((res) => res.data)
    ])

    patientProfile.value = await api
      .get<Profile>(`/profiles/full/${patientResponse.userId}`)
      .then((res) => res.data)

    doctors.value = doctorsResponse.map((doctor) => ({
      doctorId: doctor.id,
      name: `${
        doctor.socialName ? doctor.socialName : `${doctor.firstName} ${doctor.lastName}`
      } - ${doctor.registrationNumber}`
    }))
    loading.value = false
  } catch (error) {
    console.error(error)
    toast.error(t('genericMessages.errors.loadingContent'))
  }
})

function changeEditableMode() {
  editableMode.value = !editableMode.value
}

async function saveChanges() {
  try {
    await api.put(`/donation-pre-ratings/${preDonationDetails.value.id}`, {
      status: preDonationDetails.value.status,
      approved: preDonationDetails.value.approved,
      isEligibility: preDonationDetails.value.isEligibility,
      performedNecessaryTests: preDonationDetails.value.performedNecessaryTests,
      testNotes: preDonationDetails.value.testNotes,
      fullTestLink: preDonationDetails.value.fullTestLink,
      doctorName: preDonationDetails.value.doctorName,
      doctorRegistrationNumber: preDonationDetails.value.doctorRegistrationNumber,
      doctorId: preDonationDetails.value.doctorId
    })
    changeEditableMode()
    toast.success(t('pages.patient.preDonation.details.success'))
  } catch (error) {
    console.error(error)
    toast.error(t('genericMessages.errors.generic'))
  }
}

watch(
  () => preDonationDetails.value.doctorId,
  () => {
    const doctor = doctors.value.find(
      (doctor) => doctor.doctorId === preDonationDetails.value.doctorId
    )
    if (doctor) {
      preDonationDetails.value.doctorName = doctor.name
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
