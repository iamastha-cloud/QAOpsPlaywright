
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  // Parallel execution
  fullyParallel: true,
  workers: 3,

  // Common browser settings
  use: {
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },

  // Three browser projects
  projects: [

    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],

});
