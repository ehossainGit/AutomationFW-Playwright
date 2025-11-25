import {test, expect} from "@playwright/test";
import * as fs from "fs";
import * as path from 'path';

interface MyData {
    testEnvName: string;
    url: string;
    user: string;
    password: string;
}

// Resolve path relative to the repository root (process.cwd()) so runtime can find the file
const filePath: string = path.join(process.cwd(), 'data', 'profile-admin.json'); // Path to your JSON file
test.describe("Read JSON file in Deno environment", () => {
    test("should read and parse JSON file correctly", async () => {
        try {
            const jsonString = await fs.promises.readFile(filePath, 'utf8');
            const data: MyData = JSON.parse(jsonString);
            console.log('JSON data:', data);
            // Print each property value explicitly for clarity
            console.log(`testEnvName: ${data.testEnvName}`);
            console.log(`url: ${data.url}`);
            console.log(`user: ${data.user}`);
            console.log(`password: ${data.password}`);
            // You can now work with the 'data' object in assertions
            expect(data).toBeTruthy();
            // Verify all expected properties exist and are non-empty strings
            expect(typeof data.testEnvName).toBe('string');
            expect((data.testEnvName as string).length).toBeGreaterThan(0);
            expect(typeof data.url).toBe('string');
            expect((data.url as string).length).toBeGreaterThan(0);
            expect(typeof data.user).toBe('string');
            expect((data.user as string).length).toBeGreaterThan(0);
            expect(typeof data.password).toBe('string');
            expect((data.password as string).length).toBeGreaterThan(0);
        } catch (err) {
            console.error('Error reading or parsing JSON file:', err);
            throw err;
        }
    });
});


