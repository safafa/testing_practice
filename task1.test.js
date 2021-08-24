const { test, expect } = require('@jest/globals');
const stringLength = require('./task1');

test('check safa length', () => {
    expect(stringLength('safa')).toBe(4);
});

test('function should throw an error', () => {
    expect(stringLength('12345678909')).toThrowError;
})
test('function should throw an error', () => {
    expect(stringLength('')).toThrowError;
})