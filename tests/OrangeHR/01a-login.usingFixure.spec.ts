import { test, expect } from '../../fixures/myFixures';


test.describe("OrangeHR Login Tests", () => {


  test("Login with valid credentials", async ({ page, loginPage }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await loginPage.login("Admin", "admin123");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test("Login with invalid credentials", async ({ page, homePage }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await homePage.openApp("InvalidUser");
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});
