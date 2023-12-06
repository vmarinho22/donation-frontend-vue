import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LinearStepper from './LinearStepper.vue'
import vuetify from '@/tests/plugins/vuetify'
import MockComponentVue from '@/tests/components/MockComponent.vue'

const steps = [
  {
    title: 'Step 1',
    component: MockComponentVue,
    props: {
      showPasswordInput: true
    }
  },
  {
    title: 'Step 2',
    component: MockComponentVue
  },
  {
    title: 'Step 2',
    component: MockComponentVue
  }
]

describe('LinearStepper', () => {
  it('renders the component', () => {
    const wrapper = mount(LinearStepper, {
      global: {
        plugins: [vuetify]
      },
      props: {
        steps,
        onFinish: async () => {}
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  })
})