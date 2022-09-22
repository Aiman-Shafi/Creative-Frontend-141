const car = {
  brand: "BMW",
  weight: "850kg",
  model: 2011,
};

const student = {
  stuName: "Dulal",
  age: "25",
  married: true,
};

console.log(car.weight, student["age"]);

let data = {
  firstName: "Aiman",
  lastName: "Shafi",
  age: 34,
  married: false,
  university: "UIU",
  isAdmitted: function () {
    console.log(`${this.firstName} is addmitted to ${this.university}`);
  },
  waver: function () {
    console.log(`${this.firstName} have no waver yet`);
  },
};

console.log(data.married, data.lastName);
data.isAdmitted();
data.waver();
console.log(data);
// console.log(student)

// let name = "Dulal"

// let paragraph = `${name} is hard working person`

// console.log(paragraph)
