import { test, expect, type Page } from '@playwright/test';


export class HomePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async openApplication(url:string) {
       await this.page.goto(url);
    }

    async login(user: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill(user);

        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}