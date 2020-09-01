function returnGreaterFhrase(myArray){
  const myArrayValues = myArray;
  let indexGreaterFhrase = myArrayValues[0];

  for(let value of myArrayValues){
    if(value.length > indexGreaterFhrase.length){
      indexGreaterFhrase = value;
    }
  }

  return indexGreaterFhrase;
}

console.log(returnGreaterFhrase(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

