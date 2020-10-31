const { expect } = require("@jest/globals");
const myFizzBuzz = require("../exercise_4");

describe('jogo do fizzBuzz', () => {
  it('verifica que 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('verifica que 3 retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('verifica que 5 retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('verifica que 7 retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('verifica que ok retorna false', () => {
    expect(myFizzBuzz('ok')).toBe(false);
  });
});

// implemente seus testes aqui
//assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', 'error')
//assert.deepStrictEqual(myFizzBuzz(3), 'fizz', 'error')
//assert.deepStrictEqual(myFizzBuzz(5), 'buzz', 'error')
//assert.deepStrictEqual(myFizzBuzz(7), 7, 'error')
//assert.deepStrictEqual(myFizzBuzz('ok'), false, 'error')