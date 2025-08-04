
import { faker } from '@faker-js/faker/locale/en';
import { format, compareAsc } from "date-fns";
import { test, expect } from '@playwright/test';
import { DateUtil } from '../../common-utils/Util';
import * as fs from 'fs';

//ref: https://date-fns.org/docs/Getting-Started#installation
test('verify timestamp string', async () => {

    const dateUtil: DateUtil = new DateUtil(new Date());
    console.log(`Timestamp String: ${dateUtil.getTimeStamp()}`)

});

test('verify DateUtil functions', async () => {
    const now: Date = new Date();
    const dateUtil: DateUtil = new DateUtil(now);
    console.log(`Year in YYYY format: ${dateUtil.getYYYY()}`)
});

//ref: https://playwrightsolutions.com/how-to-quickly-get-realistic-data-with-faker-for-playwright-tests/
test('verify faker', async () => {
    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    console.log(`${randomName}-${randomEmail}`)
});






test('verify write data', async () => {
    // const testData = JSON.parse(JSON.stringify(require('../data/dataInKeyValPairForSave.json')));
    // testData.ueserIdEmail = "my data";

    // const jsonString = JSON.stringify(testData, null, 2);


  


 
//fs.readFileSync('/path-to-file', 'utf-8');
  // console.log("Start Write")

//   fs.writeFileSync('./data/testDataForWrite.json', jsonString, {
//   flag: "w"
//   })
  // console.log("End Write")


  //console.log('test env: ' + testData.testEnvName);
  // console.log('test url: ' + testData.url);

});


test('verify  demo', async () => {
  // const fruits = ["Apple", "Orange", "Mango"];
  // console.log('test result: ' + fruits[0]);

  const cars = [{"model": "Lexus", "year": "2000", "price": 20000}, {"model": "Honda", "year": "2001", "price": 15000}];
  console.log('test resut: ' + cars.length);
  console.log('test resut: ' + cars[0].model);

  const sum = (a: number, b:number) => {
     return a+b;
  };
  console.log('test resut: ' + sum(5, 6));

  const myStr = "Hello World";
  console.log('test resut: ' + myStr.indexOf("World"));
  console.log('test resut: ' + myStr.split(" ")[1]);

});