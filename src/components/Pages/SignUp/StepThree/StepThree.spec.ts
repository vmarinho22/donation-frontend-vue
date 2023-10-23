import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import StepThree from './StepThree.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('StepThree', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(StepThree, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
