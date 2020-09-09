const { hypotenuse } = require('../operations/hypotenuse');
const { TestScheduler } = require('jest');

test('Add 3 and 4 to equal 5', () => {
    expect(hypotenuse(3, 4)).toBe(5);
})