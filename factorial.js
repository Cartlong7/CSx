	// base case: when counter is less than or equal to 1, return 1
  // recursive case: num * the recursive call of num - 1
const factorial = (num, product = 1) => num === 1 ? product: factorial(num - 1, product * num)

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
