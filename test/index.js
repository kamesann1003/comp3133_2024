const assert = require('assert')
const { add, sub, mul, div } = require('../app/calculator');

// Test cases for the add function
describe('Addition', function () {
    it('should return the sum of two numbers', function () {
        assert.equal(add(5, 2), 7); // PASS
    });

    it('should handle incorrect sum', function () {
        assert.equal(add(5, 2), 8); // FAIL
    });
});

// Test cases for the sub function
describe('Subtraction', function () {
    it('should return the difference of two numbers', function () {
        assert.equal(sub(5, 2), 3); // PASS
    });

    it('should handle incorrect difference', function () {
        assert.equal(sub(5, 2), 5); // FAIL
    });
});

// Test cases for the mul function
describe('Multiplication', function () {
    it('should return the product of two numbers', function () {
        assert.equal(mul(5, 2), 10); // PASS
    });

    it('should handle incorrect product', function () {
        assert.equal(mul(5, 2), 12); // FAIL
    });
});

// Test cases for the div function
describe('Division', function () {
    it('should return the quotient of two numbers', function () {
        assert.equal(div(10, 2), 5); // PASS
    });

    it('should handle incorrect quotient', function () {
        assert.equal(div(10, 2), 2); // FAIL
    });
});