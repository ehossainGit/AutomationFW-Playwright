import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// import testData from '../../data/dataInRowForDataDrivenTest.json';


test.describe('Data Driven Test Suite', () => { 

  interface MyData {
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

let data: MyData[] = [];

 const filePath: string = path.join(process.cwd(), 'data', 'dataInRowForDataDrivenTest.json'); // Path to your JSON file

  fs.readFile(filePath, 'utf8', (err, jsonString): MyData => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    try {
      data = JSON.parse(jsonString);
      console.log('JSON data:', data);
      // You can now work with the 'data' object
      // return data;
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });


  // const list = data.keys();

  test('test', async ({  }) => {
    console.log('Array size: '+ data.length);

    data.forEach((dataArray, rowIndex) => {
      console.log(`Row# ${rowIndex}: ${JSON.stringify(dataArray.firstName)} - ${JSON.stringify(dataArray.lastName)}`);//replace this statement with actions
    });

  });



});