import { test, expect } from '@playwright/test';
const testData = JSON.parse(JSON.stringify(require('../../data/dataInRowForDataDrivenTest.json')));

  interface dataArray {
    firstName:string;
    lastName:string;
    dob:string;
    addressline1:string;
    city:string;
    state:string;
    zip5:string;
    user:string;
    password:string;
  }

  //const list = testData.keys();

  test('test', async ({ page }) => {
    testData.forEach((dataArray, rowIndex) => {

      //console.log(`Row# ${rowIndex}: ${JSON.stringify(dataArray)}`);//replace this statement with actions
      
      console.log(`Row# ${rowIndex}: ${JSON.stringify(dataArray.firstName)} - ${JSON.stringify(dataArray.lastName)}`);//replace this statement with actions
      
      
      
    });


  });