import {test, expect} from '@playwright/test';



test.describe('For testing TS Basics', () => {

  test('should call Array methods', async ({  }) => {
    // console.log('result: '+ declareArray());
  //  console.log( reverseArr2());
    // const reversedArr = (arr: String[]) => [...arr].reverse();
    // console.log( reversedArr(['apple', 'banana', 'cherry'] ));
    // console.log( revesredStr('apple' ));
    // console.log((() => 'apple'.split('').reverse().join())());
    const arr: Array<string> = ['apple','banana', 'cherry'];
    Array.from(arr, (e) => {console.log(e);});
  });


  //Local functions:
  // const reversedArr = (arr: String[]) => [...arr].reverse();
  const reverseArr2 = () => {
    const fruits: Array<string> = ['apple', 'banana', 'cherry'];
    const reversedFruits = fruits.reverse();
    return reversedFruits;
  }

  const revesredStr = (str: string) => str.split('').reverse().join('');



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
//filter
  function filterArray(arr: number[]): number[] {
    return arr.filter(num => num > 0);
  }
  
  function filterSpecialChars(inputString: string): string {
    // The regular expression /[^a-zA-Z0-9\s]/g matches any character
    // that is NOT (indicated by ^ inside the brackets) a letter (a-zA-Z),
    // a number (0-9), or a whitespace character (\s).
    // The 'g' flag ensures that all occurrences are replaced, not just the first.
    return inputString.replace(/[^a-zA-Z0-9\s]/g, '');
  }

  // const originalString = "Hello, World! 123 @#$%";
  // const filteredString = filterSpecialChars(originalString);
  // console.log(filteredString); // Output: Hello World 123

});
