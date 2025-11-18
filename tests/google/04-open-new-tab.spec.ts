// spec: specs/verify-google-search-plan.md
// scenario: Scenario 4 — Open result in new tab

import { test, expect } from '@playwright/test';

test('Open a search result in a new tab from results page', async ({ page, context }) => {
  await page.goto('https://www.google.com');
  const accept = page.locator('button:has-text("I agree"), button:has-text("Accept"), #L2AGLb');
  if (await accept.count() > 0) await accept.first().click().catch(() => {});

  const input = page.getByRole('textbox');
  await input.fill('example');
  await input.press('Enter');

  await page.waitForURL('**/search**', { timeout: 10000 });

  const firstLink = page.locator('#search a').first();
  const [popup] = await Promise.all([
    context.waitForEvent('page'),
    firstLink.click({ modifiers: ['Control'] })
  ]);

  await popup.waitForLoadState('load');
  expect(popup.url().length).toBeGreaterThan(0);
});
