var age, person, job, joiningDate;

age = 24;
person = "Nadim";
job = "Manager";

console.log(age, person, job);

age = 23;

console.log(age);

title = "Mr.";
joiningDate = "13th Feb";
console.log(title, joiningDate);

// let & const

let personName;

personName = "hello";
personAge = 34;
personAge = 21;
console.log(personName, personAge);

// var carModel = 2017;

// {
//   var carModel = 2018;
//   console.log(carModel);
// }

// console.log(carModel);

let carModel = 2017;

{
  let carModel = 2018;
  console.log("vitore:" + carModel);
}

console.log(carModel);

const user = "Hello JS";
console.log(user);
