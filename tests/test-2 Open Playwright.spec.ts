import { test, expect } from '@playwright/test';
// import{ BrowserServer } from '@playwright/test';
// import { BrowserContext } from '@playwright/test';


// test('t1', async ({ page }) => {


//   const browserServer = await page.context().browser().newBrowserServer();
//   const browserContext = await browserServer.newContext();
//   const newPage = await browserContext.newPage();

//   await newPage.goto('https://playwright.dev/dotnet/docs/intro');
  
//   // Perform actions on the new page
//   // await newPage.getByRole('link', { name: 'Test generator Playwright' }).click();
//   // await newPage.getByRole('heading', { name: 'Generate tests in VS' }).click();
//   // await expect(newPage.getByRole('heading', { name: 'Generate tests in VS' })).toBeVisible();
//   // await expect(newPage.getByRole('main')).toContainText('VS Code Marketplace');
//   // await expect(newPage.getByRole('main')).toContainText('getting started with VS Code');

//   // Close the new page
//   await newPage.close();

//   // Close the browser context
//   await browserContext.close();   
// });


test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page).toHaveTitle(/Playwright/);///Playwright/

  console.log('Page title is:', await page.title());
  expect.soft(page.url()).toContain('playwright.dev/docs/intro');


  await expect(page.locator('#installing-playwright')).toContainText('Installing Playwright');


  // await browserServer.close();
  
  // await page.getByRole('link', { name: 'Test generator Playwright' }).click();
  // await page.getByRole('heading', { name: 'Generate tests in VS' }).click();
  // await expect(page.getByRole('heading', { name: 'Generate tests in VS' })).toBeVisible();
  // await expect(page.getByRole('main')).toContainText('VS Code Marketplace');
  // await expect(page.getByRole('main')).toContainText('getting started with VS Code');
  
  
  // await page.close()

  // await browserContext.close();
});