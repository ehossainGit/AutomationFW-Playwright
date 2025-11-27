import {test, expect} from '@playwright/test';

test('my demo test', async ({page}) => {   
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
    console.log('Title of the page is:', title);
    await page.screenshot({path: 'example.png'});
    console.log('Screenshot taken and saved as example.png');
});

test('Screenshot for element', async ({page}) => {   
    await page.goto('https://example.com');

    const element = page.getByText('This domain is for use in');

    element.textContent().then(text => console.log('Element text content:', text));

    await element.screenshot({path: 'element-screenshot.png'});

});

// //experiments
// type Person = {
//     name: string;
//     age: number;
// }   

// function tbd() {
//     const arr: string[] = ['x','y'];
//     const obj: {p1: string, p2: number} = {p1: 'testval', p2: 34};

//     arr.forEach((val, index) => {
//         console.log(`Index: ${index}, Value: ${val}`);
//     });

//     // for (const key in obj) {
//     //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//     //         const value = (obj as any)[key];
//     //         console.log(`Key: ${key}, Value: ${value}`);
//     //     }
//     // }
//     console.log('Object properties:${obj.p1} and ${obj.p2}');
  
//   const person: Person = {name: 'Alice', age: 30};
//   console.log(`Person Name: ${person.name}, Age: ${person.age}`);   


// }

