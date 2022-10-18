const cycleIterator = (array) => {
  return function(){
    const day = array.shift();
    array.push(day);
    return day;    
  }
}

// OR ...

const cycleIterator = (array) => {
	let index = 0;
  const whatDayIsIt = () => {
    const result = array[index++];
    if (index >= array.length) index = 0;
    return result
  };
  return whatDayIsIt
}



// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
const getDay = cycleIterator(daysOfWeek);
console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'
