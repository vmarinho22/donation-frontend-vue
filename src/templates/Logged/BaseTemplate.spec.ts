import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseTemplate from './BaseTemplate.vue'
import vuetify from '@/tests/plugins/vuetify'
import { useAccount } from '@/stores/account'

import { createTestingPinia } from '@pinia/testing'
import mockedUser from '@/tests/mocks/user'

describe('BaseTemplate', () => {
 

  it('renders the component', () => {
    const wrapper = mount(BaseTemplate, {
      global: {
        plugins: [vuetify, createTestingPinia()]
      },
      props: {
        menu: [
          {
            id: '1',
            localeKey: 'Home',
            icon: 'mdi-home',
          }
        ]
      }
    })

    const store = useAccount()

    store.account.user = mockedUser
    expect(wrapper.html()).toMatchSnapshot();
  })
})