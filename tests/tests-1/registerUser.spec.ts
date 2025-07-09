
import { test, expect } from '@playwright/test';
//import { LoginPage } from '../helpers/loginPage';

//const testData = JSON.parse(JSON.stringify(require('../data/profile.json')));

test.beforeEach(async ({ page }) => {
    await page.goto('?route=account/register')
  });

  test('open app', async ({ page }) => {
  
    // await page.goto(testData.url);
    // await page.getByRole('textbox', { name: 'Login' }).click();
    // await page.getByRole('textbox', { name: 'Login' }).fill(testData.user);
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
    // await page.getByRole('button', { name: 'Submit' }).click();
    });