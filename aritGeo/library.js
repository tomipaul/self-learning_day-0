function aritGeo(numberArray) {
  /*determines if a progression is arithmethic, geometric or neither*/
  /*if input is not an array, return an error message*/
  if (!Array.isArray(numberArray)) {
    return "Function requires array input!";
  }
  /*if array length is 0, return 0*/
  if (numberArray.length === 0) {
    return 0;
  }
  /*initialise ratio to the division of the first two elements of the array
  initialise difference to the difference of the first two elements of the array*/
  let [ratio, difference] = [(numberArray[1]/numberArray[0]), (numberArray[1]-numberArray[0])];
  /*iterate through the array to check if the ratio or difference persists
  if ratio persists, progression is geometric
  if difference persists, progression is arithmethic
  if neither persists return -1*/
  for(let index=1; index<numberArray.length-1; index++) {
    if (numberArray[index+1]/numberArray[index] !== ratio) {
      break;
    }
    if (index == numberArray.length-2) {
      return "Geometric";
    }
  }
  for(let index=1; index < numberArray.length-1; index++) {
    if (numberArray[index+1]-numberArray[index] !== difference) {
      break;
    }
    if (index === numberArray.length-2) {
      return "Arithmetic";
    }
  }
  return -1;
}
module.exports = aritGeo;