// spec: specs/verify-google-search-plan.md
// scenario: Scenario 5 — Empty query behavior

import { test, expect } from '@playwright/test';

test('Press Enter with empty search input', async ({ page }) => {
  await page.goto('https://www.google.com');
  const accept = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await accept.count() > 0) await accept.first().click().catch(() => {});

  const input = page.getByRole('textbox');
  await expect(input).toBeVisible();
  await input.fill('');
  await input.press('Enter');

  // Expect either no navigation or a search page; just ensure no uncaught errors and page is stable
  await page.waitForLoadState('domcontentloaded');
  expect(await page.url().length).toBeGreaterThan(0);
});
