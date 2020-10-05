const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = (numbers) => numbers.reduce((value, nextValue) => value + nextValue);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);