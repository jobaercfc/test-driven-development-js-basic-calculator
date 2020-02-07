const assert = require('assert');
const operations = require('./operation.js')

var num1 = 5, num2 = 6;
var sum = 11;
var sub = -1;
var multiply = 30, divide = 0;

it('should return '+sum, () => {
    assert.equal(operations.add(num1,num2), sum);
});

it('should return '+sub, () => {
    assert.equal(operations.subtract(num1,num2), sub);
});

it('should return '+multiply, () => {
    assert.equal(operations.multiply(num1,num2), multiply);
});

it('should return '+divide, () => {
    assert.equal(operations.divides(num1,num2), divide);
});

//validate numbers
it('should return false if any string is used', () => {
    assert.equal(operations.validateNumbers('samme', num2), false);
});

it('should return false if any string is used', () => {
    assert.equal(operations.validateNumbers('sada', 'ss'), false);
});

it('should return true if both are numbers', () => {
    assert.equal(operations.validateNumbers(num1, num2), true);
});
