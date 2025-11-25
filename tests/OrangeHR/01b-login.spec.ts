import { test, expect, Browser, BrowserContext, chromium}   from "playwright/test";

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
    await page.context().storageState({path: 'storageStates/orangehrm-admin.json' });

  });

  test("Login with invalid credentials", async ({ page }) => {
    await loginPage.login("InvalidUser", "InvalidPassword");
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  //login using storage state//no credentials provided in the test
  test("Login using storage state", async () => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext({ storageState: 'storageStates/orangehrm-admin.json' });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await browser.close();
  });
  
});
