/** Open the App */
import { test, expect } from '@playwright/test';
const testData = JSON.parse(JSON.stringify(require('../../dataProfile/profile-default.json')));


test('Verify Open App', async ({ page }) => {

  await page.goto(testData.url);

});