const dateStamp = (callback) => {
  return function (...args){
    const cache = {};
    cache.date = new Date().toDateString();
    cache.output = callback(...args);
    return cache;
  }
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
console.log(stampedMultBy2(12));
