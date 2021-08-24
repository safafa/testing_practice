const { test, expect } = require('@jest/globals');
const reverseString = require('./task2');

test('function return reverse', () => {
    expect(reverseString('safa')).toBe('afas');
});