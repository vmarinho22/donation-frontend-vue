import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import StepOne from './StepOne.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('StepOne', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(StepOne, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})