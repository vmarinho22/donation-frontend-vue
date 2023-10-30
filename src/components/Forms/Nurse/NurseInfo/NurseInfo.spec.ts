import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import NurseInfo from './NurseInfo.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('NurseInfo', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(NurseInfo, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
