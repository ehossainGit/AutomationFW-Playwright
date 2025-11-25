import { test, expect } from '@playwright/test';

test.describe('User Management', () => {
  let userId: string; // Store the created user's ID

  test('Create user via API and verify in browser', async ({ request, page }) => {
    // 1. Create User via API
    const createUserResponse = await request.post('/api/users', {
      data: {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      },
    });

    expect(createUserResponse.ok()).toBeTruthy(); // Assert API call success
    const userData = await createUserResponse.json();
    userId = userData.id; // Assuming your API returns the user ID

    // 2. Navigate to the user list/profile page in the browser
    await page.goto('/users'); // Replace with your actual user list URL

    // 3. Verify user in browser UI
    await expect(page.locator(`text=${userData.username}`)).toBeVisible();
    await expect(page.locator(`text=${userData.email}`)).toBeVisible();
  });

  // Optional: Clean up the created user after the test
  test.afterEach(async ({ request }) => {
    if (userId) {
      await request.delete(`/api/users/${userId}`);
    }
  });
});