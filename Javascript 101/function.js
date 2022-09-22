// // let num1 = 10;
// // let num2 = 20;

// // let add = num1 + num2;
// // console.log(add);

// // let num3 = 10;
// // let num4 = 20;

// // let add2 = num1 + num2;
// // console.log(add2);

// // let num6 = 20;
// // let num5 = 40;

// // let add3 = num5 + num6;
// // console.log(add3);

// function add(num1 = 20, num2 = 30) {
//   // parameter
//   console.log(num1 + num2);
// }

// // add(1, 3); // argument
// // add(5, 6);
// // add(15, 6);
// add();

// //5 - 20

// // for (let count = 5; count <= 20; count++) {
// //   console.log(count);
// // }

// function forLoop(initialValue, finalValue) {
//   for (let count = initialValue; count <= finalValue; count++) {
//     console.log(count);
//   }
// }

// // forLoop(10, 30);

// // let year = 4999;

// // if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
// //   console.log(year, "is leap year");
// // } else {
// //   console.log(year, "is not a leap year");
// // }

// function leapYear(year) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log(year, "is leap year");
//   } else {
//     console.log(year, "is not a leap year");
//   }
// }

// // leapYear(3022);
// // leapYear(4024);

// // let math = 65;
// // let english = 45;
// // let physics = 56;

// // let totalMarks = math + english + physics;

// // console.log(totalMarks);

// // if (totalMarks >= 300) {
// //   console.log("You got A+");
// // } else if (totalMarks >= 130) {
// //   console.log("You got B+");
// // } else if (totalMarks >= 120) {
// //   console.log("You got C");
// // } else {
// //   console.log("fail");
// // }

// function gpaCounter(person = "sakib", math, english, physics) {
//   let totalMarks = math + english + physics;

//   console.log("Marks", totalMarks, english, math, physics);

//   if (totalMarks >= 280) {
//     console.log(person, "You got A+");
//   } else if (totalMarks >= 250) {
//     console.log(person, "You got B+");
//   } else if (totalMarks >= 200) {
//     console.log(person, "You got C");
//   } else {
//     console.log(person, "fail");
//   }
// }

// gpaCounter("sakib", 90, 95, 95);
// gpaCounter("aj", 50, 65, 45);

// function sum(num1, num2) {
//   return num1 + num2;
// }

// let newSum = sum(60, 30);

// console.log(newSum);

// Arrow functions
const addition = (a, b) => a + b;

// console.log(addition(2, 3));

const greeting = (person) => {
  let name = person ? person : "stranger";
  return `Hello, ${name}`;
};

// console.log(greeting("aiman"));

// Call back function

const goodMorning = () => `Good Morning`;

const goodNight = (name) => `Good Night`;

// const greet = (name) => {
//   console.log(goodMorning(name));
//   console.log(goodNight());
//   console.log(`Hello, ${name}`);
// };

// console.log(greet("rahim"));
// console.log(goodMorning());

function greet(name, callBack) {
  console.log(`Hello ${name} ${callBack()}`);
}

console.log(greet("rahim", goodMorning));
console.log(greet("rahim", goodNight));
