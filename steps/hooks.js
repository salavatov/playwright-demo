const { Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const fs = require('fs');
const { join } = require('path');

Before(async function (scenario) {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
  
  console.log(`🟢 Starting Scenario: ${scenario.pickle.name}`);
});

After(async function (scenario) {
  await this.page.close();
  await this.browser.close();

  if (scenario.result.status === Status.FAILED) {
    console.log(`❌ Scenario Failed: ${scenario.pickle.name}`);

    const resultsDir = 'allure-results';
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir);
    }

    const allureReport = {
      name: scenario.pickle.name,
      status: scenario.result.status,
      start: Date.now(),
      stop: Date.now(),
    };

    fs.writeFileSync(
      join(resultsDir, `result-${Date.now()}.json`),
      JSON.stringify(allureReport, null, 2)
    );
  }
});
