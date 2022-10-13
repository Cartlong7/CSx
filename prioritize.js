const prioritize = (array, cb) => {
  const newArray = array.filter(cb);
  array.forEach(element => {
    if (!cb(element)) newArray.push(element);
  })
  return newArray;
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
