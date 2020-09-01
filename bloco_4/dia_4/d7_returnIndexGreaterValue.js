function returnGreaterValue(myArray){
  const myArrayValues = myArray;
  let indexGreaterValue = 0;

  for(let index in myArrayValues){
    if( myArrayValues[index] > myArrayValues[indexGreaterValue]) {
      indexGreaterValue = index;
    } 
  }

  return indexGreaterValue;
}

console.log(returnGreaterValue([2, 3, 6, 7, 10, 1]));

