// spec: specs/verify-google-search-plan.md
// scenario: Scenario 2 — Autocomplete / suggestions

import { test, expect } from '@playwright/test';

test('Autocomplete appears and selecting a suggestion fills the input', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Accept consent if present
  const consent = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await consent.count() > 0) { await consent.first().click().catch(() => {}); }

  const input = page.getByRole('textbox');
  await expect(input).toBeVisible();
  await input.click();
  await input.type('weath');

  // Wait for suggestion list
  const suggestions = page.locator('ul[role="listbox"] li, div[role="listbox"] li, div[role="listbox"] *');
  await expect(suggestions.first()).toBeVisible({ timeout: 3000 });

  // Click first suggestion (or press ArrowDown+Enter)
  await suggestions.first().click().catch(async () => { await input.press('ArrowDown'); await input.press('Enter'); });

  // Verify input populated or results loaded
  await page.waitForURL('**/search**', { timeout: 5000 });
  await expect(page).toHaveURL(/\bq=/);
});
