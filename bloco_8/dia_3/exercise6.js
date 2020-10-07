    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  const medias = notas.map((nota) => {
    return nota.reduce((acc, next) => {
      return acc + next;
    }) / 5;
  });
  const result = alunos.map((aluno, index) => {
    return {
      name: aluno,
      average: medias[index]
    }
  });

  return result
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);