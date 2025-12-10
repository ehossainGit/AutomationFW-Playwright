import  { test, expect } from '@playwright/test';



  test('search items', async ({ page }) => {
    // Navigate to the Amazon app URL
    await page.goto('https://www.amazon.com');

// await page.pause();

// await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
// await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('laptop');

await page.getByLabel('Select the department you').selectOption('Books');
await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('automation');
// const text = await page.getByRole('button', { name: /automation/ }).textContent();
const text = await page.locator('//div[@aria-label="automation"]').textContent();

// const text = await page.getByRole('button', { name: 'laptop computer' }).textContent();
// const text1 = await page.getByRole('button', { name: 'laptop computer' }).getAttribute('aria-label');
console.log(text);
// console.log(text1);


});
