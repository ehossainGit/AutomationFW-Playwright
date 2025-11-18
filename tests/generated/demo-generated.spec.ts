import { test, expect } from '@playwright/test';

// Demo-generated test produced by the generator agent

test.describe('Demo Generated Tests', () => {
  test('Login Flow — Basic', async ({ page }) => {
    // 1. Open the app
    await page.goto('https://example.com/login');

    // 2. Enter username
    await page.fill('input[name="username"]', 'user@example.com');

    // 3. Enter password
    await page.fill('input[name="password"]', 'Password123');

    // 4. Click Sign in
    await page.click('button[type="submit"]');

    // 5. Expect dashboard heading
    await expect(page.getByRole('heading', { name: /Welcome/i })).toBeVisible();
  });
});
