import {describe, test, expect} from "vitest";
import {calculatePower, divideNumbers, multiplyNumbers, subtractionNumbers, sumNumbers} from "../calculator";

describe('sumNumbers', () => {
    test('should return sum of two numbers ', () => {
        // Arrange
        const numOne = 5
        const numTwo = 5
        // Act
        const result = sumNumbers(numOne, numTwo)
        // Assert
        expect(result).toBe(10)
    })
    test('should return sum of two numbers ', () => {
        expect(sumNumbers(10, 5)).toBe(15)
    })
    test('should return sum of two numbers ', () => {
        expect(sumNumbers(4, 5)).toBe(9)

    })
    test('should return sum of two numbers ', () => {
        expect(sumNumbers(1, 5)).toBe(6)

    })
    test('should return sum of two numbers ', () => {
        expect(sumNumbers(0, 5)).toBe(5)
    })
})

describe('subtractionNumbers', () => {
    test('should return subtraction of numbers', () => {
        expect(subtractionNumbers(10, 5)).toBe(5)
    })
    test('should return subtraction of numbers', () => {
        expect(subtractionNumbers(1, 5)).toBe(-4)
    })
    test('should return subtraction of numbers', () => {
        expect(subtractionNumbers(40, 5)).toBe(35)
    })
    test('should return subtraction of numbers', () => {
        expect(subtractionNumbers(11, 0)).toBe(11)
    })
})

describe('multiplyNumbers', () => {
    test('should return multiply numbers', () => {
        expect(multiplyNumbers(1, 10)).toBe(10)
    })
    test('should return multiply numbers', () => {
        expect(multiplyNumbers(1, 1)).toBe(1)
    })
    test('should return multiply numbers', () => {
        expect(multiplyNumbers(3, 10)).toBe(30)
    })
    test('should return multiply numbers', () => {
        expect(multiplyNumbers(1, 2)).toBe(2)
    })
})

describe('divideNumbers', () => {
    test('should return divide numbers', () => {
        expect(divideNumbers(10, 2)).toBe(5)
    })
    test('should return divide numbers', () => {
        expect(divideNumbers(2, 1)).toBe(2)
    })
    test('should return divide numbers', () => {
        expect(divideNumbers(100, 2)).toBe(50)
    })
    test('should return divide numbers', () => {
        expect(divideNumbers(1, 2)).toBe(0.5)
    })
    test('should return error ', () => {
        expect(divideNumbers(5, 0)).toThrowError('Division by zero is not allowed')
    })
})

describe('calculatePower', ()=>{
   test('should return power', () => {
       expect(calculatePower(2,2)).toBe(4);
   });
   test('should return power', () => {
       expect(calculatePower(3,2)).toBe(9);
   });
   test('should return power', () => {
       expect(calculatePower(4,2)).toBe(16);
   });
   test('should return error', () => {
       expect(calculatePower(0, 0)).toThrowError('Undefined value: 0^0');
   });
});