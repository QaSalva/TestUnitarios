//TEST

const isUpperCase = require('../utils/esmayuscula');

describe('upperCase check', () => {
    test.each`
      sentence      | expectedResult
      ${'HELLO'}    |  ${true}
      ${'hello'}    |  ${false}

     `('$sentence should return $expectedResult', ({sentence, expectedResult}) => {
      expect(isUpperCase(sentence)).toBe(expectedResult);
    });
}) 


