// spec: specs/verify-google-search-plan.md
// scenario: Scenario 1 — Basic search (Happy path)

import { test, expect } from '@playwright/test';

test.describe('Verify Google Search', () => {
  test('Basic search returns results', async ({ page }) => {
    // Helper: accept common cookie/consent dialogs if present
    const acceptConsent = async () => {
      const btn = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
      if (await btn.count() > 0) {
        try { await btn.first().click({ timeout: 2000 }); } catch { /* ignore */ }
      }
    };

    // 1. Open `https://www.google.com` in a fresh browser context.
    await page.goto('https://www.google.com');
    await acceptConsent();

    // 2. Verify the search input is visible and enabled.
    const input = page.getByRole('textbox');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();

    // 3. Type "playwright" into the search input.
    await input.fill('playwright');

    // 4. Press Enter (or click the Search button).
    await input.press('Enter');

    // 5. Wait for the results page to load (URL contains `/search` and query param `q=playwright`).
    await page.waitForURL('**/search**', { timeout: 10000 });
    await expect(page).toHaveURL(/\bq=playwright/);

    // 6. Verify that at least one search result is visible and has a non-empty `href`.
    const firstResult = page.locator('#search a').first();
    await expect(firstResult).toBeVisible({ timeout: 10000 });
    const href = await firstResult.getAttribute('href');
    expect(typeof href === 'string' && href.length > 0).toBeTruthy();
  });
});
