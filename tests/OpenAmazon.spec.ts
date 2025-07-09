import {test, expect} from '@playwright/test';
import { setTimeout } from 'timers/promises';


  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com');
    
  });

test.describe('Test Suite 1', () => {
    test('Search for TV mount', async({page})=>{
        await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
await page.pause();
        await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('TV');
        await page.locator('//*[@aria-label="tv mount"]').click();

        await expect(page.getByRole('link', { name: 'Your TV at a perfect angel.', exact: true })).toBeVisible();
    });

    test('Search for Laptop', async({page})=>{
      await page.getByRole('searchbox', { name: 'Search Amazon' }).click();

      await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('Laptop');
      await page.locator('//*[@aria-label="TBD"]').click();

      await expect(page.getByRole('link', { name: 'Your TV at a perfect angel.', exact: true })).toBeVisible();

     
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });


});
