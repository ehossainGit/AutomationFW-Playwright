/** TBD */

import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';

const testData = JSON.parse(JSON.stringify(require('../../dataProfile/profile-default.json')));

test('open app', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.openApp(testData.url);
  await loginPage.login(testData.user, testData.password);

});