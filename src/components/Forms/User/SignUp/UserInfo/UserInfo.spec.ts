import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import UserInfo from './UserInfo.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

describe('UserInfo', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(UserInfo, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
