const pluralize = (stringArr) => {
  const plurArr = [];
	stringArr.forEach(el => plurArr.push(el + 's'));
  return plurArr;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
