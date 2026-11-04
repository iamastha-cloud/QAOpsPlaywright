
import { defineConfig } from '@playwright/test';
import {
  createAzurePlaywrightConfig,
  ServiceOS
} from '@azure/playwright';
import { AzureCliCredential } from '@azure/identity';
import config from './playwright.config.js';

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    os: ServiceOS.LINUX,
    connectTimeout: 180000,
    exposeNetwork: '<loopback>',
    credential: new AzureCliCredential(),
  }),
  {
    reporter: [
      ['html', { open: 'never' }],
      ['@azure/playwright/reporter'],
    ],
  }
);
