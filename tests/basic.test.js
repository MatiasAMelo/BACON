const { sum, minus, product, divide,power } = require('../operations/basic');
const { TestScheduler } = require('jest');

test('Add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('Minus: a - b, where a=5 and b=4 to equal 1', () => {
    expect(minus(5, 4)).toBe(1);
})

test('Product: a * b, where a=5 and b=4 to equal 20', () => {
    expect(product(5, 4)).toBe(20);
})

test('Divide: a / b, where a=10 and b=2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
})
test('power: a ^ b, where a=10 and b=2 to equal 100', () => {
    expect(power(10, 2)).toBe(100);
})
