/** Open the App */
import { test, expect } from '@playwright/test';

test('open app', async ({ page }) => {

  await page.goto("https://www.amazon.com/");

  await page.pause();
  
  await page.locator('//*[@id="nav-link-accountList-nav-line-1"]').hover();
  await page.waitForTimeout(3000);

  await page.locator('//*[@id="nav-flyout-ya-signin"]/a/span').click();

  
  });