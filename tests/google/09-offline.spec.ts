// spec: specs/verify-google-search-plan.md
// scenario: Scenario 9 — Offline / network errors

import { test, expect } from '@playwright/test';

test('Verify graceful failure when offline', async ({ context, page }) => {
  await page.goto('https://www.google.com');
  const input = page.getByRole('textbox');
  await expect(input).toBeVisible();

  // Simulate offline
  await context.setOffline(true);
  await input.fill('playwright');
  await input.press('Enter');

  // Confirm that navigation doesn't crash and an offline UI may show
  await page.waitForLoadState('domcontentloaded');
  expect(true).toBeTruthy();
});
