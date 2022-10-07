function fibonacci(n, memo = {}) {
  // const memo = {};
  //base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  //base case with memo
  if (memo[n]) return memo[n];
  
  //recursive case
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = result;
  return result;
};

const output = fibonacci(40);

console.log(fibonacci(40));
