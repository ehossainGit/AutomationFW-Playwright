import {test, expect} from '@playwright/test';

test('my demo test', async ({page}) => {   
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
    console.log('Title of the page is:', title);
    await page.screenshot({path: 'example.png'});
    console.log('Screenshot taken and saved as example.png');
});