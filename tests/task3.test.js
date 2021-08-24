const { describe, test, expect } = require('@jest/globals');
const calculator = require('../tasks/task3');

describe('addition', () => {
    test('add 1 to 2', () => {
        expect(calculator.add(1,2)).toBe(3);
    });

    test('add 1 to 0', () => {
        expect(calculator.add(1,0)).toBe(1);
    });

    test('add 1 to -2', () => {
        expect(calculator.add("1",-2)).toBe(-1);
    });

    test('Throw error', () => {
        expect(() => calculator.add("1p",0)).toThrow();
    });
});

describe('substitution', () => {

    test('substract 2 from 4', () => {
        expect(calculator.substract(4,2)).toBe(2);
    });

    test('substract 4 from 2', () => {
        expect(calculator.substract(2,4)).toBe(-2);
    });

    test('substract 2 from 0', () => {
        expect(calculator.substract(0,2)).toBe(-2);
    });

    test('Throw error', () => {
        expect(() => calculator.substract("1p",0)).toThrow();
    });
});

describe('multiplication', () => {
    test('multiply 1 by 0', () => {
        expect(calculator.multiply(1,0)).toBe(0);
    });

    test('multiply 1 by -1', () => {
        expect(calculator.multiply(1,-1)).toBe(-1);
    });

    test('multiply -1 by -1', () => {
        expect(calculator.multiply(-1,-1)).toBe(1);
    });

    test('Throw error', () => {
        expect(() => calculator.multiply("1p",0)).toThrow();
    });
});

describe('division', () => {
    test('divide 1 by 0', () => {
        expect(() => calculator.divide(1,0)).toThrow();
    });

    test('divide 0 by 1', () => {
        expect(calculator.divide(0,1)).toBe(0);
    });

    test('divide 10 by 1', () => {
        expect(calculator.divide(10,1)).toBe(10);
    });

    test('Throw error', () => {
        expect(() => calculator.devide("1p",0)).toThrow();
    });
});