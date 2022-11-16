// TEST

const sum = require('../utils/suma');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('adds -30 + -15 to equal -45', () => {
    expect(sum(-30,-15)).toBe(-45);
})

test('adds 1.2 + 1.2 to equal 2.4', () => {
    expect(sum(1.2,1.2)).toBe(2.4);
})