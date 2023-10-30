import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useSignUp } from './signup'

describe('SignUp Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a default state', () => {
    const { user, profile, address } = useSignUp()

    expect(user).not.toBeNull()
    expect(profile).not.toBeNull()
    expect(address).not.toBeNull()
  });

  it('should update user', () => {
    const { user, updateUser } = useSignUp()

    updateUser('email', 'email@email.com');

    expect(user.email).toBe('email@email.com')
  })

  it('should update profile', () => {
    const { profile, updateProfile } = useSignUp()

    updateProfile('firstName', 'John');

    expect(profile.firstName).toBe('John')
  })

  it('should update address', () => {
    const { address, updateAddress } = useSignUp()

    updateAddress('postalCode', 12345678);

    expect(address.postalCode).toBe(12345678)
  })

  it('should clear all data', () => {
    const { user, updateUser, profile, address, clearAllData } = useSignUp()

    updateUser('email', 'email@email.com')

    expect(user.email).toBe('email@email.com')

    clearAllData()

    expect(user).not.toBeNull()
    expect(profile).not.toBeNull()
    expect(address).not.toBeNull()
  })
})