const flow = (input, funcArray, count = 0) => count === funcArray.length ? input : flow(funcArray[count](input), funcArray, ++count);
// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

// Or...

function flow(input, funcArray, i = 0) {
  if (funcArray.length === 0) return input;
	input = funcArray[0](input);
  return flow(input, funcArray.slice(1), ++i);
}
