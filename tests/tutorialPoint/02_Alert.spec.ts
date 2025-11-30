    import { test, expect, Page } from '@playwright/test';

    test('should handle a simple alert', async ({ page }) => {
      // Set up the dialog listener BEFORE triggering the alert
      page.on('dialog', async dialog => {
        // Assert the dialog type and message
        // expect(dialog.type()).toBe('alert');
        // expect(dialog.message()).toContain('I am an alert box!');

        // Accept the alert (simulates clicking 'OK')
        await dialog.accept();
      });

      // Navigate to a page that triggers an alert
      await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php'); // Replace with your actual URL

      await page.getByRole('link', { name: 'Alerts' }).click();

      expect( page.getByRole('button', { name: 'Click Me' }).first()).toBeVisible();
      await page.getByRole('button', { name: 'Click Me' }).first()

      // Click the button that triggers the alert
    //   await page.click('#alertButton'); // Replace with your actual selector

    // page.close();

    });



