
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  fullyParallel: true,
  workers: 3,

  use: {
    headless: true,
    screenshot: 'on',
    trace: 'on',
  },

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
