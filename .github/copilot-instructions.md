## Quick orientation for AI code assistants

This repository is a Playwright TypeScript test framework focused on end-to-end and API tests.
The goal of this document is to give an AI agent the exact, actionable knowledge needed to be productive.

### Where tests live
- Test directory: `./tests` (configured in `playwright.config.ts`).
- Examples:
  - `tests/mcp/mcp.demo.spec.ts` — a Playwright API test example
  - `tests/api/api01_conduit-api.spec.ts` — practical API tests using the `request` fixture

### How to run tests locally
- Install deps: `npm ci` (uses `package.json`).
- Install browsers: `npx playwright install --with-deps`.
- Run all tests: `npx playwright test`.
- Run a specific file: `npx playwright test tests/api/api01_conduit-api.spec.ts`.
- Run a single test by title: `npx playwright test -g "Tags API"` or use `-g` with the test name.

### CI behavior
- GitHub Actions workflow: `.github/workflows/playwright.yml` — it runs `npm ci`, installs browsers, and executes `npx playwright test`.
- `playwright.config.ts` sets retry/workers behavior: retries on CI, `workers: 1` on CI, `reporter: 'html'` and `trace: 'on-first-retry'`.

### Important project-specific patterns
- Tests use Playwright Test fixtures. Always destructure fixtures from the test args: e.g. `async ({ page }) => {}` or `async ({ request }) => {}`. The `request` fixture is an APIRequestContext — call `request.get(...)` directly.

- Browser & Context usage:
  - `browser = await chromium.launch()` creates a browser instance.
  - `context = await browser.newContext()` creates an isolated session (cookies/localStorage separate).
  - `page = await context.newPage()` opens a tab in that context.

- Data & test inputs:
  - Example of reading JSON data: tests sometimes use `const testData = JSON.parse(JSON.stringify(require('../../data/profile-default.json')))`; follow this pattern when adding data-driven tests.
  - Prompt files for MCP-driven generation: `mcpPrompts/generate-test.md` contains example generator prompts.

### Conventions to follow when editing tests
- Keep tests under `tests/` and use `.spec.ts` naming.
- Use Playwright's `expect` for assertions. Prefer `expect(page).toHaveURL(...)` and `expect(page).toHaveTitle(...)` for UI checks.
- For API tests prefer `const response = await request.get(url); expect(response.status()).toBe(200); const body = await response.json();`.

### Examples (copy-paste ready)
- API test skeleton:
```ts
import { test, expect } from '@playwright/test';

test('example api', async ({ request }) => {
  const res = await request.get('https://conduit-api.bondaracademy.com/api/tags');
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json).toHaveProperty('tags');
});
```

- UI test skeleton (Google search):
```ts
import { test, expect } from '@playwright/test';

test('google search', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.getByRole('textbox', { name: /search/i }).fill('test');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/search/);
});
```

### Notes & gotchas discovered in this repo
- `mcp` is referenced by prompts and examples but is not listed in `package.json`. If a test needs `mcp` functionality, add it to `package.json` and `npm ci`.
- `playwright.config.ts` contains `launchOptions.slowMo` (set to `3000`) — be mindful: test authors may have slowed actions for debugging.
- Some tests log console output (`console.log` on response bodies). Avoid changing this when editing tests unless improving diagnostics.

### Where to look for more context
- `playwright.config.ts` — test runner config and projects
- `.github/workflows/playwright.yml` — CI steps and commands
- `package.json` — declared dependencies and devDependencies
- `tests/` — concrete test examples (API, UI, MCP prompts)

If anything in this file is unclear or you need additional project-specific rules (naming conventions, test data workflows, or preferred reporters), tell me what to include and I will update this file.
