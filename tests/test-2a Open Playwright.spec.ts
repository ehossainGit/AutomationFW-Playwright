import {test, expect} from '@playwright/test';


test('Open Playwright', async ({page}) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Verify that the title contains 'Playwright'
  await expect(page).toHaveTitle(/Playwright/);

  // Check if the main heading is visible
//   const mainHeading = page.locator('h1');
//   await expect(mainHeading).toBeVisible();
await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
await page.getByRole('link', { name: 'Get started' }).screenshot({ path: './test-result/get-started-link.png' });

await page.screenshot({ path: './test-result/full-page.png', fullPage: true });

// Blink the "Get started" link by toggling a red outline 3 times
for (let i = 0; i < 3; i++) {
    await page.evaluate(() => {
        const link = Array.from(document.querySelectorAll('a')).find(a => a.textContent?.trim() === 'Get started');
        if (link) (link as HTMLElement).style.outline = '3px solid red';
    });
    await page.waitForTimeout(300);
    await page.evaluate(() => {
        const link = Array.from(document.querySelectorAll('a')).find(a => a.textContent?.trim() === 'Get started');
        if (link) (link as HTMLElement).style.outline = '';
    });
    await page.waitForTimeout(300);
}

  // Verify that the main heading contains 'Fast and reliable end-to-end testing for modern web apps'
//   await expect(mainHeading).toHaveText('Fast and reliable end-to-end testing for modern web apps');
});


