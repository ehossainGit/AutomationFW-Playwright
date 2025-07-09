import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('ToDo App', () => {
  test('should add a new todo item', async ({ page }) => {


  await expect(page.getByRole('link', { name: 'real TodoMVC app.' })).toBeVisible();
    await page.getByRole('link', { name: 'real TodoMVC app.' }).click();
    const text = await page.getByRole('banner').locator('div').filter({ hasText: 'Helping you select an MV*' }).getByRole('img').getAttribute('alt');
    console.log(text); // Should log "TodoMVC logo"

  });

  test('should add a new todo item2', async ({ page }) => {

    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Buy groceries');
    await todoInput.press('Enter');

    const todoList = page.locator('.todo-list li');
    await expect(todoList).toHaveCount(1);
    await expect(todoList.first()).toHaveText('Buy groceries');
  });

});

test.afterEach(async ({ page }) => {
  await page.close();
});

