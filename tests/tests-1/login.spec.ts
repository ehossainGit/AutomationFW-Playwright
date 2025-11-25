/** Open the App */
import { test, expect } from '@playwright/test';
// import { LoginPage } from '../../pages/LoginPage';
import * as fs from 'fs';
import * as path from 'path';

const filePath: string = path.join(process.cwd(), 'data', 'profile-default.json');
const testData= JSON.parse(fs.readFileSync(filePath, 'utf-8'));

test('open app', async ({ page }) => {

  await page.goto(testData.url);
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill(testData.user);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
  await page.getByRole('button', { name: 'Submit' }).click();
});