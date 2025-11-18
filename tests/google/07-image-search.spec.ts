// spec: specs/verify-google-search-plan.md
// scenario: Scenario 7 — Image search quick access

import { test, expect } from '@playwright/test';

test('Navigate to image search and verify results', async ({ page }) => {
  await page.goto('https://www.google.com');
  const accept = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await accept.count() > 0) await accept.first().click().catch(() => {});

  // Click Images link in header; fallback to images.google.com
  const imagesLink = page.locator('a:has-text("Images")');
  if (await imagesLink.count() > 0) {
    await imagesLink.first().click();
  } else {
    await page.goto('https://images.google.com');
  }

  const input = page.getByRole('textbox');
  await expect(input).toBeVisible();
  await input.fill('puppies');
  await input.press('Enter');

  // Verify images grid
  const images = page.locator('img');
  await expect(images.first()).toBeVisible({ timeout: 10000 });
});
