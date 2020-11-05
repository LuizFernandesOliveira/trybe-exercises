const getUserName = require(".");

describe('verificação de usuario', () => {
  it('verifica se o usuario com id 4 existe', () => {
    expect.assertions(1);
    return getUserName(4)
      .then((user) => {
        expect(user).toBe('Mark');
      })
  });

  it('verifica se o usuario com id 2 não existe', () => {
    expect.assertions(1);
    return getUserName(2)
      .catch((erro) => {
        expect(erro.error).toBe('User with 2 not found.');
      })
  });
})