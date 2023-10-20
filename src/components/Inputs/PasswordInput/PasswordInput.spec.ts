import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PasswordInput from './PasswordInput.vue'
import vuetify from '@/tests/plugins/vuetify'

describe('PasswordInput', () => {
  it('renders the component', () => {
    const wrapper = mount(PasswordInput, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('show password', async () => {
    const wrapper = mount(PasswordInput, {
      global: {
        plugins: [vuetify]
      }
    })

    const button = wrapper.find('.mdi-eye-off')

    await button.trigger('click')

    const input = wrapper.find('input')

    expect(wrapper.html()).toMatchSnapshot();
    expect(input.attributes('type')).toBe('text');
  });
})