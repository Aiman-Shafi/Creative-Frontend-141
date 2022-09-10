// Numbers
var numOne = 15; // 4, 45,67, 23, 200, - round numbers or natural numbers or integer

var numTwo = -54.894456565; // floating point number or decimal number

var add = numOne + numTwo;

console.log(numOne);
console.log(add);
console.log(add.toFixed(3));
console.log(parseFloat(add)); // converting to Float (decimal)
console.log(parseInt(add)); // converting to Integer

var round = Math.round(add); // make the floating number a round number 9.5 => 10 or 12.65 => 13
console.log("round: " + round);

var ceil = Math.ceil(add); // takes the value to the upper level when ever we have a decimal point
console.log("ceil: " + ceil);

var floor = Math.floor(add); // doesn't take the value to the upper level whatever decimal value is.
console.log(floor);

console.log("positve: " + Math.abs(add)); // makes the negative value a positive value

var random = Math.floor(Math.random() * 6 + 1); // random number between 1 and 6
console.log(random);
