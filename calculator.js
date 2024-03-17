// I am here

export function sumNumbers(a, b) {
    return Number(a) + Number(b)
}

export function subtractionNumbers(a, b) {
    return Number(a) - Number(b)
}

export function multiplyNumbers(a, b) {
    return Number(a) * Number(b)
}

export function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return Number(a) / Number(b);
}

export function calculatePower(base, exponent) {
   if (base === 0 && exponent === 0) {
       throw new Error('Undefined value: 0^0');
   }
   return Math.pow(base, exponent);
}
