import {describe, test, it, expect} from "vitest";
import {sumNumbers} from "../calculator";

describe('testTwoSumNumbers', () => {
    test('Should return sum of two numbers ', () => {
        // Arrange
        const numOne = 5
        const numTwo = 5
        // Act
        const result = sumNumbers(numOne, numTwo)
        // Assert
        expect(result).toBe(10)
    })
    test('Should return sum of two numbers ', () => {
        expect(sumNumbers(10, 5)).toBe(15)
    })
    test('Should return sum of two numbers ', () => {
        expect(sumNumbers(4, 5)).toBe(9)

    })
    test('Should return sum of two numbers ', () => {
        expect(sumNumbers(1, 5)).toBe(6)

    })
    test('Should return sum of two numbers ', () => {
        expect(sumNumbers(0, 5)).toBe(5)

    })
})