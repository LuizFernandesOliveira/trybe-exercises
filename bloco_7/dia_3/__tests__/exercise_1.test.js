const { expect } = require('@jest/globals');
const sum = require('../exercise_1')

describe('', () => {
  it('Verifica se 4 mais 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verifica se 0 mais 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Verifica se 4 mais "5" retorna Error', () => {
    expect(sum(4, '5')).toBe('parameters must be numbers');
  })
});

//assert.equal(sum(0, 0), 0, 'Error');
//assert.equal(sum(4, "5"), 9, 'Error');