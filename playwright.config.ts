import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/crud',
  retries: 0,
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL,
  },
  reporter: [['html', { open: 'never' }]],
});