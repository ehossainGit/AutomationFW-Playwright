import { test, expect } from '../../fixures/myFixures';


test.describe("OrangeHR Login Tests", () => {


  test("Login with valid credentials", async ({ page, loginPage }) => {

    // Open the application and perform login
    await loginPage.openApplication("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await loginPage.login("Admin", "admin123");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test("Login with invalid credentials", async ({ page, homePage }) => {
    await homePage.openApplication("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await homePage.login("Admin", "invalidPassword");
    await expect(page.getByText('Invalid credentials')).toBeVisible();
    const invalidMsg: string|null = await page.getByText('Invalid credentials').textContent();
    console.log(`Invalid credentials message: ${invalidMsg}`);
   
  });
});
