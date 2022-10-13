const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
  	cb(array[i]);
  }
}

const map = (array, cb) => {
  const newArr = [];
  forEach(array, function(element) {
          newArr.push(cb(element));
  });
  return newArr;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
