import {test, expect} from '@playwright/test';

test.describe('API01 Demo', () => {

    //ref: https://youtu.be/P4Hswlt-KrI?si=Agf1mgOdOsvfhUjW
    test('should fetch user data from API', async ({request}) => {
      const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
      expect(response.ok()).toBeTruthy();
      const responseJson = await response.json();
      expect(responseJson).toHaveProperty('tags');
      expect(responseJson.tags[0]).toBe('Test');

      expect(response.status()).toBe(200);
      const body = await response.text();
      console.log('Response Body:', body);
      console.log(responseJson);
    });
    
    test('should fetch user data from API2', async ({request}) => {
   
      const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
      expect(response.ok()).toBeTruthy();
      const responseJson = await response.json();
      expect(responseJson).toHaveProperty('tags');
      expect(responseJson.tags[0]).toBe('Test');

      expect(response.status()).toBe(200);
      const body = await response.text();
      console.log('Response Body:', body);
      console.log(responseJson);
    });
});