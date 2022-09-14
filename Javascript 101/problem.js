// find out if the number is odd or even?

// odd = 1,3,5,7,9,11,13, 99...
// even = 2,4,6,8,12,16,20...

let number = 90;

if (number % 2 == 0) {
  console.log(number, "is an even number");
} else {
  console.log(number, "is a odd number");
}

// find the year is leap year or not

// && - and - All the conditions should be true
// || - or  - any of the conditions can be true

// hints: 2022 ..
// the year should be divisible by 4 and not divisible by 100
// if the year is divisible by 400
let year = 4999;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year, "is leap year");
} else {
  console.log(year, "is not a leap year");
}

// let condition = true;

if (true && false) {
  console.log(true, "condition is true");
} else {
  console.log(false);
}

// example

let person = "rakib";
let age = 43;

// jodi name shakib hoy and jodi boyosh 35 or tarpr niche hoy tapr take entry deya hbe

if (person == "shakib" || age <= 35) {
  console.log("he can enter the gate");
} else {
  console.log("he can't enter the gate");
}

// ++
// --
// **

// let num = 45;
// num++; // 46
// console.log(num);
// num++; // 47
// num++; // 48

// 4**4  == 4 x 4 x 4 x 4 == 256
// console.log(num);

// let num = 45;
// num--; // 44
// console.log(num);
// num--; // 43
// num--; // 42

// console.log(num);

// find if the number is positive or negative or 0

let newNumber = 0;

if (newNumber > 0) {
  console.log("the num is positive");
} else if (newNumber < 0) {
  console.log("the number is negative");
} else {
  console.log("0");
}
