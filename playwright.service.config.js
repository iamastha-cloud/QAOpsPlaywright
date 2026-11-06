
require('dotenv').config();

const { defineConfig } = require('@playwright/test');

const {
  createAzurePlaywrightConfig,
  ServiceOS
} = require('@azure/playwright');

const { AzureCliCredential } = require('@azure/identity');

const config = require('./playwright.config.js');

module.exports = defineConfig(
  config,

  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    connectTimeout: 180000,
    exposeNetwork: '<loopback>',
    credential: new AzureCliCredential(),
    runName: 'QACloud-GitHub-Actions',
  }),

  {
    reporter: [
      ['html', { open: 'never' }],
      ['@azure/playwright/reporter'],
    ],
  }
);
