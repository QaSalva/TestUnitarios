//TEST

const palindromo = require('../utils/palindromo')

test('palindromo de salva', () => {
    const result = palindromo('salva')
    expect(result).toBe('avlas')
})

test ('palindromo de anna', () => {
    const result = palindromo('anna')
    expect(result).toBe('anna')
})