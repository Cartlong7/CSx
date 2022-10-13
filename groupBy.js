const groupBy = (array, cb) => {
  const cache = {};
  array.forEach(element => {
    const key = cb(element);
    !cache[key] ? cache[key] = [element] : cache[key].push(element);
  })
  return cache;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
