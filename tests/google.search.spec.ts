import { test, expect } from '@playwright/test';

test('open Google and check title (headed)', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Accept cookies if the consent dialog appears (common in EU)
  const acceptButton = page.getByRole('button', { name: /accept all|i agree|agree/i });
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  // store title and print
  const title = await page.title();
  console.log('Page title:', title);

  await expect(page).toHaveTitle(/Google/);
});
