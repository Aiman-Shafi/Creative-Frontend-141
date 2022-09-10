//   alert("Hello Javascript");
//   console.log("Hello.. ");
//   console.log(10 + 10);
//   console.log("sadasda");

// string & number

// variables
//   var box = "apple";
//   var box2 = "40";
//   var lastNumber = 40;
//   var firstNumber = 40;
//   var person_age = 50;

//   console.log(typeof box);
//   console.log(typeof lastNumber);

// Variable should start with var
// first letter should be small
// camel case person_age, personAge
// cannot start it with a number

// find the sum of two numbers

var numOne = 40;
var numTwo = 20;

var addition = numOne + numTwo;
var subs = numOne - numTwo;

//   console.log("Addition" + " " + addition);
//   console.log("Substration " + subs);
//   console.log("Multiply " + numOne * numTwo);
//   console.log("Division " + numOne / numTwo);

//   Data types

//   boolean - true / false
//   null - khali , 0
//   undefined - kono kichu define kora hoyni
//   Number
//   String

//   boolean
// var isRaining = false;
// var isRaining = true;

// console.log(typeof isRaining);

//   null
var number = null;
// console.log(number);

// undefined
var counter;
// console.log(counter);

// NaN - not a number
var counterOne = 34;
// console.log("hi" * 20);

// Conditions if && else

//   boolean
var isRaining = false;

// if (isRaining == true) {
//   console.log("I will go for shopping!");
// }

// ==  or ===(equal)
// != (not equal)

var num1 = 35;

// if (num1 == 34) {
//   console.log("yes the value is 34!");
// }
// if (num1 != 34) {
//   console.log("yes the value is not 34!");
// }

// =============

var age = 25;

// if (age >= 18) {
//   console.log("Yes you can visit the website!");
// }

// if (age < 18) {
//   console.log("Sorry! you cannot visit the website!");
// }

// Solve the problem with Javascript  to check weather the temperature is hot, cold or normal

// 30 < hot
// 30 > normal
// 25 > cold

var temp = 24;

// if (temp > 30) {
//   console.log("the weather is hot");
// }

// if (temp < 30) {
//   console.log("the weather is normal");
// }

// if (temp <= 25) {
//   console.log("the weather is cold");
// }

if (temp > 30) {
  console.log("hot");
} else if (temp <= 25) {
  console.log("cold");
} else {
  console.log("normal");
}

// age math

let myAge = 19;

if (myAge <= 18) {
  console.log("not allowed to the program");
} else {
  console.log("you are allowed to attend the program");
}

// subject Math = 65;
// subject English = 75;
// find out the grade average of two subjects
// total marks 150 <  = A+
// 130 >  = B+
// 120> = C
// fail

let math = 65;
let english = 45;

let totalMarks = math + english;

console.log(totalMarks);

if (totalMarks >= 150) {
  console.log("You got A+");
} else if (totalMarks >= 130) {
  console.log("You got B+");
} else if (totalMarks >= 120) {
  console.log("You got C");
} else {
  console.log("fail");
}
