import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import StepTwo from './StepTwo.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('StepTwo', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(StepTwo, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
