// implementing the forEach method
const pluralize = stringArr => {
  const plurArr = [];
  stringArr.forEach(el => plurArr.push(el + 's'));
  return plurArr;
}

// Using a for loop
const pluralize = arrOfStrings => {
  const pluralArr = [];
  for (let i = 0; i < arrOfStrings.length; i++) {
    pluralArr.push(arrOfStrings[i] + 's');
  }
  return pluralArr;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
