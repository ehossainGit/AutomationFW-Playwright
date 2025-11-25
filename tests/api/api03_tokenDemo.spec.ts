import { test, expect } from '@playwright/test';

let authToken: string; // Declare a variable to store the token

test.beforeAll(async ({ request }) => {
  const response = await request.post('https://your-api.com/auth/login', {
    data: {
      username: 'your_username',
      password: 'your_password',
    },
  });
  expect(response.ok()).toBeTruthy();
  const jsonResponse = await response.json();
  authToken = jsonResponse.token; // Assuming the token is in 'token' field
});

test('should access protected resource', async ({ request }) => {
  const response = await request.get('https://your-api.com/protected-resource', {
    headers: {
      'Authorization': `Bearer ${authToken}`, // Use the obtained token
    },
  });
  expect(response.ok()).toBeTruthy();
  // Assert response data as needed
});