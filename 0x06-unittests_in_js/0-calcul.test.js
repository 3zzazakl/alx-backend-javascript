const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

const TEST_CASES = [
  { a: 1.2, b: 2.3, expected: 3.5 },
  { a: 0.2, b: 0.3, expected: 0.5 },
  { a: 1.2, b: 0.3, expected: 1.5 },
  { a: 0.2, b: 1.3, expected: 1.5 },
];

describe('test calculateNumber function', () => {
  TEST_CASES.forEach((testCase) => {
    it(`test calculateNumber with ${testCase.a} and ${testCase.b}`, function () {
      assert.equal(calculateNumber(testCase.a, testCase.b), testCase.expected);
    });
  });
});
