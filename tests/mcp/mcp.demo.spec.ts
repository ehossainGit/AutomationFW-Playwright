/**
 * mcp demo spec:
 * Prommt:
 * write a test for API test
 * where url: https://conduit-api.bondaracademy.com/api/tags
 * 
 */
import { test, expect } from '@playwright/test';

test.describe('Tags API', () => {
  const apiUrl = 'https://conduit-api.bondaracademy.com/api/tags';

  test('should return tags array and status 200', async ({ request }) => {
    const response = await request.get(apiUrl);

    // Validate response status
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    // Validate response JSON structure
    const responseJson = await response.json();
    expect(responseJson).toHaveProperty('tags');
    expect(Array.isArray(responseJson.tags)).toBe(true);

    // Optionally, check for a specific tag
    // expect(responseJson.tags).toContain('Test');

    // Log the tags for debugging
    console.log('Tags:', responseJson.tags);
  });
});
