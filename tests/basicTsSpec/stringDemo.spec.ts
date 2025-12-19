import {test, expect} from '@playwright/test';
import { de } from 'date-fns/locale';

test.describe("String Manipulation Demo", () => {
    test("should demonstrate basic string operations", async () => {
        const originalString = "  Hello, Playwright!  ";
        // Trim whitespace
        const trimmedString = originalString.trim();
        expect(trimmedString).toBe("Hello, Playwright!");
        // Convert to uppercase
        const upperString = trimmedString.toUpperCase();
        expect(upperString).toBe("HELLO, PLAYWRIGHT!");
        // Replace substring
        const replacedString = upperString.replace("PLAYWRIGHT", "WORLD");
        expect(replacedString).toBe("HELLO, WORLD!");
        // Split string
        const splitArray = replacedString.split(", ");
        expect(splitArray).toEqual(["HELLO", "WORLD!"]);
        // Check length
        expect(replacedString.length).toBe(13);
    });
    test("replace demo", async () => {
        let str = "Hello, world! 123_$";
        let result = str.replace(/[\W_]/g, ''); //\W matches any non-word character, _ is included in the regex pattern
        //\w vs \W: \w matches any word character (alphanumeric and underscore such as a-z0-9), \W matches any non-word character
        //g flag is used to replace all occurrences, not just the first one

        console.log(result);
        // Output: "Helloworld123"

    });
});

//local functions:
//write a function demo Array<string>
function demoStringArray(): string[] {
    const stringArray: string[] = ["apple", "banana", "cherry"];
    return stringArray;
}



//convert string to array of characters
function stringToCharArray(str: string): string[] {
    return str.split('');
}
//convert array of characters back to string
function charArrayToString(arr: string[]): string {
    return arr.join('');
}
//reverse a string
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
//check if a string is a palindrome
function isPalindrome(str: string): boolean {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
// Example usage of local functions
const sampleString = "Racecar";
const charArray = stringToCharArray(sampleString);
const reconstructedString = charArrayToString(charArray);
const reversed = reverseString(sampleString);
const palindromeCheck = isPalindrome(sampleString);
console.log(`Original: ${sampleString}`);
console.log(`Char Array: ${charArray}`);
console.log(`Reconstructed: ${reconstructedString}`);
console.log(`Reversed: ${reversed}`);
console.log(`Is Palindrome: ${palindromeCheck}`);

