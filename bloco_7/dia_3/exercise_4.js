const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', 'error')
assert.deepStrictEqual(myFizzBuzz(3), 'fizz', 'error')
assert.deepStrictEqual(myFizzBuzz(5), 'buzz', 'error')
assert.deepStrictEqual(myFizzBuzz(7), 7, 'error')
assert.deepStrictEqual(myFizzBuzz('ok'), false, 'error')