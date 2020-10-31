const { expect } = require("@jest/globals");
const myRemove = require("../exercise_2");

describe('removendo elementos de array', () => {
  it('verifica se de [1, 2, 3, 4] removendo 3, retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});