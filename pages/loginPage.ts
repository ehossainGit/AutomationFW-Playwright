import { test, expect, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    constructor(page) {
      this.page = page;
      
    }
   

    async login(user, password) {
        await this.page.getByRole('textbox', { name: 'Login' }).click();
        await this.page.getByRole('textbox', { name: 'Login' }).fill(user);

        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    
}