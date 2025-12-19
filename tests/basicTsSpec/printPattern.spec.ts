import {test, expect} from '@playwright/test';

test.describe('For testing class methods', () => {
  test('should add two numbers', () => {
    // printPattern();
    // printPattern2();
    printPattern3();
  });

});

function printPattern() {
  const rows = 5;
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += j + ' ';
    }
    console.log(pattern.trim());
  }
}
function printPattern2() {
  const rows = 5;
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '*' + ' ';
    }
    console.log(pattern.trim());
  }
}
function printPattern3() {
  const rows: number = 4;
  for (let i = 1; i <= rows; i++) {
      console.log("* ".repeat(i));
  }
}

