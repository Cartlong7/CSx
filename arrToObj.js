function arrToObj(array, callback) {
  // output is an object that has elements from passed-in array as keys and the outputs from t he callback as the value
  const capitalObj = {};
  for (let i = 0; i < array.length; i++) {
    capitalObj[array[i]] = callback(array[i]);
  }
  return capitalObj;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
