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
    <v-row>
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
        
          <editable-input :show-value="$t(`pages.patient.home.donations.status.${preDonationDetails?.status}`)">
              <v-select
                v-model="preDonationDetails.status"
                :label="$t('inputs.preDonation.status.label')"
                :items="statusOptions"
                item-title="label"
                item-value="status"
              />
          </editable-input>
        
      </v-col>
      <v-col>
        <small>{{ $t('pages.patient.home.donations.table.approval.title') }}</small>
        <br />
        <v-chip label>
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
        <p>
          {{
            $t(`pages.patient.preDonation.details.${preDonationDetails?.performedNecessaryTests}`)
          }}
        </p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.testNotes') }}</small>
        <p>{{ preDonationDetails?.testNotes ?? '*' }}</p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.fullTestLink') }}</small>
        <br />
        <a :href="preDonationDetails?.fullTestLink" target="_blank">{{
          $t('pages.patient.preDonation.details.fullTestLinkLabel')
        }}</a>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.doctor') }}</small>
        <p v-if="preDonationDetails?.doctorName">
          {{ preDonationDetails?.doctorName }} {{ preDonationDetails?.doctorRegistrationNumber }}
        </p>
        <p v-else>{{ $t('pages.patient.preDonation.details.hasNoDoctor') }}</p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.createdAt') }}</small>
        <p>{{ new Date(preDonationDetails?.createdAt ?? Date.now()).toLocaleString() }}</p>
      </v-col>
      <v-col cols="12">
        <small>{{ $t('pages.patient.preDonation.details.updatedAt') }}</small>
        <p>{{ new Date(preDonationDetails?.updatedAt ?? Date.now()).toLocaleString() }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { PreDonationStatus, type PreDonation } from '@/types/donations'
import api from '@/utils/api'
import { useI18n } from 'vue-i18n';
import EditableInput from '@/components/Inputs/EditableInput/EditableInput.vue';
import shallowequal from 'shallowequal'

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
  doctorId: undefined,
  patientId: ''
})
const loading = ref<boolean>(true)

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
  },
]

onBeforeMount(async () => {
  const id = route.params.id

  preDonationDetails.value = await api
    .get<PreDonation>(`/donation-pre-ratings/${id}`)
    .then((res) => res.data)
  loading.value = false
})

watch(preDonationDetails, async (newValue, oldValue) => {
  console.log('watch', newValue, oldValue)
  if (shallowequal(newValue, oldValue)) {
    console.log('equal')
  } else {
    console.log('not equal')
  }
})
</script>
