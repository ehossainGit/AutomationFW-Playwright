import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../pages-OrangeHR/LoginPage';
import {HomePage} from '../pages-OrangeHR/homePage.ts';

// This file contains Playwright fixtures for testing purposes
// You can define custom fixtures here that can be used in your tests
// Example fixture that provides some test data

type MyFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    // Add more fixtures as needed
    };


export const test = baseTest.extend<MyFixture>({
  loginPage: async ({page}, use) => {
    // Setup code for the fixture
    const loginPage = new LoginPage(page);
    await use(loginPage);
    // Teardown code for the fixture (if needed)
    },
  homePage: async ({page}, use) => {
    // Setup code for the fixture
    const homePage = new HomePage(page);
    await use(homePage);
    // Teardown code for the fixture (if needed)
    },

});

// Export the test and expect objects for use in tests
export {expect} from '@playwright/test';



