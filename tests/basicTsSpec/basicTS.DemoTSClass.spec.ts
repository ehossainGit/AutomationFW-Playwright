import {test, expect} from '@playwright/test';
import { Person } from '../../basicTS/DemoTSClass';

test.describe('For testing class methods', () => {
  test('should add two numbers', () => {
    const person = new Person("John");
    console.log('result: ' + person.addElementToArr("Banana"));
    person.printArr();

    // expect(result).toBe(8);
  });

});