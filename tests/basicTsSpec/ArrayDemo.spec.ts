import {test, expect} from '@playwright/test';

test.describe('For testing TS Basics', () => {

  test('should call Array methods', async ({  }) => {
    console.log('result: '+ declareArray());
    
  });


  //Local functions:
  function declareArray(): void {
    let numbers: number[] = [1, 2, 3, 4, 5];
    let fruits: Array<string> = ['apple', 'banana', 'cherry'];
    console.log('Numbers:', numbers);
    console.log('Fruits:', fruits);

    console.log('result:', fruits.length);

    //Using forEach to log each element
    console.log('result:', fruits.forEach(fruit => {
        console.log(fruit);
    }));
    // Using forEach with index
    console.log('result:', fruits.forEach((fruit, index) => {   
        console.log(`Fruit at index ${index}: ${fruit}`);
    }));

    // Using map to create a new array with uppercase fruit names
    console.log('result:', fruits.map(fruit => fruit.toUpperCase()));

    // Using filter to get fruits with names longer than 5 characters
    const filteredFruits = fruits.filter(fruit => fruit.length > 5);
    console.log('result:'+ filteredFruits);

    // Using reduce to concatenate all fruit names into a single string
    const concatenatedFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
    console.log('result:'+ concatenatedFruits);
    // Output: "apple, banana, cherry"

    // Using find to get the first fruit that starts with 'b'
    const foundFruit = fruits.find(fruit => fruit.startsWith('b'));
    console.log('result:'+ foundFruit); // Output: "banana"

    // reverser numbers array
    const reversedNumbers = numbers.reverse();
    console.log('result:'+ reversedNumbers); // Output: [5, 4, 3, 2, 1]

  }

});
