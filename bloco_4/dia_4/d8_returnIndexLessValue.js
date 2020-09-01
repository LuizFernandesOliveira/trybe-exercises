function returnLessValue(myArray){
  const myArrayValues = myArray;
  let indexLessValue = 0;

  for(let index in myArrayValues){
    if( myArrayValues[index] < myArrayValues[indexLessValue]) {
      indexLessValue = index;
    } 
  }

  return indexLessValue;
}

console.log(returnLessValue([2, 4, 6, 7, 10, 0, -3]));

