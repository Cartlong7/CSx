const pluralize = (arrayOfStrings) => {
  let output = [];
	for (let i = 0; i < arrayOfStrings.length; i++) {
    output.push(arrayOfStrings[i] + 's');
  }
  return output;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
