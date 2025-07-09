/** Open the App */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { log } from 'console';

//const testData = JSON.parse(JSON.stringify(require('../dataProfile/profile-default.json')));


test('open app', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.getByText('Forgot your password?').click();

await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();


  const text = await page.getByRole('heading', { name: 'Reset Password' }).textContent();

  console.log('App text:', text);


});