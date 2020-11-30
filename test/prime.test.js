const isPrime = require('../src/isPrime');
describe('Prime Number', () => {
    test('should return true if input is 2', () => {
        const number = 2;
        const output = isPrime(number);
        expect(output).toBeTruthy();
    });
    test('should return false if input is 9', () => {
        const number = 9;
        const output = isPrime(number);
        expect(output).toBeFalsy();
    });
});