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
var number = true;
// console.log(number);

// Truthy & Falsy values

// "", '', ``, 0, null, undefined, false, NaN - (outcome always fasle ashbe)

let word = NaN;

if (word) {
  console.log("it's here");
} else {
  console.log("it's not here");
}

if (2 < 1) {
  console.log(true);
} else {
  console.log(false);
}
