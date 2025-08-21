import {test, expect} from '@playwright/test';

test.describe('API01 Demo', () => {

    //ref: https://youtu.be/2poXBtifpzA?si=Y777bB8XtjGVXCVU
    test('should fetch user data from API', async ({request}) => {
      const response = await request.get('https://restful-booker.herokuapp.com/booking');
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      const body = await response.text();
      console.log('Response Body:', body);

      const responseJson = await response.json();
      console.log(responseJson);

      console.log(responseJson.length, 'bookings found');

      console.log('bookings id1', responseJson[0].bookingid);
    });
    

});