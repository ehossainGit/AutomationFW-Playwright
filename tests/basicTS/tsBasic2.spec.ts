import {test, expect} from '@playwright/test';



test('test1', async ( {}, testInfo) => {

    console.log("result: " + testInfo.title);
    console.log(greeting(testInfo.title, "test2"));
    console.log("sum: " + sum(5, 6));
});

test('test', async () => {
  const myArray = [1, 2, 3, 4, 5];
  myArray.push(6);
  const firstElement = myArray.shift();
  const doubledArray = myArray.map(num => num * 2);
  const evenNumbers = myArray.filter(num => num % 2 === 0);
  const sum = myArray.reduce((acc, num) => acc + num, 0);
  console.log ('Original array (after shift):', myArray);
  console.log ('Removed first element:', firstElement);
  console.log ('Doubled:', doubledArray);
  console.log ('Even numbers:', evenNumbers);
  console.log ('Sum:', sum);
});

//local functions:
function greeting(a: string, b: string): string {
    return "Hello " + a + ", " + b;
}

function sum(a: number, b: number): number {
    return a + b;
}