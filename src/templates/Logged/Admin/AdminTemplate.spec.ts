import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AdminTemplate from './AdminTemplate.vue'
import vuetify from '@/tests/plugins/vuetify'
import { useAccount } from '@/stores/account'

import { createTestingPinia } from '@pinia/testing'
import mockedUser from '@/tests/mocks/user'

describe('AdminTemplate Component', () => {
 

  it('renders the component', () => {
    const wrapper = mount(AdminTemplate, {
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