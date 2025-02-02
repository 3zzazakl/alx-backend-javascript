const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

const TEST_CASES = [
  { a: 1.2, b: 3.7, expected: 5 },
  { a: 1, b: 3, expected: 4 },
  { a: 1, b: 4.5, expected: 6 },
  { a: 1.5, b: 3.7, expected: 6 },
  { a: 1.4, b: 3.7, expected: 4 },
  { a: 0, b: 0, expected: 0 },
  { a: -2.7, b: 4.3, expected: 1 },
  { a: 9999999, b: 20000001, expected: 30000000 },
];

describe('test 0-calcul module', function () {
  TEST_CASES.forEach((testCase) => {
    it(`test calculateNumber with ${testCase.a} and ${testCase.b}`, function () {
      assert.equal(calculateNumber(testCase.a, testCase.b), testCase.expected);
    });
  });
});
