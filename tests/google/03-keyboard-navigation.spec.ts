// spec: specs/verify-google-search-plan.md
// scenario: Scenario 3 — Keyboard navigation

import { test, expect } from '@playwright/test';

test('Navigate suggestions and results using keyboard', async ({ page }) => {
  await page.goto('https://www.google.com');

  const accept = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await accept.count() > 0) await accept.first().click().catch(() => {});

  const input = page.getByRole('textbox');
  await input.click();
  await input.fill('playwright');

  // Wait for suggestions and navigate
  await page.waitForTimeout(500); // small pause for suggestions to appear
  await input.press('ArrowDown');
  await input.press('Enter');

  // On results page, tab to first result and open it
  await page.waitForURL('**/search**', { timeout: 10000 });
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

  // Expect new navigation
  await page.waitForLoadState('load');
});
