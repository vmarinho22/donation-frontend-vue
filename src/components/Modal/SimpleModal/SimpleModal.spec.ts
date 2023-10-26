import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SimpleModal from './SimpleModal.vue'
import vuetify from '@/tests/plugins/vuetify'

describe('SimpleModal', () => {
  it('renders the component', () => {
    const wrapper = mount(SimpleModal, {
      global: {
        plugins: [vuetify]
      },
      props: {
        title: 'Test Title',
        content: '<p>Test Content<p>',
        open: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  })
})