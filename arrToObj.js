const arrToObj = (arr, cb) => {
  const newObj = {};
  arr.forEach(el => newObj[el] = cb(el));
  return newObj;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
