import { test, expect, type Page } from '@playwright/test';


export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async openApp(url:string) {
       await this.page.goto(url);
    }
}