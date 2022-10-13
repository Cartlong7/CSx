const intersection = (arrays) => {
  return arrays.reduce((a, b) => {
		if (!a || !b) return;
    if (a.length === 0) return b;
    return b.filter(element => a.includes(element));
  }, []);
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
