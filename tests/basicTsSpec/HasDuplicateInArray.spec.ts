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

function hasDuplicates(arr:number[]):boolean {
  return new Set(arr).size !== arr.length;
}

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



