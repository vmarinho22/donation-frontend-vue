import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import AddressInfo from './AddressInfo.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('AddressInfo', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(AddressInfo, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
