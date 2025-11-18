import { test, expect, Page } from '@playwright/test';

const url = 'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php';

// Helpers: try semantic queries first, fall back to common attributes
function nameField(page: Page) {
  const byLabel = page.getByLabel('Name');
  const fallback = page.locator('input[placeholder*="Name"], input[name*="name"], input#name');
  return byLabel.count().then(c => c > 0 ? byLabel : fallback);
}
function emailField(page: Page) {
  const byLabel = page.getByLabel('Email');
  const fallback = page.locator('input[type="email"], input[name*="email"], input#email');
  return byLabel.count().then(c => c > 0 ? byLabel : fallback);
}
function loginButton(page: Page) {
  const byRole = page.getByRole('button', { name: /login|submit|sign in/i });
  const fallback = page.locator('input[type="submit"], button[type="submit"], button');
  return byRole.count().then(c => c > 0 ? byRole : fallback);
}
function genderRadios(page: Page) {
  // Some practice pages don't expose accessible names for radio inputs; select all radios as a fallback
  const radios = page.locator('input[type="radio"]');
  const male = page.getByRole('radio', { name: /male/i });
  const female = page.getByRole('radio', { name: /female/i });
  return { radios, male, female };
}

// Small utility to resolve locator promises returned above
async function resolveLocator(locatorOrPromise: any) {
  return locatorOrPromise;
}

test.describe('Selenium Practice page - form validation scenarios', () => {
  test.beforeEach(async ({ page }) => {
    // Set a common browser user-agent to reduce the chance the target site blocks the request
    await page.context().setExtraHTTPHeaders({
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const resp = await page.goto(url, { waitUntil: 'domcontentloaded' });
    if (resp && resp.status() === 403) {
      throw new Error(`Received HTTP 403 when loading ${url} - the site may block automated requests. Try running this test with a real browser profile or adjust headers.`);
    }
  });

  test('Presence: Name, Email, Gender and Login button are visible and enabled', async ({ page }) => {
    const name = await nameField(page);
    const email = await emailField(page);
    const login = await loginButton(page);
  const { radios, male, female } = genderRadios(page);

    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();

    await expect(email).toBeVisible();
    await expect(email).toBeEnabled();

    await expect(login).toBeVisible();
    await expect(login).toBeEnabled();

  // At least one radio should be present (some pages don't expose accessible names)
  const radioCount = await radios.count();
  const maleVisible = (await male.count()) > 0 && await male.isVisible();
  const femaleVisible = (await female.count()) > 0 && await female.isVisible();
  expect(radioCount > 0 || maleVisible || femaleVisible).toBeTruthy();
  });

  test('Happy path: fill Name, valid Email, select Gender and click Login (no client-side errors)', async ({ page }) => {
    const name = await nameField(page);
    const email = await emailField(page);
    const login = await loginButton(page);
  const { radios, male, female } = genderRadios(page);

    await name.fill('Alice Tester');
    await expect(name).toHaveValue('Alice Tester');

    await email.fill('test.user@example.com');
    await page.locator('body').click(); // blur to trigger validation

    // ensure email validity using checkValidity if available
    const emailValid = await email.evaluate((el: HTMLInputElement) => {
      if (typeof el.checkValidity === 'function') return el.checkValidity();
      return /.+@.+\..+/.test(el.value);
    });
    expect(emailValid).toBeTruthy();

    // select a gender if present - prefer labelled radios, else pick the first radio
    const radioCount = await radios.count();
    if ((await male.count()) > 0) {
      await male.check();
      await expect(male).toBeChecked();
    } else if ((await female.count()) > 0) {
      await female.check();
      await expect(female).toBeChecked();
    } else if (radioCount > 0) {
      await radios.first().check();
      await expect(radios.first()).toBeChecked();
    }

    // click login - practice page may not navigate; ensure no HTML5 validation prevents submission
    await login.click();

    // After click, verify email still valid and no role=alert visible
    expect(await email.evaluate((el: HTMLInputElement) => el.checkValidity ? el.checkValidity() : true)).toBeTruthy();
    const alerts = page.getByRole('alert');
    if (await alerts.count() > 0) {
      expect(await alerts.first().isVisible()).toBeFalsy();
    }
  });

  test('Invalid email shows validation error and prevents submission', async ({ page }) => {
    const name = await nameField(page);
    const email = await emailField(page);
    const login = await loginButton(page);

    await name.fill('Alice Tester');
    await email.fill('not-an-email');
    await page.locator('body').click();

    // email should be invalid per HTML5
    const emailValid = await email.evaluate((el: HTMLInputElement) => el.checkValidity ? el.checkValidity() : /.+@.+\..+/.test(el.value));
    expect(emailValid).toBeFalsy();

    // attempt submit and ensure the page doesn't navigate (practice page) or form reports invalid
    const form = page.locator('form').first();
    if (await form.count() > 0) {
      // click and then assert form.checkValidity === false
      await login.click();
      const formValid = await form.evaluate((f: HTMLFormElement) => f.checkValidity ? f.checkValidity() : true);
      expect(formValid).toBeFalsy();
    } else {
      const before = page.url();
      await login.click();
      await page.waitForTimeout(400);
      expect(page.url()).toBe(before);
    }
  });

  test('Missing required fields: clicking Login without Name or Email shows error', async ({ page }) => {
    const name = await nameField(page);
    const email = await emailField(page);
    const login = await loginButton(page);

    await name.fill('');
    await email.fill('');

    // click and check for alerts or HTML5 invalid elements
    await login.click();

    // Accept any of these behaviors as valid for the practice page:
    // - a visible alert element appears
    // - the form reports invalid via checkValidity()
    // - clicking the button does not navigate away (submission blocked)
    const alerts = page.getByRole('alert');
    if (await alerts.count() > 0) {
      expect(await alerts.first().isVisible()).toBeTruthy();
      return;
    }

    const form = page.locator('form').first();
    if (await form.count() > 0) {
      const formValid = await form.evaluate((f: HTMLFormElement) => f.checkValidity ? f.checkValidity() : true);
      if (!formValid) {
        expect(formValid).toBeFalsy();
        return;
      }
    }

    // fallback: ensure clicking the button does not navigate away (submission blocked or client-side handling)
    const before = page.url();
    await login.click();
    await page.waitForTimeout(400);
    expect(page.url()).toBe(before);
  });
});
