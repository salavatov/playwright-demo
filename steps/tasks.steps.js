const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { login } = require('../tests/helpers'); 
const { projectButton, taskCard, tagSpan } = require('../tests/utils/selectors');

Given('I have logged in', async function() {
  await login(this.page);
});

When('I select the project {string}', async function (projectName) {
  await this.page.click(projectButton(projectName));
});

Then('I check the column {string} for the task {string}', async function(columnName, taskName) {
  this.taskCardSelector = taskCard(columnName, taskName);
  await expect(this.page.locator(this.taskCardSelector)).toBeVisible();
});

Then('I see the tags {string}', async function(tagString) {
  const tagArray = tagString.split(',');
  for (const tag of tagArray) {
    const finalLocator = this.page.locator(`${this.taskCardSelector} >> ${tagSpan(tag.trim())}`);
    await expect(finalLocator).toBeVisible();
  }
});
