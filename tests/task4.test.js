const { test, expect } = require('@jest/globals');
const  capitalize = require('../tasks/task4');

test('return capitalized saFa', () => {
    expect(capitalize('saFa')).toBe('Safa');
});

test('give empty sting', () => {
    expect(() => capitalize('')).toThrow();
});

test('Only accept a string', () => {
    expect(() => capitalize(123)).toThrow();
});