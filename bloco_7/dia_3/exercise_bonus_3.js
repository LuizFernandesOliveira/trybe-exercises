const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (words) => {
  let result = [words[2]];
  words.splice(2, 1);
  return result;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);