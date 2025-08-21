import {test, expect} from '@playwright/test';
import { NumberDemo } from '../../basicTS/numberDemo';

test.describe('NumberDemo Tests', () => {
  test('should add two numbers', () => {
    const result = NumberDemo.add(5, 3);
    expect(result).toBe(8);
  });

  test('should subtract two numbers', () => {
    const result = NumberDemo.subtract(10, 4);
    expect(result).toBe(6);
  });

  test('should reverse a number array', () => {
    const arr = [1, 2, 3, 4];
    const reversed = NumberDemo.revverserNumArray(arr);
    expect(reversed).toEqual([4, 3, 2, 1]);
  });

  test('should sort a number array using sort', () => {
    const arr = [3, 1, 4, 2];
    const sorted = NumberDemo.sortNumArray(arr);
    expect(sorted).toEqual([1, 2, 3, 4]);
  });

  test('should sort a number array without using sort', () => {
    const arr = [3, 1, 4, 2];
    const sortedWithoutSort = NumberDemo.sortNumArrayWithoutSort(arr);
    expect(sortedWithoutSort).toEqual([1, 2, 3, 4]);
  });
});