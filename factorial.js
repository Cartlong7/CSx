function factorial(num) {
  if (num <= 1) return 1;  	// base case: when counter is less than or equal to 1, return 1
  const newNum = num - 1;
 
  return num * factorial(newNum);  // recursive case: num * the recursive call of num - 1
}
// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
