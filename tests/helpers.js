const { expect } = require("@playwright/test");
const {
  usernameInput,
  passwordInput,
  loginButton,
  webApplicationButton,
  logoutText,
} = require("./utils/selectors");
require("dotenv").config();

const userPhone = process.env.PLAYWRIGHT_USER;
const password = process.env.PLAYWRIGHT_PASS;

async function login(page) {
  // 1. Go to the login page
  await page.goto(process.env.BASE_URL || 'https://animated-gingersnap-8cf7f2.netlify.app/');

  // 2. Fill in credentials
  await page.fill(usernameInput, userPhone || '');
  await page.fill(passwordInput, password || '');

  // 3. Click the login button
  await page.click(loginButton);

  // 4. Wait until we're sure the next page is fully loaded
  await page.waitForSelector(webApplicationButton, { timeout: 5000 });

  // 5. Verify post-login text
  await expect(page.locator(logoutText)).toBeVisible();
}

module.exports = {
  login,
};
