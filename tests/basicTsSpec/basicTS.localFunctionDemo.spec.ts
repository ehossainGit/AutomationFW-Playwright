import {test, expect} from '@playwright/test';



test.describe('For testing TS Basics', () => {
  test('should have a basic test', async ({  }) => {
    console.log('result: '+ reverseString('this is a test string'));
    // console.log(sortStringWithoutSort("playwright")); // Output: "aghilprtyw"();
    // console.log(searchChar('unknown', ['d', 'x', 'm', 'v']));
  });
});


function reverseString(str:string): string {
    const chars = str.split('');
    let revStr = "";
    for (const c of chars) {
        revStr = c + revStr;
    }
    return revStr;
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

function searchChar(key:string, arr:string[]):string {
    let count = 0;
    for(const c of arr) {
        if(c === key) {
            count++;
        }
    }
    return count > 0 ? `${key} found` : `${key} not found`;
}
