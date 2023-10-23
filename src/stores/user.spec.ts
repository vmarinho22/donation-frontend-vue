import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useUser } from './user'

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a default state', () => {
    const { user } = useUser()

    expect(user).not.toBeNull()
  });

  it('should update user', async () => {
    const { user, updateUser } = useUser()

    updateUser({ email: 'email@email.com'});

    expect(user.email).toBe('email@email.com')
  })

})