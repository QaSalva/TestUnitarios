//TEST

const palindromo = require('../utils/palindromo')

describe('palindromo', () => {
    test.each`
      string   | expectedResult 
      ${'salva'} | ${'avlas'}
      ${'anna'}  | ${'anna'}

    `('$string should return $expectedResult', ({string, expectedResult}) => {
      expect(palindromo(string,)).toBe(expectedResult);
    });
})
