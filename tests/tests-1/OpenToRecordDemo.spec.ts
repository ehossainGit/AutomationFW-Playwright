/** Open the App */
import { test, expect } from '@playwright/test';


test('open app', async ({ page }) => {

  await page.goto("https://www.amazon.com/");

  const title = await page.title();
  console.log(`Page title is: ${title}`);
  expect(title).toBe('Example Domain');

  // await page.getByRole('link', { name: 'Amazon Basics', exact: true }).click();
  // await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  // await page.getByRole('textbox', { name: 'Email or mobile phone number' }).fill('test');
  // await page.getByRole('button', { name: 'Continue' }).click();
  // await page.getByRole('textbox', { name: 'Email or mobile phone number' }).fill('test1234');
  // await page.getByRole('button', { name: 'Continue' }).click();
  // await page.getByRole('link', { name: 'Create your Amazon account' }).click();
  // await page.getByRole('textbox', { name: 'Mobile number or email' }).click();
  // await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('test');
  // await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  // await page.getByRole('button', { name: 'Continue Verify mobile number' }).click();

  // await page.waitForTimeout(6000);

  //await expect(page.getByRole('button', { name: 'Continue Verify mobile number' })).toHaveText('Submitted');


//   const texts = await page.locator('//*[@id="auth-continue-announce"]/span[3]');
//   console.log("---> "+texts.textContent);
//   //await expect(page.locator('//*[@id="auth-customerName-missing-alert"]/div/div')).toHaveText('Submitted');
// await page.getByRole('button', { name: 'Continue Verify mobile number' }).click({
//     button: 'right'
//   });
// await expect(page.getByRole('button', { name: 'Continue Verify mobile number' })).toBeVisible();

// await page.getByRole('button', { name: 'Continue Verify mobile number' }).click();

// await expect(page.getByRole('button', { name: 'Continue Verify mobile number' })).toBeVisible();


// await expect(page.locator('#auth-email-invalid-claim-alert')).toContainText('Wrong or Invalid email address or mobile phone number. Please correct and try again.');
// await expect(page.getByRole('textbox', { name: 'Your name' })).toBeEmpty();
// await expect(page.locator('#ap_register_form')).toMatchAriaSnapshot(`
//     - text: Password
//     - textbox "Password"
//     - alert: Minimum 6 characters required
//     `);

//    const element = await page.getByRole('link', { name: 'Trending Easter treats Teen' });
//    const txt= element.textContent();
// console.log(txt);
  //await expect(getByRole('link', { name: 'Trending Easter treats Teen' })).

});