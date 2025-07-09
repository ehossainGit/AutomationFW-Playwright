/** Open the App */
import { test, expect } from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';

//const testData = JSON.parse(JSON.stringify(require('../dataProfile/profile-default.json')));


test('open app', async ({ page }) => {

  await page.goto("https://www.amazon.com/");

  await page.pause();
  
  await page.locator('//*[@id="nav-link-accountList-nav-line-1"]').hover();
  await page.waitForTimeout(3000);

  await page.locator('//*[@id="nav-flyout-ya-signin"]/a/span').click();

  
  });