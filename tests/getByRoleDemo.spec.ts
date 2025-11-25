import { test, expect } from '@playwright/test';

test('Verify website navigation and link click', async ({ page }) => {
  // 1. Navigate to the initial website
  await page.goto('https://www.example.com');

  // 2. Verify the title of the initial page
  await expect(page).toHaveTitle('Example Domain');

  // 3. Click on the link with specific text
  await page.getByRole('link', { name: 'Learn more' }).click();
//   const link = await page.getByRole('link', { name: 'Learn more' });
//     link.click();

    // await expect(page.getByRole('link', { name: 'Learn more' })).toHaveText('Learn more');
    await expect(page.getByRole('link', { name: 'IANA-managed Reserved Domains' })).toHaveText(/Reserved Domains/);  

  // 4. Verify the title of the new page after clicking the link
  await expect(page).toHaveTitle(/Domain/);
});