import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LoggedOutHeader from './LoggedOutHeader.vue'
import vuetify from '@/tests/plugins/vuetify'

describe('ToggleTheme', () => {
  it('renders the component', () => {
    const wrapper = mount(LoggedOutHeader, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  })
})