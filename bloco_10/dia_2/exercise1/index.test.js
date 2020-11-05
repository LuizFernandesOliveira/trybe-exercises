const uppercase = require(".");

test('verifica se a função upercase está funcionando', (done) => {
  uppercase('ola', (word) => {
    expect(word).toBe('OLA');
    done();
  });
});