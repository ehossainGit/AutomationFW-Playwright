import {test, expect} from '@playwright/test';

test('Check for duplicates in an array', async () => {
    const arrayWithDuplicates = [1, 2, 2, 3];
    const arrayWithoutDuplicates = [1, 2, 3];
    console.log(hasDuplicates(arrayWithDuplicates)); // true
    console.log(hasDuplicates(arrayWithoutDuplicates)); // false
});

test('Find all duplicates in an array', async () => {
    const arrayWithDuplicates = [1, 2, 2, 3, 3, 4];
    const arrayWithoutDuplicates = [1, 2, 3, 4];
    console.log(findDuplicates(arrayWithDuplicates)); // [2, 3]
    console.log(findDuplicates(arrayWithoutDuplicates)); // []
});

test('countDuplicates demo', async () => {
    countDuplicates();
});




function hasDuplicates(arr:number[]):boolean {
  return new Set(arr).size !== arr.length;
}

// Define an interface for the accumulator object for better type safety
interface FruitCounts {
  [key: string]: number;//this is also known as Index Signature. see also concept of Record<string, number>
}
function countDuplicates():void {
  const fruits = ['apple', 'banana', 'apple'];

  const fruitCounts = fruits.reduce((accumulator: FruitCounts, currentValue: string) => {
    // If the fruit already exists in the accumulator, increment its count.
    // Otherwise, initialize its count to 1.
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  }, {});
  console.log(fruitCounts);
}

// console.log(fruitCounts);
// // Expected output: { apple: 2, banana: 1 }
//   // const seen = new Set<number>();
//   // let duplicateCount = 0;
//   // for (const num of arr) {
//   //   if (seen.has(num)) {
//   //     duplicateCount++;
//   //   } else {
//   //     seen.add(num);
//   //   }
//   // }
//   // return duplicateCount;
// }

function findDuplicates(arr:number[]):number[] {
  const seen = new Set<number>();
  const duplicates = new Set<number>();
  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(duplicates);
}



