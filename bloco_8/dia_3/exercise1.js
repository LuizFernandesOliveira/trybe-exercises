
const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
  const newArrays = arrays.reduce((acc, next) => {
    return acc.concat(next);
  });

  return newArrays;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);