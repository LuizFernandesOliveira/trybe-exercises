const getUserName = require("../exercise2");

describe('verificação de usuario', () => {
  it('verifica se o usuario com id 4 existe', async () => {
    try {
      const user = await getUserName(4);
      expect(user).toBe('Mark');
    } catch (erro) {
      expect(erro.error).toBe('User with 2 not found.');
    }
     
  });
});