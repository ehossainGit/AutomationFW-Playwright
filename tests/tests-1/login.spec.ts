/** Open the App */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

const testData = JSON.parse(JSON.stringify(require('../../dataProfile/profile-default.json')));


test('open app', async ({ page }) => {

  await page.goto(testData.url);
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill(testData.user);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
  await page.getByRole('button', { name: 'Submit' }).click();
  });