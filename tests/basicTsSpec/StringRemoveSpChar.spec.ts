import {test, expect} from "@playwright/test";

test.describe('Array - replace special characters from strings', () => {
    test('should replace special characters in array of strings', async () => {
        const originalString = "Hello, World! 123 @#$%";
        const filteredString = filterSpecialChars(originalString);
        console.log(filteredString); // Output: Hello World 123
        expect(filteredString).toBe("Hello World 123");

    });
});

//Local functions:
function filterSpecialChars(inputString: string): string {
    // The regular expression /[^a-zA-Z0-9\s]/g matches any character
    // that is NOT (indicated by ^ inside the brackets) a letter (a-zA-Z),
    // a number (0-9), or a whitespace character (\s).
    // The 'g' flag ensures that all occurrences are replaced, not just the first.
    return inputString.replace(/[^a-zA-Z0-9\s]/g, '');
}