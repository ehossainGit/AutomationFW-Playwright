import {test, expect} from '@playwright/test';



test.describe('TSBasic', () => {
  test('should have a basic test', async ({  }) => {
    // reverseString();
    // console.log(sortStringWithoutSort("playwright")); // Output: "aghilprtyw"();
    searchChar();
  });
});

// This function reverses a given string by iterating through its characters
// and constructing a new string in reverse order.
function reverseString(): void {
    const s = "this is a test string";  
    const chars = s.split(''); // Convert string to array of characters
    let revStr = ""; // Initialize an empty string for the reversed string
    for (const c of chars) { // Iterate over each character
        revStr = c + revStr; // Prepend the character to the reversed string
    }
    console.log(revStr); // Output the reversed string
}


function sortString(str: string): string {
    return str.split('').sort().join('');
}

function sortStringWithoutSort(str: string): string {
    let chars = str.split('');
    let temp: string;
    for (let i = 0; i < chars.length; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            if (chars[i] > chars[j]) {
                temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }
    return chars.join('');
}

function searchChar():void {
    const chars = ['d', 'x', 'm', 'v'];
    let count = 0;
    for(const c of chars) {
        if(c==='v') {
            count++;
        }
    }
    console.log(count);
}
