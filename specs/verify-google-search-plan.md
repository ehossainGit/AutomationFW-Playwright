# Verify Google Search — Test Plan

## Executive summary
This plan verifies core Google Search behavior for the main search experience (desktop and mobile). It focuses on the critical user journeys: entering a query, receiving relevant results, navigating results, and using common features (autocomplete, suggestions, keyboard navigation, opening results). The plan is intended for both manual QA and automated Playwright tests.

Scope
- Main Search page: https://www.google.com
- Core features: search input, autocomplete suggestions, search results list, result navigation, opening results in same/new tab, pagination, keyboard navigation, image search shortcuts.
- Platforms: Desktop (Chromium-based), Mobile viewport (emulated)

Out of scope
- Google account-specific features (sign-in, personalized results)
- Ads and paid features testing
- Deep indexing or ranking validation beyond basic relevance smoke checks

Assumptions / starting state
- Fresh browser context (no cookies, no signed-in account)
- Network connectivity to google.com
- Tests run against the public google.com domain (some locales may redirect)

Success criteria
- Search input accepts queries and returns a results page within reasonable time (<= 5s typical load)
- First page of results contains at least one clickable result with a valid URL
- Autocomplete and suggestions appear for partial queries
- Keyboard navigation (Arrow keys, Enter, Tab) works to move focus and submit

Failure conditions
- No results returned or results page fails to load
- Main interactive elements (search box, results links) are not visible or interactable
- Autocomplete never appears for queries where it should

Test data
- Simple queries: "playwright", "example", "weather"
- Long query: 256+ characters (to test limits)
- Special chars: "C++ tutorial", "node.js", "emoji 😊"
- Empty query: press Enter without entering text
- Non-Latin input: "東京 観光"

## Test scenarios
Each scenario includes: title, steps, expected results, assumptions, and pass/fail criteria.

### Scenario 1 — Basic search (Happy path)
Title: Basic search returns results
Seed: `tests/seed.spec.ts`

Steps:
1. Open `https://www.google.com` in a fresh browser context.
2. Verify the search input is visible and enabled.
3. Type "playwright" into the search input.
4. Press Enter (or click the Search button).
5. Wait for the results page to load (URL contains `/search` and query param `q=playwright`).
6. Verify that at least one search result is visible and has a non-empty `href`.

Expected results:
- The results page loads successfully.
- The first page of results contains clickable links.
- The page title contains the search query.

Success criteria:
- Results page URL contains `q=playwright` and status is 200.
- At least one result link is visible and navigable.

Failure conditions:
- No results or the page fails to load within timeout.

Notes for automation:
- Use `page.getByRole('textbox', { name: /search/i })` or `input[name=q]` as locator fallback.
- Wait for network idle or a specific results selector like `#search` or `div#search`.

---

### Scenario 2 — Autocomplete / suggestions
Title: Autocomplete appears and selecting a suggestion fills the input

Steps:
1. Open `https://www.google.com`.
2. Click the search input and type "weath" (partial query).
3. Wait for the autocomplete suggestion list to appear.
4. Verify suggestions list contains at least one suggestion and is visible.
5. Click the first suggestion or navigate to it with ArrowDown and press Enter.
6. Verify the search input is populated with the chosen suggestion and results load accordingly.

Expected results:
- Suggestion list appears within ~2 seconds.
- Selecting a suggestion triggers a search and loads results.

Edge cases:
- Suggestions may vary by locale; test assertions should be tolerant (presence of list, not exact text).

---

### Scenario 3 — Keyboard navigation
Title: Navigate suggestions and results using keyboard

Steps:
1. Open `https://www.google.com` and focus the search input.
2. Type "playwright" and wait for suggestions (if any).
3. Press ArrowDown to navigate suggestions; ensure focus moves visually (or via `aria-selected`).
4. Press Enter to select suggestion and submit search.
5. On results page, use Tab to focus first result and press Enter to open it.

Expected results:
- Arrow keys move between suggestions.
- Enter selects and submits the suggestion.
- Tab focuses links in logical order and Enter opens the focused link.

---

### Scenario 4 — Open result in new tab
Title: Open a search result in a new tab from results page

Steps:
1. Perform a basic search for "example".
2. Locate the first results link and use `Ctrl+Click` (or meta key on Mac) to open in a new tab.
3. Switch to the new tab and verify it loads the target site.

Expected results:
- The new tab opens and target URL is reachable.

Notes:
- In automation, emulate new tab behavior via `page.waitForEvent('popup')` or by capturing `target` when clicking a link with `button: 'middle'` or `modifiers: ['Control']`.

---

### Scenario 5 — Empty query behavior
Title: Press Enter with empty search input

Steps:
1. Open `https://www.google.com`.
2. Ensure the search input is empty.
3. Press Enter.

Expected results:
- Either nothing happens or Google shows a search results page for default behavior. No uncaught errors should appear.

---

### Scenario 6 — Long & special characters
Title: Handle long queries and special characters

Steps:
1. Input a 300-character long string and submit.
2. Input queries with special characters: `C++ tutorial`, `node.js`, `emoji 😊` and submit.

Expected results:
- The search engine accepts input and returns results (or handles gracefully with an informative page).

---

### Scenario 7 — Image search quick access
Title: Navigate to image search and verify results

Steps:
1. On google.com, click the "Images" link in the header (or open https://images.google.com).
2. Type "puppies" and submit.
3. Verify that image results grid appears and images are visible.

Expected results:
- Image search page loads and presents images.

---

### Scenario 8 — Locale / cookie consent handling
Title: Handle cookie consents and locale redirects

Steps:
1. Open `https://www.google.com` from a fresh context.
2. If a cookie/consent dialog appears, detect and accept it (or validate its presence and dismiss it as needed for the test).
3. Verify the page is usable after accepting or rejecting.

Notes:
- Consent dialogs vary by region; automation should detect and handle common selectors like `button:has-text("I agree")` or `#L2AGLb`.

---

### Scenario 9 — Offline / network errors
Title: Verify graceful failure when offline

Steps:
1. Start a search, then simulate offline network (Playwright `route` or context `setOffline(true)`).
2. Attempt to load results; observe error behavior.

Expected results:
- The page shows a network error or retry UI; no unhandled exceptions.

---

## Automation guidance
- Tests should run in isolated contexts (fresh contexts) to avoid personalization.
- Use resilient locators: prefer roles (getByRole) and stable attributes. Avoid brittle CSS that may change frequently.
- Use short explicit timeouts for UI waits (5-10s) and longer network timeouts when loading external sites.
- Tag tests: `@smoke` for basic search, `@autocomplete` for suggestion tests, `@keyboard` for keyboard navigation.

## Accessibility checks
- Verify search input has accessible name (label or aria-label).
- Use `axe-core` or Playwright accessibility snapshot to ensure no critical a11y violations on the search and results pages.

## Performance / flakiness notes
- Results can vary by region; make assertions tolerant (existence and type of elements instead of exact text).
- Use retries for flaky steps where appropriate but aim to fix root causes (waits, better locators).

## Deliverables
- `specs/verify-google-search-plan.md` (this file)
- Suggested automated tests (one per scenario) under `tests/google/` following Playwright Test conventions.

---

If you'd like, I can now generate Playwright tests from individual scenarios (one test per scenario) and place them under `tests/google/`. Which scenarios should I generate first (e.g., Basic search + Autocomplete)?
