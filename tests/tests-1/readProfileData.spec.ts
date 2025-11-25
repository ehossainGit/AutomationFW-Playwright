import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const filePath: string = path.join(process.cwd(), 'data', 'profile-default.json');
const testData= JSON.parse(fs.readFileSync(filePath, 'utf-8'));

test('test', async ({  }) => {

  console.log('test env: ' + testData.testEnvName);
  console.log('test url: ' + testData.url);

});