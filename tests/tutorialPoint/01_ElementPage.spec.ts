import {test, expect} from '@playwright/test';
// import { Page, Locator } from '@playwright/test';
import { BlinkElement } from '../../common-utils/BlinkElement';
const url = 'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php';

test.describe('TutorialsPoint Element Page - Basic presence checks', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(url);
        await page.waitForLoadState('domcontentloaded');
    });

    test('Name field is visible and enabled', async ({page}) => {
        //if text box link is not visible, click elements first
        if(await page.getByRole('link', { name: 'Text Box' }).isVisible()){
            await page.getByRole('link', { name: 'Text Box' }).click();
        }else{
            await page.getByRole('button', { name: 'Elements' }).click();
            await page.getByRole('link', { name: 'Text Box' }).click();
        }
        const textBoxLocator = page.getByRole('link', { name: 'Text Box' });
        // await highlightElement(page, textBoxLocator);
        await BlinkElement.highlightElement(page, textBoxLocator);
        const textBoxHeadingLocator = page.getByRole('heading', { name: 'Text Box' });
        await BlinkElement.highlightElement(page, textBoxHeadingLocator);

    });
});


test.describe('TutorialsPoint Element Page - Basic presence checks', () => {


    test('Email field is visible and enabled', async ({page}) => {
        const email = page.locator('input[type="email"], input[name*="email"], input#email').first();
        await expect(email).toBeVisible();
        await expect(email).toBeEnabled();
    });
    test('Login button is visible and enabled', async ({page}) => {
        const login = page.getByRole('button', {name: /login|submit|sign in/i });
        await expect(login).toBeVisible();
        await expect(login).toBeEnabled();
    });
    test('  Gender radio buttons are visible', async ({page}) => {
        const   male = page.getByRole('radio', {name: /male/i });
        const female = page.getByRole('radio', {name: /female/i });
        await expect(male).toBeVisible();
        await expect(female).toBeVisible();
    });

});


