// Truthy and Falsy Values

// "", '', ``, 0, -0, NaN, false, null, undefined

let data = { name: "CodemanBD", founded: "2017" };
let word = ""; // "", '', ``, 0, -0, NaN, false, null, undefined

if (word) {
  console.log(true);
} else {
  console.log(false);
}

if (2 > 1) {
  console.log(true);
} else {
  console.log(false);
}

// Ternary Operator

// condition ? (runs if true) : (runs if false)

let temp = 31;

temp > 30 ? console.log("hot") : console.log("cold");

let age = 45;

age >= 18 ? console.log("adult") : console.log("children");

function greeting(person) {
  let name = person ? person : "stranger";
  return `Hello, ${name}`;
}

console.log(greeting(""));
console.log(greeting("aiman"));

// function greeting(person) {
//   let name = person ? person.name : "stranger";
//   return `Hello, ${name}`;
// }

// console.log(greeting({ name: "shafi" }));
// console.log(greeting({ name: "rafiq" }));

// Arrow Function
const newvalue = (a, b) => {
  const chuck = 42;
  return a + b + chuck;
};

console.log(newvalue(1, 2));

// Call Back function images
