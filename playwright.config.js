const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  timeout: 30000,

  use: {
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    headless: false,
    slowMo: 500, // if you need to observe interactions in slow motion (debugging)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],            
    ['allure-playwright']
  ],
});

