// var isRaining = false;

// // if (isRaining == true) {
// //   console.log("I will go for shopping!");
// // }

// // ==  or ===(equal)
// // != (not equal)

// var num1 = 35;

// // if (num1 == 34) {
// //   console.log("yes the value is 34!");
// // }
// // if (num1 != 34) {
// //   console.log("yes the value is not 34!");
// // }

// // =============

// var age = 25;

// // if (age >= 18) {
// //   console.log("Yes you can visit the website!");
// // }

// // if (age < 18) {
// //   console.log("Sorry! you cannot visit the website!");
// // }

// // Solve the problem with Javascript  to check weather the temperature is hot, cold or normal

// // 30 < hot
// // 30 > normal
// // 25 > cold

// var temp = 24;

// // if (temp > 30) {
// //   console.log("the weather is hot");
// // }

// // if (temp < 30) {
// //   console.log("the weather is normal");
// // }

// // if (temp <= 25) {
// //   console.log("the weather is cold");
// // }

// if (temp > 30) {
//   console.log("hot");
// } else if (temp <= 25) {
//   console.log("cold");
// } else {
//   console.log("normal");
// }

// // age math

// let myAge = 19;

// if (myAge <= 18) {
//   console.log("not allowed to the program");
// } else {
//   console.log("you are allowed to attend the program");
// }

// // subject Math = 65;
// // subject English = 75;
// // find out the grade average of two subjects
// // total marks 150 <  = A+
// // 130 >  = B+
// // 120> = C
// // fail

// let math = 65;
// let english = 45;

// let totalMarks = math + english;

// console.log(totalMarks);

// if (totalMarks >= 150) {
//   console.log("You got A+");
// } else if (totalMarks >= 130) {
//   console.log("You got B+");
// } else if (totalMarks >= 120) {
//   console.log("You got C");
// } else {
//   console.log("fail");
// }

// Ternary Operator

let temperature = 30;

// if (temperature >= 30) {
//   console.log("hot");
// } else {
//   console.log("cold");
// }

// condition ? (runs if true) : (runs if false)

temperature >= 30 ? console.log("hot") : console.log("cold");

// function greeting(person) {
//   let name = person ? person : "stranger";
//   return `Hello, ${name}`;
// }

// console.log(greeting());
// console.log(greeting(" "));

// let isPresent = "";

// isPresent ? console.log("value is here") : console.log("value is not here");

let profile = {
  name: "Rakib",
  age: 25,
};

function greeting(person) {
  let name = person.name ? person.name : "stranger";
  return `Hello, ${name}`;
}

console.log(
  greeting({
    name: "",
    age: 25,
    year: 2018,
  })
);
