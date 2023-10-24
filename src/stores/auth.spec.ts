import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useAuth } from './auth';

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a default state', () => {
    const { loginAuth } = useAuth()

    expect(loginAuth).not.toBeNull()
  });

})