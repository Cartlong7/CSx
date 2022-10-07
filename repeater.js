function repeater(char) {
	if (char.length === 5) return char;	 // base case: if input string has a length of 5, return input string
  return repeater(char + char[0]);	// recursive case: call function with input string + first character of input string
} 

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
