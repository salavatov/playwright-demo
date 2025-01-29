const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

Before(async function() {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
});

After(async function() {
  await this.page.close();
  await this.browser.close();
});
