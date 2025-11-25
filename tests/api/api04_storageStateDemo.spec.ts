import { test, expect } from '@playwright/test';
import * as filePath from 'path';

test('save authentication state', async ({ page }) => {
  await page.goto('https://your-app.com/login');
  await page.fill('#username', 'your_username');
  await page.fill('#password', 'your_password');
  await page.click('#login-button');
  // Wait for successful login and potentially redirect
  await page.waitForURL('https://your-app.com/dashboard'); 

  // Save the storage state
  await page.context().storageState({ path: filePath.join(process.cwd(),'.auth', 'user.json') });
//   await page.context().storageState({ path: 'playwright/.auth/user.json' });
});

test.use({ storageState: filePath.join(process.cwd(),'.auth', 'user.json') }); // Reuse the saved state

test('access protected UI page', async ({ page }) => {
  await page.goto('https://your-app.com/protected-page');
  // Assert content on the protected page
  await expect(page.locator('h1')).toHaveText('Welcome to Protected Page');
});