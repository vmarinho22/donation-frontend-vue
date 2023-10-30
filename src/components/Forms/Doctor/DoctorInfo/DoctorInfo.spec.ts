import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import DoctorInfo from './DoctorInfo.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('DoctorInfo', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(DoctorInfo, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
