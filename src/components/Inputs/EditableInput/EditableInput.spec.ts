import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EditableInput from './EditableInput.vue'
import vuetify from '@/tests/plugins/vuetify'

describe('EditableInput', () => {
  it('renders the component', () => {
    const wrapper = mount(EditableInput, {
      global: {
        plugins: [vuetify]
      },
      props: {
        showValue: 'test',
      },
      slots: {
        default: '<input type="text" />'
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should click on editable button', async () => {
    const wrapper = mount(EditableInput, {
      global: {
        plugins: [vuetify]
      },
      props: {
        showValue: 'test',
      },
      slots: {
        default: '<input type="text" />'
      }
    })

    const button = wrapper.find('.mdi-pencil-outline')

    await button.trigger('click')

    const input = wrapper.find('input')

    expect(wrapper.html()).toMatchSnapshot()
    expect(input.attributes('type')).toBe('text')
  })
})