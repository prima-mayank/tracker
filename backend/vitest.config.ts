import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // setup.ts (DB connect) only applies to integration tests
    setupFiles: [],
    include: ['src/tests/unit/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
