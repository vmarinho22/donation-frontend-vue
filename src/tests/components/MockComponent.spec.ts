import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MockComponent from './MockComponent.vue'

describe('ToggleTheme', () => {
  it('renders the component', () => {
    const wrapper = mount(MockComponent)
    expect(wrapper.html()).toMatchSnapshot();
  })
})