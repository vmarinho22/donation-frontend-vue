import { vi } from 'vitest'
import { config } from "@vue/test-utils"

(global as any).CSS = { supports: () => false };

config.global.mocks = {
  $t: tKey => tKey
};

vi.mock('vue-router', async() => {
  const actual = await vi.importActual("vue-router")

  return {
    ...actual as any,
    useRoute: vi.fn().mockReturnValue({
      fullPath: '',
    }),
    useRouter: vi.fn(() => ({
      push: () => {}
    }))
  }
})

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal('ResizeObserver', ResizeObserverMock);