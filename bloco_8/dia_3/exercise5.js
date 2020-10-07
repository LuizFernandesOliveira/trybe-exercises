    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const nameAs = names.map((name) => {
    return name.split('');
  }).reduce((acc, next) => {
    return acc.concat(next)
  }).reduce((acc, next) => {
    if (acc.toUpperCase() === 'A' || next.toUpperCase() === 'A') return acc + next
    return acc;
  })

  return result.length;
}


assert.deepEqual(containsA(), 20);