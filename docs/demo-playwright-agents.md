# Demo: Planner, Generator, and Healer Agents

This demo shows how the `planner`, `generator`, and `healer` chatmodes work conceptually and provides examples you can use as templates.

## Planner (Test planning)
The Planner explores a page and produces a human-readable test plan. It does not execute tests — it inspects the application structure and writes test scenarios.

Example output (high-level):

- Title: Login Flow — Basic
- Preconditions: Fresh session, user does not exist
- Steps:
  1. Open the app at `https://example.com/login`
  2. Enter username `user@example.com`
  3. Enter password `Password123`
  4. Click Sign in
  5. Expect to see the dashboard page with heading "Welcome"

The planner output is saved as `specs/login-flow-plan.md` (human-friendly Markdown).

---

## Generator (Test generation)
The Generator converts a planner output into a runnable Playwright test. It uses the plan steps and best-effort locators to produce a TypeScript test file.

Example generated test (saved under `tests/generated/login-flow.spec.ts`):

```ts
import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
  test('Login Flow — Basic', async ({ page }) => {
    // 1. Open the app
    await page.goto('https://example.com/login');

    // 2. Enter username
    await page.fill('input[name="username"]', 'user@example.com');

    // 3. Enter password
    await page.fill('input[name="password"]', 'Password123');

    // 4. Click Sign in
    await page.click('button[type="submit"]');

    // 5. Expect dashboard
    await expect(page.getByRole('heading', { name: /Welcome/i })).toBeVisible();
  });
});
```

Note: The generator includes comments referencing plan steps and uses `page` APIs.

---

## Healer (Fix failing tests)
The Healer inspects failing tests and attempts to make minimal, robust fixes.

Example Healer actions for a flaky login test:
- Replace brittle selector `#btn-login` with `button[type="submit"]`
- Add `await page.waitForSelector('input[name="username"]', { state: 'visible' })` before filling
- Convert exact text assertions into regex-based checks to allow minor wording changes

When successful, the Healer updates the test file and adds a short comment explaining the change.

---

## How to use these demos locally
1. Open this repository in VS Code.
2. Inspect `docs/demo-playwright-agents.md` for examples.
3. Run generated tests with:

```pwsh
npx playwright test tests/generated/demo-generated.spec.ts
```

(These generated tests are examples and may require editing to match your app.)
