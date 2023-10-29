import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ProfileInfo from './ProfileInfo.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('ProfileInfo', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ProfileInfo, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
