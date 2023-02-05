function valueSontEllesUniques(array) {
  
  let uniqueValues = new Set(array);

  if (array.length === uniqueValues.size) {
    return true;
  } else {

    return false;
  }
}

let array1 = [10, 20, 30, 40];

console.log(valueSontEllesUniques(array1));