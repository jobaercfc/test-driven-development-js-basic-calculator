const assert = require('assert');
const operations = require('./operation.js')

var num1 = 5, num2 = 6;
var sum = 12;

it('should return '+sum, () => {
    assert.equal(operations.add(num1,num2), sum);
})