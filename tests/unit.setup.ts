import { vi } from 'vitest'
import { config } from "@vue/test-utils"

(global as any).CSS = { supports: () => false };

config.global.mocks = {
  $t: tKey => tKey
};

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {}
  }))
}))
