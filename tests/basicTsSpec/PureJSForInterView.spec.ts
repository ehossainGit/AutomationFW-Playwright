import {test, expect} from '@playwright/test';
import { demoArray } from '../../common-utils/PureJSForInterView';

test.describe('For testing class methods', () => {
  test('should add two numbers', () => {
    demoArray();
  });

});