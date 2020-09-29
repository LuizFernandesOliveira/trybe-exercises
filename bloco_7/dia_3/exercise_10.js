const assert = require('assert');

const greetPeople = (people) => {
  const peoplesWithGreeting = [];
  let greeting = 'Hello';

  for (const person in people) {
    peoplesWithGreeting[person] = `${greeting} ${people[person]}`
  }
  return peoplesWithGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);