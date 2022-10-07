const dateStamp = (callback) => {
  const findDate = (...args) => {
    const cache = {};
    const newDate = new Date().toDateString();
    cache.date = newDate;
    cache.output = callback(...args);
    return cache
  }
  return findDate;
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
console.log(stampedMultBy2(12));
