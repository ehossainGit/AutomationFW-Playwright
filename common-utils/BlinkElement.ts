

import { Page, Locator, expect } from '@playwright/test';
export class BlinkElement {

     // Utility function to highlight an element
    public static async highlightElement(page: Page, locator: Locator, times: number = 3): Promise<void> {
        await expect(locator).toBeVisible();
        
        const handle = await locator.elementHandle();
        if (handle) {
            for (let i = 0; i < times; i++) {
                await page.evaluate((el) => {
                    el.setAttribute('data-prev-boxshadow', el.style.boxShadow || '');
                    el.style.boxShadow = '0 0 0 4px red';
                }, handle);
                await page.waitForTimeout(250);
                await page.evaluate((el) => {
                    el.style.boxShadow = el.getAttribute('data-prev-boxshadow') || '';
                    el.removeAttribute('data-prev-boxshadow');
                }, handle);
                await page.waitForTimeout(300);
            }
        }
    }
}


