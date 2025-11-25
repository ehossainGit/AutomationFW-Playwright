import { test, expect } from '@playwright/test';

test('should wait for a specific API response after an action', async ({ page }) => {
  await page.goto('https://example.com/your-app'); // Replace with your application's URL

  // 1. Create a Promise to wait for the specific response *before* triggering the action.
  // This ensures Playwright is listening for the response when the request is sent.
    const responsePromise = page.waitForResponse(response =>
        response.url().includes('/api/save-data') && response.status() === 200
    );

  // 2. Perform the action that triggers the network request.
  await page.click('#save-button'); // Replace with the selector for your button

  // 3. Await the Promise to ensure the test continues only after the response is validated.
  const response = await responsePromise;

  // 4. Assertions on the response (optional, but common for validation).
  const responseBody = await response.json();
  expect(responseBody.message).toBe('Data saved successfully');


    /*Explanation:
        page.waitForResponse(predicate): 
        This method takes a predicate function as an argument. This function receives
         a Response object and should return true if the response matches your criteria,
          or false otherwise. In the example, 
          we check if the response URL includes /api/save-data and if the HTTP status code is 200.
        
       --pedicate means a function that tests a condition and returns true/false.
        
        Order of Operations:
        It is crucial to set up the waitForResponse listener before the action that triggers
         the network request. If you reverse this order,
          Playwright might miss the response, leading to flaky tests. 

        await responsePromise:
        This line pauses the test execution until a response matching the predicate is received.
        
        Assertions:
        After receiving the response, you can perform assertions on its properties
         (e.g., status, headers, body) to ensure the API call behaved as expected. 

        This pattern provides robust synchronization in your Playwright tests when dealing with asynchronous network requests.
     */

});

