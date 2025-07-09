import { test, expect}   from "playwright/test";

import { LoginPage } from "../../pages-OrangeHR/LoginPage";


test.describe("OrangeHR Login Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  test("Login with valid credentials", async ({ page }) => {
    await loginPage.login("Admin", "admin123");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test("Login with invalid credentials", async ({ page }) => {
    await loginPage.login("InvalidUser", "InvalidPassword");
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});
