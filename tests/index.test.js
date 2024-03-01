import {describe, test, expect} from "vitest";
import {divideNumbers, multiplyNumbers, subtractionNumbers, sumNumbers} from "../calculator";

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