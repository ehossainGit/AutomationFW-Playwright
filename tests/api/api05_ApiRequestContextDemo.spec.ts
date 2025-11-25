import {test, expect, APIRequestContext} from '@playwright/test';

let _requestContext: APIRequestContext;
test.beforeAll(async ({ playwright }) => {
    // You can set up any global configuration or variables here if needed
    _requestContext = await playwright.request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: { 
            'Content-Type': 'application/json',
        },
    });

});


test.describe('API05 Demo - ApiRequestContext', () => { 
    test('should fetch user data from API using ApiRequestContext', async ({}) => {
        
        const data = { username: "admin", password: "password123" };

        const loginResponse = await _requestContext.post("/auth", { data });
        expect(loginResponse.ok()).toBeTruthy();
        expect(loginResponse.status()).toBe(200);
        const loginResponseString = await loginResponse.text();
        const loginResponseBody = await loginResponse.json();
        console.log("Response Body Text: "+ loginResponseString.toString());
        console.log("Response Body JSON: "+ loginResponseBody);
        const _token = loginResponseBody.token;
        console.log("Token: "+ _token);

    });

    //use token from previous test to access protected resource
    test('should access protected resource using ApiRequestContext', async ({}) => {
        const data = { username: "admin", password: "password123" };

        const loginResponse = await _requestContext.post("/auth", { data });
        expect(loginResponse.ok()).toBeTruthy();
        expect(loginResponse.status()).toBe(200);
        const loginResponseBody = await loginResponse.json();
        const token = loginResponseBody.token;
        console.log("Token: "+ token);

        const protectedResponse = await _requestContext.get("/booking/1", {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        expect(protectedResponse.ok()).toBeTruthy();
        expect(protectedResponse.status()).toBe(200);
        const protectedResponseBody = await protectedResponse.json();
        console.log("Protected Resource Response Body: "+ protectedResponseBody);
        const protectedResponseText = await protectedResponse.text();
        console.log("Protected Resource Response Text: "+ protectedResponseText);
    });

    //use token to post a new booking
    test('should create a new booking using ApiRequestContext', async ({}) => {
        // Reuse token from previous test in authentication header
        const data = { username: "admin", password: "password123" };
        const loginResponse = await _requestContext.post("/auth", { data });
        expect(loginResponse.ok()).toBeTruthy();
        expect(loginResponse.status()).toBe(200);
        const loginResponseBody = await loginResponse.json();
        const token = loginResponseBody.token;
        console.log("Token: "+ token);
        



        const bookingData = {   
            firstname: "Jim",
            lastname: "Brown",
            totalprice: 111,    
            depositpaid: true,    
            bookingdates: {        
                checkin: "2018-01-01",  
                checkout: "2019-01-01"    
            },    
            additionalneeds: "Breakfast" 
        };
        const createBookingResponse = await _requestContext.post("/booking", { data: bookingData });
        expect(createBookingResponse.ok()).toBeTruthy();
        expect(createBookingResponse.status()).toBe(200);
        const createBookingResponseBody = await createBookingResponse.json();
        console.log("Create Booking Response Body: "+ createBookingResponseBody);
    });



    //cleanup after all tests
    test.afterAll(async () => {
        await _requestContext.dispose();
    });

});
