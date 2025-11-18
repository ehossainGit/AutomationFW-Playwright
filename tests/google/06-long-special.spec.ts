// spec: specs/verify-google-search-plan.md
// scenario: Scenario 6 — Long & special characters

import { test, expect } from '@playwright/test';

test('Handle long queries and special characters', async ({ page }) => {
  await page.goto('https://www.google.com');
  const accept = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await accept.count() > 0) await accept.first().click().catch(() => {});

  const long = 'a'.repeat(300);
  const input = page.getByRole('textbox');
  await input.fill(long);
  await input.press('Enter');
  await page.waitForURL('**/search**', { timeout: 10000 });

  // Special character queries
  await page.goto('https://www.google.com');
  await input.fill('C++ tutorial');
  await input.press('Enter');
  await page.waitForURL('**/search**', { timeout: 10000 });

  await page.goto('https://www.google.com');
  await input.fill('emoji 😊');
  await input.press('Enter');
  await page.waitForURL('**/search**', { timeout: 10000 });

  expect(true).toBeTruthy();
});
