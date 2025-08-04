import { test, expect } from '@playwright/test';


const testData = JSON.parse(JSON.stringify(require('../../data/profile-default.json')));

test('test', async ({ page }) => {

  console.log('test env: ' + testData.testEnvName);
  console.log('test url: ' + testData.url);

});