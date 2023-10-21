import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PasswordInput from './PasswordInput.vue'
import vuetify from '@/tests/plugins/vuetify'

describe('PasswordInput', () => {
  const labelsProp = {
    label: 'Test',
    hint: 'Test',
    rules: {
      required: 'Test',
      min: 'Test'
    }
  }
  it('renders the component', () => {
    const wrapper = mount(PasswordInput, {
      global: {
        plugins: [vuetify]
      },
      props: {
        labels: labelsProp
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('show password', async () => {
    const wrapper = mount(PasswordInput, {
      global: {
        plugins: [vuetify]
      },
      props: {
        labels: labelsProp
      }
    })

    const button = wrapper.find('.mdi-eye-off')

    await button.trigger('click')

    const input = wrapper.find('input')

    expect(wrapper.html()).toMatchSnapshot()
    expect(input.attributes('type')).toBe('text')
  })
})
