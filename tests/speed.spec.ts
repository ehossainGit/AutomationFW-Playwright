import { test, expect } from '@playwright/test';

const url = 'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php';

function nameLocator(page) {
  return page.locator('input[placeholder*="Name"], input[name*="name"], input#name').first();
}
function emailLocator(page) {
  return page.locator('input[type="email"], input[name*="email"], input#email').first();
}
function loginButton(page) {
  return page.getByRole('button', { name: /login|submit/i }).first();
}
function maleRadio(page) {
  return page.getByRole('radio', { name: /male/i }).first();
}
function femaleRadio(page) {
  return page.getByRole('radio', { name: /female/i }).first();
}

test.describe('Selenium Practice - quick speed checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Name field - presence, type and clear', async ({ page }) => {
    const name = nameLocator(page);
    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();

    await name.fill('Alice Tester');
    await expect(name).toHaveValue('Alice Tester');

    // clear and verify empty
    await name.fill('');
    await expect(name).toHaveValue('');
  });

  test('Email validation - invalid email is rejected by constraint validation', async ({ page }) => {
    const email = emailLocator(page);
    await expect(email).toBeVisible();

    await email.fill('not-an-email');
    // move focus away
    await page.locator('body').click();

    // evaluate constraint validity on the input
    const isValid = await email.evaluate((el: HTMLInputElement) => {
      if (typeof el.checkValidity === 'function') return el.checkValidity();
      // if checkValidity isn't available, fallback to pattern-like check
      return /.+@.+\..+/.test(el.value);
    });

    expect(isValid).toBeFalsy();
  });

  test('Email validation - valid email accepted', async ({ page }) => {
    const email = emailLocator(page);
    await expect(email).toBeVisible();

    await email.fill('test.user@example.com');
    await page.locator('body').click();

    const isValid = await email.evaluate((el: HTMLInputElement) => {
      if (typeof el.checkValidity === 'function') return el.checkValidity();
      return /.+@.+\..+/.test(el.value);
    });

    expect(isValid).toBeTruthy();
  });

  test('Gender radios - mutually exclusive behavior', async ({ page }) => {
    const male = maleRadio(page);
    const female = femaleRadio(page);

    // At least one of them should be visible
    await expect(male.or(female)).toBeVisible();

    if (await male.isVisible()) {
      await male.check();
      await expect(male).toBeChecked();
    }

    if (await female.isVisible()) {
      await female.check();
      await expect(female).toBeChecked();
    }

    // If both visible, ensure only one is checked at a time
    if (await male.isVisible() && await female.isVisible()) {
      await male.check();
      await expect(male).toBeChecked();
      await expect(female).not.toBeChecked();

      await female.check();
      await expect(female).toBeChecked();
      await expect(male).not.toBeChecked();
    }
  });

  test('Login button - error when required fields missing and success path', async ({ page }) => {
    const name = nameLocator(page);
    const email = emailLocator(page);
    const loginBtn = loginButton(page);

    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toBeEnabled();

    // Click with empty fields
    await name.fill('');
    await email.fill('');

    // Try to submit and check form validity if a form exists
    const form = page.locator('form').first();
    if (await form.count() > 0) {
      // attempt to click and then check validity
      await loginBtn.click();
      const formValid = await form.evaluate((f: HTMLFormElement) => {
        if (typeof f.checkValidity === 'function') return f.checkValidity();
        return true; // unknown: assume valid if no API
      });
      expect(formValid).toBeFalsy();
    } else {
      // fallback: clicking button and assert no navigation
      const beforeUrl = page.url();
      await loginBtn.click();
      await page.waitForTimeout(500);
      expect(page.url()).toBe(beforeUrl);
    }

    // Now fill required fields and submit
    await name.fill('Alice Tester');
    await email.fill('test.user@example.com');
    // select gender if available
    const male = maleRadio(page);
    if (await male.isVisible()) await male.check();

    await loginBtn.click();
    // On the practice page the submit may not navigate; at least ensure no client-side validation errors
    const emailValid = await email.evaluate((el: HTMLInputElement) => {
      if (typeof el.checkValidity === 'function') return el.checkValidity();
      return /.+@.+\..+/.test(el.value);
    });
    expect(emailValid).toBeTruthy();
  });
});
