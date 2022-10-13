const objOfMatches = (array1, array2, cb) => {
  let match = {};
  for (let i = 0; i < array1.length; i++) {
    if (cb(array1[i]) === array2[i]) {
      match[array1[i]] = array2[i];
    }
  }
  return match;
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
