const { test, expect } = require('@playwright/test');
const testData = require('../data/testData.json');
const { login } = require('./helpers');
const { projectButton, taskCard, tagSpan } = require('./utils/selectors');

test.describe('Data-Driven Task Verification', () => {
  for (const scenario of testData) {
    const { testCaseName, projectName, taskName, columnName, tags } = scenario;

    test(`${testCaseName}`, async ({ page }) => {
      // 1. Login
      await login(page);

      // 2. Click the correct project
      await page.click(projectButton(projectName));

      // 3. Build a locator for the entire "card" in the correct column
      const taskCardSelector = taskCard(columnName, taskName);

      // 4. Confirm that this task card is visible
      await expect(page.locator(taskCardSelector)).toBeVisible({ timeout: 5000 });

      // 5. For each tag (e.g. "Feature", "High Priority"), confirm it appears within the card
      for (const tag of tags) {
        // Build the tag <span> selector
        const tagSelector = tagSpan(tag);

        // Combine the card + the tag
        const finalLocator = page.locator(`${taskCardSelector} >> ${tagSelector}`);
        await expect(finalLocator).toBeVisible({ timeout: 5000 });
      }
    });
  }
});
