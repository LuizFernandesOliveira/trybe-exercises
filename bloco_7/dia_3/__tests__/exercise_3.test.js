const { expect } = require("@jest/globals");
const myRemoveWithoutCopy = require("../exercise_3");

describe('removendo elementos de array', () => {
  it('verifica se [1, 2, 3, 4] tirando 3, retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('verifica se [1, 2, 3, 4] tirando 3, não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('verifica se [1, 2, 3, 4] tirando 5,retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
