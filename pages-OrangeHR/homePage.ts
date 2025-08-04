import { test, expect, type Page } from '@playwright/test';


export class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }
    
    async openApplication(url:string) {
       await this.page.goto(url);
    }

    async login(user, password) {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill(user);

        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}