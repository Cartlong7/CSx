const goodKeys = (obj, cb) => {
  const birdArr = [];
  for(const prop in obj) {
    if (cb(obj[prop])) birdArr.push(prop)
  }
  return birdArr;
}

// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
