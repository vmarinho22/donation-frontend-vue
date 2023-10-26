import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import RegisterSteps from './RegisterSteps.vue'
import vuetify from '@/tests/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'

vi.mock('vue-i18n', () => ({
  useI18n: vi.fn().mockReturnValue({
    t: vi.fn().mockReturnValue('translation')
  })
}))

describe('RegisterSteps', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(RegisterSteps, {
      global: {
        plugins: [vuetify, createTestingPinia({
          createSpy: vi.fn()
        })]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
