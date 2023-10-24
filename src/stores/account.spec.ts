import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useAccount } from './account';

describe('Account Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a default state', () => {
    const { account } = useAccount()

    expect(account).not.toBeNull()
  });

  it('should update user account', async () => {
    const { account, signOff } = useAccount()

    signOff();

    expect(account.user.email).toBe('')
  })

})