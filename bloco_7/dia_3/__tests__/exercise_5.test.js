const { expect } = require("@jest/globals");
const { obj1, obj2 } = require("../exercise_5");

describe('', () => {
  it('verifica se obj1 é igual a obj2', () => {
    expect(obj1).toEqual(obj2);
  });
});