// spec: specs/verify-google-search-plan.md
// scenario: Scenario 8 — Locale / cookie consent handling

import { test, expect } from '@playwright/test';

test('Handle cookie consents and locale redirects', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Detect and accept common consent dialogs
  const consentButton = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await consentButton.count() > 0) {
    await consentButton.first().click().catch(() => {});
  }

  // Ensure main input remains usable
  const input = page.getByRole('textbox');
  await expect(input).toBeVisible();
});
