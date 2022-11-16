import type { PlaywrightTestConfig } from "@playwright/test";
// import { faker } from '@faker-js/faker';
// import ENV from './tests/utils/ENV';

// faker.locale = 'ru';
// const testURL = ENV.SHOWCASE_URL;
const config: PlaywrightTestConfig = {
  use: {
      headless: false,
      trace: process.env.CI ? 'off' : 'retain-on-failure',
      // connectOptions: process.env.CI ? { wsEndpoint: 'ссылка на хост муна' } : undefined,
      ignoreHTTPSErrors: true,
      browserName: 'chromium',
      locale: 'ru',
      launchOptions: {
          // devtools: true,
          args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--start-maximized'],
      },
      baseURL: 'https://hw.lecta.ru',
      actionTimeout: 30_000,
      screenshot: 'only-on-failure',
  },
  globalTimeout: 600000,
  projects: [
    {
      name: "lecta-homework",
      testDir: "./tests/specs/lecta-homework",
      expect: { timeout: 10_000 },
    },
  ],
  reporter: process.env.CI
    ? [
        [
          "html",
          {
            open: "never",
            outputFolder: "./public",
          },
        ],
        ["list"],
      ]
    : [["html", { open: "never" }], ["list"]],
  timeout: 45_000,
  forbidOnly: !!process.env.CI,
  // globalSetup: './globalSetup',
};

export default config;
